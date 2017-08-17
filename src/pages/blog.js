import React, { Component } from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import Link from '../components/Link';

import '../css/index.css';

const BlogPostCard = (props) => {
  return (
    <div>
      Hi
    </div>
  )
}

//THIS IS HOME PAGE BRO.
//NEED TO MAKE A LAYOUT FOR NAVIGATION
//DEFAULT POSTS ARE FROM WORK

class Blog extends Component {
  render () {
    const all_posts = this.props.data.allMarkdownRemark.edges;
    const blog_posts = all_posts.filter(post => post.node.frontmatter.path.includes('/blog'));
    return (
      <div>
        <div className="blog-posts">
          {blog_posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className="blog-post-preview" key={post.id}>
                  <h1 className="title">
                    <GatsbyLink to={post.frontmatter.path}>
                        {post.frontmatter.title}
                    </GatsbyLink>

                  </h1>
                  <h2 className="date">
                    {post.frontmatter.date}
                  </h2>
                  <p>
                    {post.excerpt}
                  </p>
                  <Link to={post.frontmatter.path}>Read more</Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
