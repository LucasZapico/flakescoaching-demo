import React, { useState } from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { RiCloseFill } from "react-icons/ri"

const ROUTES = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Contact",
    to: "/contact",
  },
]

const Nav = ({ data }) => {
  return (
    <nav className="flex w-100 justify-between pa2 fixed top-0 bg-one header">
      <Link to="/" className="w4 ">
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </Link>
      <div className="flex justify-between">
        {ROUTES.map((r, i) => (
          <h6>
            <Link className="link" to={r.to}>
              {r.name}
            </Link>
          </h6>
        ))}
      </div>
    </nav>
  )
}

const MobileNav = ({ data }) => {
  return (
    <nav className="flex w-100 flex-start pa2 fixed top-0 bg-one header mobile-nav">
      <div className="mobile-nav-close">
        <RiCloseFill />
      </div>
      <Link to="/" className="w4 ">
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </Link>
      <div className="flex flex-start flex-column ">
        {ROUTES.map((r, i) => (
          <h6>
            <Link className="link" to={r.to}>
              {r.name}
            </Link>
          </h6>
        ))}
      </div>
    </nav>
  )
}

const Header = ({ siteTitle }) => {
  const [show, setShow] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "flakey-logo-rbg.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)
  return (
    <header>{show ? <MobileNav data={data} /> : <Nav data={data} />}</header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
