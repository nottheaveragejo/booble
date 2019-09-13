
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};


class MapContainer2 extends Component {
  render() {
    return(
      <section  style={mapStyles}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: '{AIzaSyBxB-fv32qYizhBu4v7IgR04DoOaYTPfPo}',
            libraries: ['places', 'directions']
          }}
          defaultZoom={11} // Supports DP, e.g 11.5
          defaultCenter={{ lat: 1.3521, lng: 103.8198 }}
          yesIWantToUseGoogleMapApiInternals={true}
          //onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
        >
        </GoogleMapReact>
      </section>
    );
  }
}

export default MapContainer2
