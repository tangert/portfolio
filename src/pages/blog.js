import React, { Component } from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import Link from '../components/Link/Link';
import PostCard from '../components/PostCard/PostCard'
import '../css/pages/blog-work-page.scss';

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
        <div className="posts">
          {this.state.blog_posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div key = {post.frontmatter.path}>
                  <PostCard
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    tags= {post.frontmatter.tags}
                    link = {post.frontmatter.path}
                    date ={post.frontmatter.date}
                    type={post.frontmatter.type}
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
            description
            type
            tags
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
