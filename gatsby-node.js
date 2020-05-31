const Promise = require('bluebird')
const path = require('path')
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                  publishDate(formatString: "MMMM Do, YYYY")
                  tags
                  heroImage {
                    fluid(
                      maxWidth: 350
                      maxHeight: 196
                      resizingBehavior: SCALE
                    ) {
                      ...GatsbyContentfulFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges

        // Create blog-list pages
        createPaginatedPages({
          edges: posts,
          createPage: createPage,
          pageTemplate: 'src/templates/blog-list-post.js',
          pageLength: 2,
          pathPrefix: '/list',
          buildPath: (index, pathPrefix) =>
            index > 1 ? `${pathPrefix}/${index}` : `${pathPrefix}`, // This is optional and this is the default
        })

        // create slug
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
