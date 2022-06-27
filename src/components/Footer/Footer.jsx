import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import '../../static/css/_footer.css'

const Footer = () => {
  return (
    <>
        <div className='footer-one' >
            <Row>
                <Col>
                    <h5 className='footer-title'>About MedSafe</h5>
                    <p className='footer-text text-left'>
                        MedSafe is a web application that helps users to find the best medical services in their area. 
                    </p>
                </Col>
                <Col>
                    <h5 className='footer-title'>Quick Links</h5>
                    <ul className='list-unstyled'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Vitamins</a>
                        </li>
                        <li>
                            <a href="#">Medical Equipments</a>
                        </li>
                        <li>
                            <a href="#">Personal Care</a>
                        </li>
                        <li>
                            <a href="#">Mom and Infant</a>
                        </li>
                        <li>
                            <a href="#">COVID-19 Essentials</a>
                        </li>
                    </ul>
                    <h5 className='footer-title'>Store Address</h5>
                    <p className='footer-subtitle'>551 MF Jhocson St., Sampaloc, Manila</p>
                </Col>
                <Col>
                    <h5 className='footer-title'>Contact Us</h5>
                    <form>
                        
                    </form>
                </Col>
            </Row>
        </div>
        <div className='footer-two'>
            <Row>
                <Col>
                    <p>Copyright 2022. Wizards Brigades</p>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Footer