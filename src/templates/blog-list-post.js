import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from '../pages/blog.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class BlogList extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const {
      group: posts,
      index,
      first,
      last,
      pageCount,
    } = this.props.pageContext
    console.log(this.props.pageContext)

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          {/* <Helmet title={siteTitle} /> */}
          <div className={styles.hero}>Blog</div>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogList
