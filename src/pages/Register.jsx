import React from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import {ReactComponent as MedicalCare} from '../images/undraw_medical_care_movn.svg'
import Axios from 'axios';
import '../static/css/_login.css'

const Register = () => {

    const [fullName, setFullNameRegister] = React.useState('');
    const [userNameRegister, setUserNameRegister] = React.useState('');
    const [passwordRegister, setPasswordRegister] = React.useState('');

    const registerUser = () => {
        Axios.post('http://localhost:3000/register', {
            fullName: fullName,
            userName: userNameRegister,
            password: passwordRegister
        }).then(res => {
            console.log(res);
        });
    }
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
                    <h5 className='login-text text-left ml-5 mt-5'>Register</h5>
                    <Form>
                        <Form.Group className='mt-4 mb-2 ml-5 mr-5'>
                            <start>
                                <Form.Label className='text-label mb-3'>Full Name</Form.Label>
                            </start>
                            <Form.Control className='form-input w-100' type="text" placeholder="Enter your Full Name" 
                                onChange={(e) => {setFullNameRegister(e.target.value);}}
                            />
                        </Form.Group>
                        <Form.Group className='mt-4 mb-2 ml-5 mr-5'>
                            <start>
                                <Form.Label className='text-label mb-3'>Email address</Form.Label>
                            </start>
                            <Form.Control className='form-input w-100' type="email" placeholder="Enter your Email Address" 
                                onChange={(e) => {setUserNameRegister(e.target.value);}}
                            />
                        </Form.Group>
                        <Form.Group className='mt-4 mb-2 ml-5 mr-5'>
                            <Form.Label className='text-label mb-3'>Password</Form.Label>
                            <Form.Control className='form-input w-100' type="password" placeholder="Enter your password" 
                                onChange={(e) => {setPasswordRegister(e.target.value);}}
                            />
                        </Form.Group>
                    </Form>
                        <Col md={12} className='mt-4 mb-2'>
                            <Row noGutters> 
                                <Col md={6}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <a href='/login' style={{color: "black"}}>Already have an account?</a>
                                </Col>
                            </Row>
                        </Col>
                    <Col md={12} className='mt-5 pl-5 pr-5'>
                        <Button className='w-100' variant="primary" type="submit"
                            onClick={registerUser}
                        >
                            Register
                        </Button>
                    </Col>
                </Container>
            </Col>
        </Row>
    )
}

export default Register