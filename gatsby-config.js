module.exports = {
  siteMetadata: {
    title: `WA 0853-1226-1634 Grosir Laptop Berkualitas`,
    author: `grosir laptop`,
    description: `Grosir laptop harga murah kualitas bagus bergaransi.`,
  },
  plugins: [
    `gatsby-remark-images`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
    resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
       //   `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false 
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages/blog/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
             // maxWidth: 1035,
             // sizeByPixelDensity: true,
            },
          },
        ],
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve("./src/components/blog-post-layout.js"),
          default: require.resolve(`./src/components/layout.js`),
        },
      },
    }
  ],
}