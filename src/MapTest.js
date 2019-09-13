 import React, {Component} from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%'
};

//api key: AIzaSyBxB-fv32qYizhBu4v7IgR04DoOaYTPfPo
class MapContainer extends Component {
  constructor(props){
    super(props)
      this.state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
        stores :[]
      };

  }
  populateLatAndLng = () => {
    const latandlng =  this.props.bobaShops.map(el => (
      el.geometry.location
  ))
    this.setState({
    stores: latandlng
    })
  }
  displayMarkers = ()=> {
    return this.state.stores.map((store, index) => {
      return <Marker onClick={this.onMarkerClick} key={index} id={index} position={{
       lat: store.lat,
       lng: store.lng
     }}
      name ={this.props.bobaShops[index].name}
      onClick={this.onMarkerClick} />

    })
  }
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};
componentDidMount(){
  {this.populateLatAndLng()}

}
  render() {

    return (

      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        //default is ny
        initialCenter={{
         lat: 40.728,
         lng: -73.986
        }}>
        {this.displayMarkers()}
        {this.populateLatAndLng}
         <Marker
          onClick={this.onMarkerClick}
          name={'East Village'}

        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: 'AIzaSyBxB-fv32qYizhBu4v7IgR04DoOaYTPfPo'
})(MapContainer);
