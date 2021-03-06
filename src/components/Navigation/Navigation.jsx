import React, { Component } from 'react';
import { Navbar, Nav, Form, Container, Button, NavbarBrand } from 'react-bootstrap';
import '../../static/css/_navigation.css';
import {Cart} from 'react-bootstrap-icons';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'

 const Navigation = ({setShow}) =>{

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
                <IndexLinkContainer to='/login'>
                  <Nav.Link className='log-in-txt' >
                    Log In
                  </Nav.Link>
                </IndexLinkContainer>
                <Button onClick={() => this.nextPath('/register')} size='md' className='sign-up-btn'>Sign Up</Button>
                <Nav.Link className='my-shopping-cart'>  
                  <Container fluid className='shopping-cart-ctn'>
                    <Button className='cart-button p-2' onClick={() => setShow(false)}>
                    <span>
                      <Cart size={20}/> 
                       Shopping Cart
                    </span>
                    </Button>
                  </Container>
                </Nav.Link>
          </Navbar>
          <Nav className='navbar-two'>
                  <LinkContainer to="/" activeClassName='active'>
                    <Nav.Link className='second-nav' onClick={() => setShow(true)}>HOME</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/vitamins" activeClassName='active'>
                    <Nav.Link className='second-nav' onClick={() => setShow(true)}>VITAMINS</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/medicalequipments" activeClassName='active'>
                    <Nav.Link className='second-nav' onClick={() => setShow(true)}>MEDICAL EQUIPMENTS</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/personalcare" activeClassName='active'>
                    <Nav.Link className='second-nav' onClick={() => setShow(true)}>PERSONAL CARE</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/momandinfants" activeClassName='active'>
                    <Nav.Link className='second-nav' onClick={() => setShow(true)}>MOM AND INFANT</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/covid19essential" activeClassName='active'>
                    <Nav.Link className='second-nav' onClick={() => setShow(true)}>COVID-19 ESSENTIALS</Nav.Link>
                  </LinkContainer>
            </Nav>
        </>
    )
  
}

export default Navigation;