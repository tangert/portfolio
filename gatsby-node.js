const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

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
  const tagTemplate = path.resolve(`src/templates/tags-page.js`);
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

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve(`src/templates/post.js`);

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("./src/templates/blog-post.js")
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(
          limit: 1000
          sort: { order: DESC, fields: [frontmatter___date] }
          ) {
          edges {
            node {
              html
              frontmatter {
                date
                path
                tags
                title
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const blogPosts = result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.path.includes('/blog'));
        const workPosts = result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.path.includes('/work'));

        createTagPages(createPage, blogPosts);
        createTagPages(createPage, workPosts);

        producePosts(blogPosts, postTemplate, createPage);
        producePosts(workPosts, postTemplate, createPage);

      })
    )
  })
}
