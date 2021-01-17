import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
//import Img from "gatsby-image"

import Layout from "../components/layout"
import blogStyles from './blog.module.scss'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "DD MMMM YYYY")
            }
            slug
          }
        }
      }
    }
  `)
  return (
    <Layout>
    <div>
      <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allMdx.edges.map((edge) => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/${edge.node.slug}`}>  
                  <h3>{edge.node.frontmatter.title}</h3>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
    </div>
    </Layout>
  )
}

export default Blog