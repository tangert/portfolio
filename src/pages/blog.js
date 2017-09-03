import React, { Component } from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import Link from '../components/Link';
import BlogPostCard from '../components/BlogPostCard/BlogPostCard';
import '../css/pages/blog-page.scss';

class Blog extends Component {
  constructor(props){
    super(props);

    const all_posts = this.props.data.allMarkdownRemark.edges;
    const blog_posts = all_posts.filter(post => post.node.frontmatter.path.includes('/blog'));

    this.state = {
      visible_posts: blog_posts,
      blog_posts: blog_posts,
    };
  }

  render () {
    return (
      <div>
        <div className="blog-posts">
          {this.state.blog_posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div key = {post.frontmatter.path}>
                  <BlogPostCard
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    tags= {post.frontmatter.tags}
                    link = {post.frontmatter.path}
                    date ={post.frontmatter.date}
                    />
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
            description
            tags
          }
        }
      }
    }
  }
`;
