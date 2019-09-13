import React, {Component} from 'react';
import {BrowserRouter as Router,
  Link,
  Route,
  Switch} from 'react-router-dom'
import axios from 'axios'
import './App.css';
import AllBobaShops from "./AllBobaShops"
import Home from "./Home"
import Nav from "./Nav"
import MapContainer from './MapTest';



class App extends Component {
  constructor(){
    super()
    this.state = {
      bobaShops : []
    }
  }
  async componentDidMount(){
    try {
      // const script = document.createElement("script");
      // script.src = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=bubble+tea+in+New+York&key=AIzaSyBxB-fv32qYizhBu4v7IgR04DoOaYTPfPo";
      // script.async = true;
      // document.body.appendChild(script);
      // console.log(script)
      const {data} = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=bubble+tea+in+New+York&key=AIzaSyBxB-fv32qYizhBu4v7IgR04DoOaYTPfPo')
      console.log(data)
      // this.setState({
      //   bobaShops: data
      // })
    } catch (error) {
      console.error(error)
    }
  }
  render(){
    return (
      <Router>
        <div className="App">
            <Nav></Nav>
            {/* <MapTest></MapTest> */}
            <Switch>
              <Route exact path = "/" component= {Home}></Route>
              <Route exact path ="/allShops" component={AllBobaShops}></Route>
              <Route exact path="/map" component={MapContainer}></Route>
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;



