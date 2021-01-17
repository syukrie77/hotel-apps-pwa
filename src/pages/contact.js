import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      gambar: file(relativePath: {eq: "pingi.jpg"}) {
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
      <div>
        <h1>Contact.</h1>
        <p><Img fluid={data.gambar.childImageSharp.fluid} /></p>
        <h2>Saya dapat dihubungi di Mobile HP dan WA: 085312261634</h2>
      </div>
    </Layout>
  )
}

export default ContactPage