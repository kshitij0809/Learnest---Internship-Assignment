import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button ,ButtonToolbar} from 'react-bootstrap';


import {NavLink} from 'react-router-dom';

import {iitrLogo} from '../logo.svg';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'




 class Udemy extends Component {
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














export default Udemy;