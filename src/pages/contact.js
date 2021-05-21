import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ScheduleSession = ({ data }) => (
  <div className="form-wrapper  pa3-ns pv6">
    <form
      className="form pa2 pa4-ns w-90 w-50-m w-40-l pv4"
      action="sign-up_submit"
      method="get"
      accept-charset="utf-8"
    >
      <h3 className=" h4 ph0 mh0 text-gradient-three mb0">
        Schedule a Session
      </h3>
      <div className="divider gradient-one mb4"></div>
      <div className="mt3 flex flex-column">
        <label className="db fw4 lh-copy f6" for="password">
          What is your name?
        </label>
        <input
          className="input-reset input"
          type="name"
          name="name"
          id="name"
          placeholder="*James Bond"
        />
      </div>

      <div className="mt3 flex flex-column ">
        <label className="fw4  " for="email-address">
          What is your email?
        </label>
        <input
          placeholder="*example@email.com"
          className="input-reset input"
          type="email"
          name="email-address"
          id="email-address"
        />
      </div>
      <div className="mt3 flex flex-column">
        <label className="fw4" for="email-address">
          Have anythi
        </label>
        <textarea
          placeholder="*message"
          className=" input-reset textarea"
          type="message"
          name="message"
          id="message"
        />
      </div>

      <div className="mt3">
        <input
          className="input-reset pointer  cta-alt btn"
          type="submit"
          value="Sign Up"
        />
      </div>
    </form>
  </div>
)

const ContactPage = () => <ScheduleSession />

export default ContactPage
