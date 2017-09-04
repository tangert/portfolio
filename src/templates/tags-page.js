import React from 'react';
import GatsbyLink from 'gatsby-link';
import HomeIcon from 'react-icons/lib/fa/home';
import TagsIcon from 'react-icons/lib/fa/tags';

import Link from '../components/Link/Link';
import '../css/pages/tags-page.scss';

export default function TagsPage({ pathContext }) {
  const { posts, post, tag } = pathContext;
  if (tag) {
    return (
      <div className = "tags-container">
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
        </h1>
        <div className = "tags-list">
          {post.map(({ id, frontmatter, excerpt }) => {
            return (
                <Link to={frontmatter.path}>
                  {frontmatter.title}
                </Link>
            );
          })}
        </div>
        <Link to="/tags">
          <TagsIcon /> All tags
        </Link>
      </div>
    );
  }
  return (
    <div className = "tags-container">
      <h1>All tags</h1>
      <div className="tags-list">
        {Object.keys(posts).map(tagName => {
          const tags = posts[tagName];
          return (
            <div key={tagName}>
              <Link to={`/tags/${tagName}`}>
                {tagName}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
