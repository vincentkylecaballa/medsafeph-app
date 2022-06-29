import React from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import {ReactComponent as MedicalCare} from '../images/undraw_medical_care_movn.svg'
import '../static/css/_login.css'
import {AiOutlineGoogle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const Login = () => {
    return (
        <Row>
            <Col md={6} className='login-container'>
                <Container>
                    <img className='brand-logo mt-2 ml-3' src="../assets/medsafe-transparent.png" alt="" />
                </Container>
                <Container>
                    <MedicalCare className='p-5'/>
                </Container>
            </Col>
            <Col md={6}>
                <Container className='p-5'>
                    <h5 className='login-text text-left ml-5 mt-4'>Log In</h5>
                    <Form>
                        <Form.Group className='mt-5 mb-2 ml-5 mr-5'>
                            <start>
                                <Form.Label className='text-label mb-3'>Email address</Form.Label>
                            </start>
                            <Form.Control className='form-input w-100' type="email" placeholder="Enter your Email Address"
                            />
                        </Form.Group>
                        <Form.Group className='mt-5 mb-2 ml-5 mr-5'>
                            <Form.Label className='text-label mb-3'>Password</Form.Label>
                            <Form.Control className='form-input w-100' type="password" placeholder="Enter your password"
                            />
                        </Form.Group>
                    </Form>
                        <Col md={12} className='mt-2 mb-3'>
                            <Row noGutters>  
                                <Col md={6}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />  
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <a href='/register' style={{color: "black"}}>No Account?</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} className='pl-5 pr-5'>
                            <Button className='w-100' variant="primary" type="submit">
                                Log In
                            </Button>
                        </Col>
                        <Col md={12} className='mt-5 mb-2'>
                            <Row noGutters>
                                <Col md={5}>
                                    <hr />
                                </Col>
                                <Col md={2}>
                                    <h6>OR</h6>
                                </Col>
                                <Col md={5}>
                                    <hr />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12}>
                            <Row noGutters> 
                                <Col md={6}>    
                                    <Button variant="outline-primary" type="submit">   
                                        <AiOutlineGoogle size={30} className='icons'/>
                                    </Button>
                                </Col>  
                                <Col md={6}>
                                    <Button variant="outline-primary" type="submit">
                                        <BsFacebook size={30} className='icons'/>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                </Container>
            </Col>
        </Row>
    )
}

export default Login;