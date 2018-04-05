import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button ,ButtonToolbar} from 'react-bootstrap';


import {NavLink} from 'react-router-dom';

import {iitrLogo}from '../logo.svg';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'
import './Three.css';




 class ButThree extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      mappedMainEvents: []
    }
    
  }
  componentDidMount () {
   


    this.setState({ mappedMainEvents: [{
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"Events are a great way to create awareness, amass knowledge and generate interest in topics while having some fun, all through the competitive spirit. The Summit brings to you a wide ",  
    },
    {
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"Events are a great way to create awareness, amass knowledge and generate interest in topics while having some fun, all through the competitive spirit. The Summit brings to you a wide ",  
    },
    {
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"Events are a great way to create awareness, amass knowledge and generate interest in topics while having some fun, all through the competitive spirit. The Summit brings to you a wide ",  
    },
    ]});
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
        <Grid>
          <Row>
        {this.state.mappedMainEvents.map((event, key) => (
          <div key={key}>
            
              <MainEventTemp
                name={event.title}
                short={event.tagline}
                long={event.short_description}
                
                            />
          </div>
                ))}
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
    
    return (

        
  
           <Col md={4} sm={4} xs={4} className="card">
              <div className='main-event'>
               <div>{this.props.name}</div>
               <div>{this.props.short}</div>
               <div>{this.props.long}</div>
              </div>
            </Col>      
        
      
    )

  }
}

export default ButThree;


