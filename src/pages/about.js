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
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <h3 id="dynamic-styles">Dynamic styles</h3>
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
            Aside from all of this, I love to travel, experience different
            cuisines, and paint. Being a Mixed media Artist is very rewarding
            and it keeps me balanced while allowing my creative juices to flow.
          </p>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.signature.childImageSharp.fluid}
              className="signature-image"
            />
          </figure>

          <p>
            Don't forget to check out the{" "}
            <a href="https://docs.ghost.org/integrations/">
              Ghost Integrations Directory
            </a>{" "}
            for more ways to integrate Ghost with your favourite services.
          </p>
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
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    signature: file(relativePath: { eq: "Cyrus_Signature.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
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
