import React from 'react';
import Helmet from 'react-helmet';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import ForwardIcon from 'react-icons/lib/fa/chevron-right';
import Link from '../components/Link';

import '../css/posts/blog-post.scss';

export default function BlogPostTemplate({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;
  return (
    <div className="blog-post-container">
      <Helmet title={`Gatsby Blog - ${post.frontmatter.title}`} />
      <div className="blog-post">
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
          className="blog-post-content"
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
  query BlogPostByPath($path: String!) {
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
