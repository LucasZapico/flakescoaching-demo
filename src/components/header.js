import React, { useState } from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { RiCloseFill } from "react-icons/ri"
import { BiMenuAltRight } from "react-icons/bi"
import { useWindowSize } from "../hooks"

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
            <Link className="link " to={r.to}>
              {r.name}
            </Link>
          </h6>
        ))}
      </div>
    </nav>
  )
}

const MobileNav = ({ data }) => {
  const [show, setShow] = useState(false)
  return (
    <nav className="flex w-100 justify-between items-center pa2 fixed top-0 bg-one header ">
      <Link to="/" className="w4 ">
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </Link>
      <div
        className="nav-menu text-gradient-three"
        onClick={() => setShow(!show)}
      >
        <BiMenuAltRight />
      </div>
      <div className={show ? "show mobile-nav" : "mobile-nav"}>
        <div className="mobile-nav-close" onClick={() => setShow(!show)}>
          <RiCloseFill />
        </div>

        <div className="flex flex-start flex-column ">
          {ROUTES.map((r, i) => (
            <h6>
              <Link onClick={() => setShow(false)} className="link" to={r.to}>
                {r.name}
              </Link>
            </h6>
          ))}
        </div>
      </div>
    </nav>
  )
}

const Header = ({ siteTitle }) => {
  const size = useWindowSize()

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "flakey-logo-rbg.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)
  console.log(size)

  return (
    <header>
      {size.width < 750 ? <MobileNav data={data} /> : <Nav data={data} />}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
