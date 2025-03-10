import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const { prev, next, slug } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff', paddingBottom: '30px' }}>
          <Helmet title={`${post.title}`}>
            <meta name="description" content={post.description.description} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.description.description} />
            <meta property="og:image" content={`https:${decodeURIComponent(post.heroImage.fluid.src)}`} />
            <meta property="og:url" content={`https://blog.bojiangsoftware.com/${slug}`} />
          </Helmet>
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.createdAt}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
          <div className="paginate">
            {prev ? (
              <Link to={`/blog/${prev.slug}`}>&larr;{prev.title}</Link>
            ) : (
              <span></span>
            )}
            {next ? (
              <Link to={`/blog/${next.slug}`}>{next.title}&rarr;</Link>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      description {
        description
      }
    }
  }
`
