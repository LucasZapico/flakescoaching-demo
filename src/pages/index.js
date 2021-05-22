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
          Tell me where you'd like to improve most and we can work towards that.
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
          We'll define your game play goals and I'll create custom training
          packs to assist you with your weaknesses and turn them into strengths.
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
          Once we finish a game, I will analyse the replay and point out
          anything I see as a major problem affecting your game, these includes
          Rotations, Mechanics or Game Awareness.
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
          As someone who's played at the highest level of the game, I'm aware on
          what it took to get me there and can do the same for you.
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
    <div></div>
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
