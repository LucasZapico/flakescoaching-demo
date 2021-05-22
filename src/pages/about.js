import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { RiArrowRightUpLine, RiArrowDownLine } from "react-icons/ri"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import YoutubeEmbed from "../components/youtubeEmbed"

const AboutPage = ({ data }) => (
  <div className="aurora-three">
    <div className="char-readable center flex flex-column">
      <Seo title="About" />
      <div className="pa3 pt6 f-headline ">
        <div className="ml6-ns ">
          <div className="mv6">
            <h1 className="h1  ml-7-m text-gradient-three mb0">About</h1>
            <div className="divider gradient-one"></div>
          </div>
          <div className="profile mb5">
            <GatsbyImage image={data.profile.childImageSharp.gatsbyImageData} />
          </div>
          <h4 className="h5 char-readable">
            Hey I'm Flakes and a former Rocket League Pro!
          </h4>
          <h4 className="h5 char-readable">
            Hrant "Flakes" Yakoub (born April 12, 2000) is a Dutch/Armenian
            Rocket League player and streamer.
          </h4>

          <div className=" mv6">
            <div className="mv6">
              <YoutubeEmbed embedId="aY82OeLQeaQ" />
            </div>

            <Link to="/contact" className="btn cta-alt ">
              Schedule a coaching session
              <RiArrowRightUpLine />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const query = graphql`
  query {
    profile: file(relativePath: { eq: "flakes-profile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`

export default AboutPage
