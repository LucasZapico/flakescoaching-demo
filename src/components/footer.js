import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import moment from "moment"

const Footer = ({ title, description, location }) => {
  const { pathname } = useLocation()
  const data = useStaticQuery(query)
  console.log(data)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    baseUrl,
    defaultImage,
    phone,
    twitterUsername,
    facebookUsername,
    linkedInUsername,
    redditUsername,
  } = data.site.siteMetadata

  const metaData = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <div className="bg-one pa3 pt6">
      <div className="mv4">
        <h4>Social</h4>
        <div className="flex flex-row">
          {twitterUsername !== "" ? (
            <a href={`https://www.twitter.com/${twitterUsername}`}>Twitter</a>
          ) : (
            <div />
          )}
          {facebookUsername !== "" ? (
            <a href={`https://www.facebook.com/${facebookUsername}`}>
              Facebook
            </a>
          ) : (
            <div />
          )}
          {linkedInUsername !== "" ? (
            <a href={`https://www.linkedin.com/${linkedInUsername}`}>
              LinkedIn
            </a>
          ) : (
            <div />
          )}
          {redditUsername !== "" ? (
            <a href={`https://www.reddit.com/user/${redditUsername}`}>
              LinkedIn
            </a>
          ) : (
            <div />
          )}
        </div>
      </div>
      <div className="flex flex-column item-start">
        <div>
          <p className="ma0">Last updated: {moment(Date()).format("l")}</p>
        </div>
        <div>
          <p className="ma0">
            Copyright {baseUrl} {moment(Date()).format("y")}
          </p>
        </div>
        <div className="mt2">
          <Link to="/privacy" swipe direction="left">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Footer.defaultProps = {
  title: null,
  description: null,
}

const query = graphql`
  query {
    file(relativePath: { eq: "flakey-logo-rbg.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    site {
      siteMetadata {
        title
        titleTemplate
        defaultDescription: description
        siteUrl
        baseUrl
        defaultImage: image
        twitterUsername
        facebookUsername
        linkedInUsername
        redditUsername
        phone
      }
    }
  }
`

export default Footer
