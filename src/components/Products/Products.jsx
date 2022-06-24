import React from 'react'
import {Grid} from '@mui/material'

import Product from './Product/Product'

const products = [
    { 
        id: 1, 
        name: 'Biogesic',
        description: 'Over-the-counter medicines',
        price: 'PHP 25.50', 
        image: 'https://www.rosepharmacy.com/ph1/wp-content/uploads/2018/05/68332.png'
    }, 
    {
        id: 2,
        name: 'Centrum',
        description: 'Over the counter medicines',
        price: "PHP 20.75",
        image: 'https://www.rosepharmacy.com/ph1/wp-content/uploads/2016/12/70106.webp'
    }
]

const Products = () =>  {
    return(
     <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
     </main>
    );
}

export default Products;