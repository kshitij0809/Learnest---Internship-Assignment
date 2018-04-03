import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button ,ButtonToolbar} from 'react-bootstrap';


import {NavLink} from 'react-router-dom';

import {iitrLogo} from '../logo.svg';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'

import './Home.css';

import ButThree from './Three.js';
import ButFour from './Four.js';


 class Login extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      mappedMainEvents: []
    }
    // this.Bplanincreasehorizontalline = this.Bplanincreasehorizontalline.bind(this);
    // this.renderclick = this.renderclick.bind(this);
  }
 
  render () {
    return (
      <div>
        <Grid>
        <Row>
          <Col md={12} sm={12} lg={12}  className='heading-landing'>
                        highlighted events
              
        </Col>
        </Row>
        </Grid>
         <Grid className='main-events-grid fluid-event-landing'>
             <Row className='main-event-row container'>
       
        </Row>
            </Grid>
      </div>
    )
  }
}

class MainEventTemp extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var compname = this.props.name;
    var endpoint = this.props.end_point;
    
    return (

       
  
           
      
    )

  }
}














class Udemy extends React.Component {
  constructor(props) {
    super(props);
   
  }


  render() {
   

    return (
      <div>
      
        <Greeting isLoggedIn={isLoggedIn} />
        
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  

  
            
   
}

 }


export default Udemy;



// class Udemy extends Component {
//   render() {
//     return (
//       <div className="container-fluid">
//         <div className="row">
//      <div className="col s4 m4 l4">
//          <div className="card">
          
//          <div className="container">
//          <h4><b>John Doe</b></h4> 
//          <p>Architect & Engineer</p> 
//          </div>
//          </div>
          
//      </div>

//      <div className="col s4 m4 l4">
//          <div className="card">
          
//          <div className="container">
//          <h4><b>John Doe</b></h4> 
//          <p>Architect & Engineer</p> 
//          </div>
//          </div>
//      </div>
//      <div className="col s4 m4 l4">
//          <div className="card">
          
//          <div className="container">
//          <h4><b>John Doe</b></h4> 
//          <p>Architect & Engineer</p> 
//          </div>
//          </div>
//      </div>

//         </div>
          
//          <div className="row">
//      <div className="col s4 m4 l4">
//          <div className="card">
          
//          <div className="container">
//          <h4><b>John Doe</b></h4> 
//          <p>Architect & Engineer</p> 
//          </div>
//          </div>
//      </div>

//      <div className="col s4 m4 l4">
//          <div className="card">
          
//          <div className="container">
//          <h4><b>John Doe</b></h4> 
//          <p>Architect & Engineer</p> 
//          </div>
//          </div>
//      </div>
//      <div className="col s4 m4 l4">
//          <div className="card">
          
//          <div className="container">
//          <h4><b>John Doe</b></h4> 
//          <p>Architect & Engineer</p> 
//          </div>
//          </div>
//      </div>
//         </div> 
//     </div>
      
//     );
//   }
// }
// export default Udemy;