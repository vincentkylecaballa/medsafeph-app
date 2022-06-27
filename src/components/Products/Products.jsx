import { Grid } from '@mui/material'
import React from 'react'
import { Col } from 'react-bootstrap'

import Product from './Product/Product'

const products = [{
        id: 1,
        name: 'Biogesic',
        description: 'Over the counter medicines',
        price: '25.50',
        image: 'https://www.rosepharmacy.com/ph1/wp-content/uploads/2018/05/68332.png'
    },
    {
        id: 2,
        name: 'Centrum',
        description: 'Over the counter medicines',
        price: "20.75",
        image: 'https://www.rosepharmacy.com/ph1/wp-content/uploads/2016/12/70106.webp'
    },
    {
        id: 3,
        name: 'Centrum',
        description: 'Over the counter medicines',
        price: "20.75",
        image: 'https://www.rosepharmacy.com/ph1/wp-content/uploads/2016/12/70106.webp'
    },
    {
        id: 4,
        name: 'Centrum',
        description: 'Over the counter medicines',
        price: "20.75",
        image: 'https://www.rosepharmacy.com/ph1/wp-content/uploads/2016/12/70106.webp'
    }
]

const Products = () => {
    return ( 
        <main>
        <Grid container justify = "center"
        spacing = { 3 } > {
            products.map((item,index) => ( <
                Col item key = { item.id }
                xs = { 12 }
                sm = { 6 }
                md = { 4 }
                lg = { 3 } >
                <Product 
                item = {item}
                key={index}
                image={item.image}
                name={item.name}
                description = {item.description}
                price= {item.price} />  
                </Col>
            ))
        } 
        </Grid>  
        </main>
    );
}

export default Products;