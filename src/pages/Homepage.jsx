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
import {TbTruckDelivery} from 'react-icons/tb'
import {MdPayment, MdOutlinePriceCheck} from 'react-icons/md'

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
                      <TbTruckDelivery size={70} className='icons'/>
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
                <Row noGutters>
                    <Col md={5}>
                      <MdPayment size={70} className='icons'/>
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
                <Row noGutters>
                    <Col md={5}>
                      <MdOutlinePriceCheck size={70} className='icons'/>
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
            <Container>
              <h3 className='pt-3 pb-3 mt-2 mb-2 homepage-title'>Featured Products</h3>
            </Container>
            <Container fluid className='p-5' style={{display: 'flex', justifyContent: 'center'}}>
              <Products/>
            </Container>
            <Container>
              <h3 className='pt-3 pb-3 mt-2 mb-2 homepage-title'>Exclusive Deals</h3>
            </Container>
            <Container fluid className='p-5' style={{display: 'flex', justifyContent: 'center'}}>
              <Products/>
            </Container>
            <Footer/>
        </div>
    );
}
export default Homepage;
