import React, { Component } from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import Link from '../components/Link';
import WorkPostCard from '../components/WorkPostCard/WorkPostCard'
import '../css/index.css';

class Work extends Component {
  render () {
    const all_posts = this.props.data.allMarkdownRemark.edges;
    const work_posts = all_posts.filter(post => post.node.frontmatter.path.includes('/work'));
    return (
      <div>
        <div className="blog-posts">
          {work_posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className="blog-post-preview" key={post.id}>

                  <WorkPostCard
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    />

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

export default Work;

export const pageQuery = graphql`
  query WorkQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            description
            type
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
