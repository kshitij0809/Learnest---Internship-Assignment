import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button ,ButtonToolbar} from 'react-bootstrap';


import {NavLink} from 'react-router-dom';

import {iitrLogo}from '../logo.svg';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'




 class ButFour extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      mappedMainEvents: []
    }
    
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
       
      </div>
    )
  }
}




export default ButFour;


