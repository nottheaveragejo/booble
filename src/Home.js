import React from 'react';
import "./Home.css"
import BobaForm from "./BobaForm.js"
import AllBobaShops from "./AllBobaShops.js"

const Home = () => {
  return(
    <div className="home">
      <h1>Booble Maps</h1>
      <h3>Find your balls</h3>
      <BobaForm></BobaForm>
    </div>
  )
}

export default Home
