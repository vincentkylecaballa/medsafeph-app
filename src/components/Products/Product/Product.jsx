import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid, Box} from '@mui/material'
import useStyles from '../Product/styles.js'
import './../../../static/css/_card.css'
import {BsCartPlusFill} from 'react-icons/bs'

const Product = ({product}) => {
    const classes = useStyles();  
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Box ml={1} mr={1}>
                            <Typography className='title-card' gutterBottom variant="h6" component="h2">
                                {product.name}
                            </Typography>
                        </Box>
                    </div>
                    <Box ml={1} mr={1}>
                        <Typography variant="body2" color="textSecondary" component="p" align="left" style={{wordWrap: 'break-word'}}>
                            {product.description}
                        </Typography>
                    </Box>
                </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Grid container spacing={12}>
                    <Grid item md={6}>
                        <Typography gutterBottom variant="h6" component="h2">
                            {product.price}
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <IconButton aria-label='Add to Cart'>
                            <BsCartPlusFill />
                        </IconButton>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default Product