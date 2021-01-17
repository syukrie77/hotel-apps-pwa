import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      gambar: file(relativePath: {eq: "syukrie-family.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Layout>
        <h1>About.</h1>
        <p><Img fluid={data.gambar.childImageSharp.fluid} /></p>
        <h2>Blog Muhammad Syukri</h2>
    </Layout>
  )
}

export default AboutPage