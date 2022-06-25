import React, { Component } from 'react';
import { Navbar, Nav, Form, Container, Button, NavbarBrand } from 'react-bootstrap';
import '../../static/css/_navigation.css';
import {Cart} from 'react-bootstrap-icons';
import {LinkContainer} from 'react-router-bootstrap'

export default class Navigation extends Component {
  render() {
    return (
        <>
          <Navbar Col md={12}>
                <NavbarBrand>
                    <img className='navbar-image' src="../assets/medsafe-transparent.png" alt="" />
                </NavbarBrand>
                <Form.Group>
                    <Form.Control className='search-input' placeholder='Search for a product'></Form.Control>
                </Form.Group>
                <Button className='search-item-btn' type="submit">Search Item</Button>
                <Nav.Link className='log-in-txt'>
                  Log In
                </Nav.Link>
                <Button size='md' className='sign-up-btn'>Sign Up</Button>
                <Nav.Link className='my-shopping-cart'>  
                  <Container fluid className='shopping-cart-ctn'>
                    <Button className='cart-button p-2'>
                        <Cart size={48} className='cart-btn-icon p-2'/>
                    </Button>
                  </Container>
                </Nav.Link>
          </Navbar>
          <Nav className='navbar-two'>
                  <LinkContainer to="/" activeClassName='active'>
                    <Nav.Link className='second-nav'>HOME</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/vitamins" activeClassName='active'>
                    <Nav.Link className='second-nav'>VITAMINS</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/medicalequipments" activeClassName='active'>
                    <Nav.Link className='second-nav'>MEDICAL EQUIPMENTS</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/personalcare" activeClassName='active'>
                    <Nav.Link className='second-nav'>PERSONAL CARE</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/momandinfants" activeClassName='active'>
                    <Nav.Link className='second-nav'>MOM AND INFANT</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/covid19essential" activeClassName='active'>
                    <Nav.Link className='second-nav'>COVID-19 ESSENTIALS</Nav.Link>
                  </LinkContainer>
            </Nav>
        </>
    )
  }
}
