import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
//import Usage from "../../src/pages/mdx-intro/index.mdx"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      gambar: file(relativePath: {eq: "grosir-laptop-thinkpad.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
      <Layout>
      <h1>Blog Grosir Laptop</h1>
      <h2>
        Tempat berbagi informasi produk laptop harga grosir berkualitas, juga artikel tentang tip dan trik seputar dunia perlaptopan.
      </h2>
      <p>
        <Img fluid={data.gambar.childImageSharp.fluid} />
      </p>
      <p>
        Jika Anda berminat belajar Gatsby Js
        Silahkan <Link to="/contact">Hubungi Saya.</Link>
      </p>
      </Layout>
  )
}

export default IndexPage