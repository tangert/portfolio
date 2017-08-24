import React, { Component } from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import Link from '../components/Link';
import WorkPostCard from '../components/WorkPostCard/WorkPostCard'
import '../css/pages/work-page.scss';

class Work extends Component {
  constructor(props){
    super(props);
    const all_posts = this.props.data.allMarkdownRemark.edges;
    const work_posts = all_posts.filter(post => post.node.frontmatter.path.includes('/work'));

    this.state = {
      visible_posts: work_posts,
      work_posts: work_posts,
      filters: []
    };

    this.filterByTag = this.filterByTag.bind(this);
  }

  filterByTag(tag){
    this.setState({
      visible_posts: this.state.work_posts.filter((edge) => edge.node.frontmatter.type === tag),
    })
    console.log(this.state);
  }

  render () {

    let all_types = [];

    // for(var i = 0; i < this.state.visible_posts.length; i++){
    //   let type = this.state.visible_posts[i].node.frontmatter.type;
    //   if(!all_types.includes(type)){
    //     all_types.push(type);
    //   }
    // }

    console.log("ALL_TYPES: ", all_types);

    return (
      <div>
        <div className = "tag-filters">
          {all_types.map(type => {
            return(
                <button onClick = {()=>this.filterByTag(tag)}>{type}</button>
            )
          })}
        </div>
        <div className="work-posts">
          {this.state.visible_posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div>
                  <WorkPostCard
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    tags= {post.frontmatter.tags}
                    date = {post.frontmatter.date}
                    type = {post.frontmatter.type}
                    link = {post.frontmatter.path}
                    />
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
            tags
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
