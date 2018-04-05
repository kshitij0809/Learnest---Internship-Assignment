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
  componentDidMount () {
    // axios
    //         .get(API_DOMAIN+'/api/events/?highlighted=true')
    //         .then(response => {
    //           // console.log(response.data)
    //           this.setState({ mappedMainEvents: response.data })
    //           this.Bplanincreasehorizontalline()
    //           this.renderingviewmore()
    //         })
    //         .catch(error => {
    //           console.log(error)
    //         })  


    this.setState({ mappedMainEvents: [{
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"Events are a great way to create awareness, amass knowledge and generate interest in topics while having some fun, all through the competitive spirit. The Summit brings to you a wide ",  
    image:{iitrLogo},
    website_url:'Kshitijpratapme.000webhostapp.com',
    end_point:"END"
    },
    {
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"Events are a great way to create awareness, amass knowledge and generate interest in topics while having some fun, all through the competitive spirit. The Summit brings to you a wide ",  
    image:{iitrLogo},
    website_url:'Kshitijpratapme.000webhostapp.com',
    end_point:"END"
    },
    {
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"Events are a great way to create awareness, amass knowledge and generate interest in topics while having some fun, all through the competitive spirit. The Summit brings to you a wide ",  
    image:{iitrLogo},
    website_url:'Kshitijpratapme.000webhostapp.com',
    end_point:"END"
    },
    {
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"Events are a great way to create awareness, amass knowledge and generate interest in topics while having some fun, all through the competitive spirit. The Summit brings to you a wide ",  
    image:{iitrLogo},
    website_url:'Kshitijpratapme.000webhostapp.com',
    end_point:"END"
    },
    {
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"Events are a great way to create awareness, amass knowledge and generate interest in topics while having some fun, all through the competitive spirit. The Summit brings to you a wide ",  
    image:{iitrLogo},
    website_url:'Kshitijpratapme.000webhostapp.com',
    end_point:"END"
    },
    {
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"Events are a great way to create awareness, amass knowledge and generate interest in topics while having some fun, all through the competitive spirit. The Summit brings to you a wide ",  
    image:{iitrLogo},
    website_url:'Kshitijpratapme.000webhostapp.com',
    end_point:"END"
    }]});
  }
  // renderclick(){
  //   window.href("")
  // }
 
  // Bplanincreasehorizontalline(){
  //  var x = document.getElementsByClassName('main-events-grid container');
  //    x[x.length-1].getElementsByClassName('horizontal-line-last')[0].style.maxWidth = "51vw" ;
  //    x[x.length-1].getElementsByClassName('vl')[0].style.height = "109px";
    
  //  }
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
        {this.state.mappedMainEvents.map((event, key) => (
          <div key={key}>
            
              <MainEventTemp
                name={event.title}
                short={event.tagline}
                long={event.short_description}
                image={event.image}                
                websiteUrl={event.website_url}
                end_point={event.end_point}
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
    var endpoint = this.props.end_point;
    
    return (

       
  
            
            <Col md={4} sm={4} xs={4} className="card">
              <div className='main-event'>
               <div>{this.props.name}</div>
               <div>{this.props.short}</div>
               <div>{this.props.long}</div>
               <div>{this.props.websiteUrl}</div>
              </div>
            </Col>            
         
      
    )

  }
}














class Udemy extends React.Component {
  constructor(props) {
    super(props);
    this.handleOneClick = this.handleOneClick.bind(this);
    this.handleTwoClick = this.handleTwoClick.bind(this);
    this.handleThreeClick = this.handleThreeClick.bind(this);
    this.handleFourClick = this.handleFourClick.bind(this);
    this.state = {isLoggedIn: 'one'};
  }

  handleOneClick() {
    this.setState({isLoggedIn: 'one'});
  }

  handleTwoClick() {
    this.setState({isLoggedIn: 'two'});
  }
   handleThreeClick() {
    this.setState({isLoggedIn: 'three'});
  }
   handleFourClick() {
    this.setState({isLoggedIn: 'four'});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    
        let buttonOne = null;
        let buttonTwo = null;
        let buttonThree = null;
        let buttonFour = null;

       

     {
      buttonOne = <button  className="button button1 " onClick={this.handleOneClick} > one</button>;
    } 
    {
      buttonTwo = <button  className="button button2 " onClick={this.handleTwoClick}> two</button>;
    }
    
     {
      buttonThree= <button  className="button button3 " onClick={this.handleThreeClick} > Three</button>;
    } 
    {
      buttonFour= <button  className="button button4 " onClick={this.handleFourClick}> Four</button>;
    }

    return (
      <div>
        {buttonOne}
        {buttonTwo}
        {buttonThree}
        {buttonFour}
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
  const isLoggedIn = props.isLoggedIn;

  switch(isLoggedIn) {
    case 'one':
        return <UserGreeting />;
        
    case 'two':
        return <Login />;
        
    case 'three':
        return <ButThree />;
        
    case 'four':
        return <ButFour />;
            
   
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