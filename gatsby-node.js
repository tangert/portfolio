const path = require('path');

const producePosts = (posts, template, createPage) => {
  posts.forEach(({ node }, index) => {
    const prev = index === 0 ? false : posts[index - 1].node;
    const next = index === posts.length - 1 ? false : posts[index + 1].node;
    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {
        prev,
        next
      }
    });
  });
}

const createTagPages = (createPage, edges) => {
  const tagTemplate = path.resolve(`src/templates/tags.js`);
  const posts = {};

  edges
    .forEach(({ node }) => {
      if (node.frontmatter.tags) {
        node.frontmatter.tags
          .forEach(tag => {
            if (!posts[tag]) {
              posts[tag] = [];
            }
            posts[tag].push(node);
          });
      }
    });

  createPage({
    path: '/tags',
    component: tagTemplate,
    context: {
      posts
    }
  });

  Object.keys(posts)
    .forEach(tagName => {
      const post = posts[tagName];
      createPage({
        path: `/tags/${tagName}`,
        component: tagTemplate,
        context: {
          posts,
          post,
          tag: tagName
        }
      })
    });
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const workPostTemplate = path.resolve(`src/templates/work-post.js`);

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          timeToRead
          frontmatter {
            date
            path
            tags
            title
          }
        }
      }
    }
  }`)
  .then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const blogPosts = result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.path.includes('/blog'));
    const workPosts = result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.path.includes('/work'));

    createTagPages(createPage, blogPosts);
    createTagPages(createPage, workPosts);

    producePosts(blogPosts, blogPostTemplate, createPage);
    producePosts(workPosts, workPostTemplate, createPage);

  });
};
