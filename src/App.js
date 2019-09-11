import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
// import Atlanta from './Atlanta';
import MayorMessage from './MayorMessage';
import Images from './Images';
import Atlanta from './Atlanta';


var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <Route path='/' component={BootstrapNavBar}/>
        <div className="container main">
        <Route path='/About' component={About}/>
        <Route path='/' exact component={Home}/>
        {/* <Route path='/Atlanta' component={Atlanta}/> */}
        <Route path='/Mayor' component={MayorMessage}/>
        <Route path='/images' component={Images}/>
        <Route pathe='Atlanta' component={Atlanta}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
