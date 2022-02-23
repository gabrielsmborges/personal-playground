import '../../scss/index.scss'
import React from "react"
import LogoWhite from "../components/icons/LogoWhite"

// markup
const IndexPage = () => {
  return (
    <div className="index">
      <div className="content">
        <div className="logo-top-wrapper">
          <LogoWhite className="logo"/>
          <div>Gabriel Borges</div>
        </div>
      </div>
      <div className="right-nav">
        <div className="links">
          <a href="#">about me</a>
          <a href="#">about me</a>
          <a href="#">about me</a>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
