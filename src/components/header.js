import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-fashionteller.png')} height="30"/></Link>
      <Link to="/discover">Discover</Link>
      <Link to="/show">Show</Link>
      <Link to="/search">Search</Link>
      <Link to="/discover"><button>Account</button></Link>

    </div>
  </div>
)

export default Header
