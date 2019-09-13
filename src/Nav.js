import React from "react"
import BobaForm from "./BobaForm"
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
  return(
    <div className="Nav">
      <Link to="/"
      className="Home">Home</Link>
      <BobaForm></BobaForm>
      <Link to= "/map"> About</Link>
      <Link to="/allShops">Contact</Link>

    </div>
  )
}
export default Nav
