import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { RiArrowRightUpLine, RiArrowDownLine } from "react-icons/ri"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

const MethodSection = ({ data }) => (
  <div className="method bg-one pa3 pt6 items-center flex-wrap   bw1">
    <h3 className="ml6-ns">How it works</h3>
    <div className="mh2-ns flex-auto flex flex-wrap  flex-row-ns flex-column justify-around w-100">
      <div className="w-third-ns mt4 ma4-m  card-one gradient-one pa4 relative">
        <div className="text-gradient-one display">1.</div>
        <h4>Pick Your Focus</h4>
        <div className="divider gradient-one"></div>
        <div className="absolute top-1 o-40">
          <GatsbyImage image={data.rocketCar.childImageSharp.gatsbyImageData} />
        </div>
        <p className="char-readable mt5">
          Imagine a combination of IIS and J2EE. In order to assess the 3rd
          generation blockchain’s ability to whiteboard without lessening our
          power to benchmark. Do you have a infinitely reconfigurable scheme for
        </p>
      </div>
      <div className="w-third-ns mt6 ma4-m  card-one gradient-two pa4 relative">
        <div className="text-gradient-one display">2.</div>
        <h4>Defined Goals</h4>
        <div className="divider gradient-one"></div>
        <div className="absolute top-1 o-40">
          <GatsbyImage image={data.rocketCar.childImageSharp.gatsbyImageData} />
        </div>
        <p className="char-readable mt5">
          Imagine a combination of IIS and J2EE. In order to assess the 3rd
          generation blockchain’s ability to whiteboard without lessening our
          power to benchmark. Do you have a infinitely reconfigurable scheme for
        </p>
      </div>
      <div className="w-third-ns mt6 ma4-m  card-one gradient-one pa4 relative">
        <div className="text-gradient-one display">3.</div>
        <h4>Play and Review</h4>
        <div className="divider gradient-one"></div>
        <div className="absolute top-1 o-40">
          <GatsbyImage image={data.rocketCar.childImageSharp.gatsbyImageData} />
        </div>
        <p className="char-readable mt5">
          Imagine a combination of IIS and J2EE. In order to assess the 3rd
          generation blockchain’s ability to whiteboard without lessening our
          power to benchmark. Do you have a infinitely reconfigurable scheme for
        </p>
      </div>
      <div className="w-third-ns mt6 ma4-m  card-one gradient-two pa4 relative">
        <div className="text-gradient-one display">4.</div>
        <h4>Win More Games</h4>
        <div className="divider gradient-one"></div>
        <div className="absolute top-1 o-40">
          <GatsbyImage image={data.rocketCar.childImageSharp.gatsbyImageData} />
        </div>
        <p className="char-readable mt5">
          Imagine a combination of IIS and J2EE. In order to assess the 3rd
          generation blockchain’s ability to whiteboard without lessening our
          power to benchmark. Do you have a infinitely reconfigurable scheme for
        </p>
      </div>
    </div>
  </div>
)

const IndexPage = ({ data }) => (
  <>
    <Seo title="Home" />
    <div className="pa3 pt6 f-headline ">
      <div className="hero"></div>
      <div className="ml6-ns mt5">
        <Link to="/contact" className="btn cta">
          Schedule a session
          <RiArrowRightUpLine />
        </Link>
        <h1 className="h3 fw4 ml-7-m">
          one-on-one tailored Rocket League Lessons
        </h1>
        <h2 className="h1 text-gradient-two">
          Let's take your game to the next level
        </h2>

        <div className="uppercase">
          <h5 className="scroll-down">
            <RiArrowDownLine />
          </h5>
        </div>
      </div>
    </div>
    <MethodSection data={data} />
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

export default IndexPage
