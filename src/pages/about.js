import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            About
          </h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <p>
            I am a Georgia born Graphic User Interface (UI) Designer with an eye
            for detail. My previous studies at the Savannah College of Art &
            Design in Atlanta, Ga. has led me to an exciting career as a Graphic
            User Interface (UI) Designer. I possess a knowledge for user
            experience and design that can be used to create a more just and
            inclusive world.
          </p>

          <p>
            Over the years, I have been privileged to collaborate with
            colleagues that share my vision of creative design displaying vital
            information for the overall user experience. I am a dynamic
            professional with a passion for art and design that has developed
            award-winning content for high education, corporations, and
            tradeshows.
          </p>

          <p>
            Aside from all of this, I love to travel, to experience different
            cuisines, and to paint. Being a Mixed media Artist is very rewarding
            and it keeps me balanced while allowing my creative juices to flow.
          </p>

          <figure className="kg-card kg-image-card signature">
            <Img
              fluid={data.signature.childImageSharp.fluid}
              className="signature-image"
            />
          </figure>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "cyrus-profile-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    signature: file(relativePath: { eq: "Cyrus_Signature.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
