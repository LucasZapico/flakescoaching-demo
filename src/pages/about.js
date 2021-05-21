import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { RiArrowRightUpLine, RiArrowDownLine } from "react-icons/ri"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutPage = ({ data }) => (
  <>
    <Seo title="About" />
    <div className="pa3 pt6 f-headline aurora-three">
      <div className="ml6-ns ">
        <div className="mv6">
          <h1 className="h1  ml-7-m text-gradient-three mb0">About</h1>
          <div className="divider gradient-one"></div>
        </div>
        <h4 className="h5 char-readable">
          To promote the Progress of Science and useful Arts, by securing for
        </h4>
        <h4 className="h5 char-readable">
          To promote the Progress of Science and useful Arts, by securing for
          limited Times to Authors and Inventors the exclusive Right to their
          respective Houses, and in going to and returning from the same. And if
          there be more than one who have such Majority,
        </h4>
        <div className=" mv5">
          <Link to="/contact" className="btn cta-alt ">
            Schedule a session
            <RiArrowRightUpLine />
          </Link>
        </div>
      </div>
    </div>
  </>
)

export const query = graphql`
  query {
    rocketCar: file(
      relativePath: { eq: "rocket-leage-into-1-removebg-preview 1.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`

export default AboutPage
