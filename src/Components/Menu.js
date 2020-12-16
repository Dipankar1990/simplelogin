import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {isUserloggedin} from '../Helpers';
const Menu = () => {
    return (
    <>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><Link to="/">React-Bootstrap</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#home"><Link to="/profile">Profile</Link></Nav.Link>
      {isUserloggedin()?
        <Nav.Link href="#home"><Link to="/logout">Logout</Link></Nav.Link>
        :
        <Nav.Link href="#home"><Link to="/login">Login</Link></Nav.Link>
      }
     
      
     
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        

    </> 
     );
}
 
export default Menu;