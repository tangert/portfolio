import React from 'react';
import Helmet from 'react-helmet';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import ForwardIcon from 'react-icons/lib/fa/chevron-right';
import Link from '../components/Link/Link';
import GatsbyLink from 'gatsby-link';

import '../css/posts/post.scss';

export default function PostTemplate({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;

  return (
    <div className="post-container">
      <Helmet title={`Gatsby Blog - ${post.frontmatter.title}`} />

      <button className = "return-button">
        <GatsbyLink  style = {{color: "grey" }}to = {post.frontmatter.path.includes("/work") ? "/work" : "/blog"}>
          {post.frontmatter.path.includes("/work") ? "Back to work" : "Back to blog"}
        </GatsbyLink>
      </button>

      <div className="post">
        <h1 className="title">
          {post.frontmatter.title}
        </h1>
        <h3 className = "description">
          {post.frontmatter.description}
        </h3>
        <h3 className="date">
          {post.frontmatter.date}
        </h3>

        <div className = "tags">
          {post.frontmatter.tags.map(tag => {
            return(
                <Link key = {tag} to={`/tags/${tag}`}>
                  {tag}
                </Link>
            )
          })}
        </div>

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="navigation">
          {prev &&
            <Link className="link prev" to={prev.frontmatter.path}>
              <BackIcon /> {prev.frontmatter.title}
            </Link>}
          {next &&
            <Link className="link next" to={next.frontmatter.path}>
              {next.frontmatter.title} <ForwardIcon />
            </Link>}
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        path
        tags
        title
      }
    }
  }
`;
