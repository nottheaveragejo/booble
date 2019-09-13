import React from 'react'

const SingleBoba = (props) => {
  //how to get the coordinates you will need this for a marker
  //console.log(props.bobaShops.geometry.location)
  const boba = props.bobaShops
  console.log(boba.photos[0].html_attributions[0].props.href)
  return(
    <div>
      <h3>{boba.name}</h3>
      <img src ='{boba.photos[0].photo_reference}'></img>
      <ul>
        <li>{boba.formatted_address}</li>
        <li> price level {boba.price_level}</li>
        <li>rating {boba.rating}</li>
        <li>open now {
          (boba.opening_hours.open_now == true) ? (
            <span> Yes</span>) : (
              <span> No</span>
            )
        }</li>
      </ul>
    </div>
  )
}

export default SingleBoba
