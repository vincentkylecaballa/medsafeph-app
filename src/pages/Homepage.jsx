import '../App.css';
import React from 'react'
import { commerce } from '../lib/commerce'
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ImageSlider from '../components/Carousel/ImageSlider';
import { SliderData } from '../components/Carousel/SliderData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';
import '../static/css/_homepage.css';

function Homepage() {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const {data} = await commerce.products.list();

    setProducts(data);
  } 

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(products);
    return (
        <div>
            <ImageSlider slides={SliderData} /> 
            <Container className='mt-5 mb-5'>
              <Row>
                <Col md={4}>
                  <Row>
                    <Col md={5}>
                      <img className='spiel-image' src="../images/secured-payment.png" alt="" srcset="" />
                    </Col>
                    <Col md={7}>
                      <h5 className='spiel-title text-left'>Same Day Delivery</h5>
                      <p className='spiel-subtitle text-left'>
                        We deliver to your doorstep within 24 hours.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                <Row>
                    <Col md={5}>
                      <img className='spiel-image' src="../images/secured-payment.png" alt="" srcset="" />
                    </Col>
                    <Col md={7}>
                      <h5 className='spiel-title text-left'>Secured Payment</h5>
                      <p className='spiel-subtitle text-left'>
                        All your medicines will be delivered the same day you ordered it!   
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                <Row>
                    <Col md={5}>
                      <img className='spiel-image' src="../images/secured-payment.png" alt="" srcset="" />
                    </Col>
                    <Col md={7}>
                      <h5 className='spiel-title text-left'>Standard Price</h5>
                      <p className='spiel-subtitle text-left'>
                      Our medicines and medical equipment are followed by the Philippine Food and Drug Administration
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container fluid className='m-5'>
              <Products/>
            </Container>
            <Footer/>
        </div>
    );
}
export default Homepage;
