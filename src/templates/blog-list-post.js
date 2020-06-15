import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog-list.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class BlogList extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { numPages, currentPage } = this.props.pageContext
    console.log(this.props)
    const { edges: posts } = this.props.data.allContentfulBlogPost

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={'博江软件传媒'} />
          {/* <div className={styles.hero}>Blog</div> */}
          <div className="wrapper">
            <h2 className="section-headline">Our Blogs</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
            <div className="paginate">
              {currentPage > 1 ? (
                <a
                  href={`/blog/${currentPage - 1 === 1 ? '' : currentPage - 1}`}
                >
                  prev page
                </a>
              ) : (
                <span></span>
              )}
              {currentPage < numPages ? (
                <a href={`/blog/${currentPage + 1}`}>next page</a>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogList

export const pageQuery = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(
      sort: { fields: [createdAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          slug
          createdAt(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
