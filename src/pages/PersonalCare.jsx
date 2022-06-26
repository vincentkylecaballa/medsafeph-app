import React, {useState} from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from '../components/Categories/Categories'
import Footer from '../components/Footer/Footer'
import '../../src/static/css/_personalcare.css'
import Products from '../components/Products/Products'
import {Grid} from '@mui/material'
import Navigation from '../components/Navigation/Navigation';


const PersonalCare = () => {

    const [data, setData]=useState(Categories);
    const filterResult = (CategoryItem) => {
        const result = Categories.filter((curData)=>{
          return curData.category===CategoryItem;
        });

        setData(result);
    }

  return (
    <>
      <Navigation/>
      <Container fluid>
        <Row noGutters>
          <Col md={3} className='mt-5'>
            <Container fluid>
              <h4 className='mt-5 mb-5 page-title'>Filter Products</h4>
              <button className="btn btn-info w-100 mb-4" onClick={()=>setData(Categories)}>All Products</button>
              <button className="btn btn-info w-100 mb-4" onClick={()=>filterResult('Hair Care')}>Hair Care</button>
              <button className="btn btn-info w-100 mb-4" onClick={()=>filterResult('Bath & Body')}>Bath & Body</button>
              <button className="btn btn-info w-100 mb-4" onClick={()=>filterResult('Oral Care')}>Oral Care</button>
              <button className="btn btn-info w-100 mb-4" onClick={()=>filterResult('Eye Care')}>Eye Care</button>
            </Container>
            
          </Col>
          <Col md={9} className='mt-5 mb-5 border-left'> 
          <h4 className='mt-5 mb-5 page-title'>Personal Care</h4>
              <Container fluid>
                <Grid container
                  spacing={12}
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start">
                      {data.map((values)=>{
                        const {id,title,price,description,image}=values;
                        return(
                          <Grid item xs={12} sm={6} md={12}>
                            <Products/>
                          </Grid>
                        )
                    })}
                  </Grid>
              </Container>
          </Col>
        </Row>
      </Container>
      <Footer/>

    </>

  )
}

export default PersonalCare;