import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid, Box} from '@mui/material'
import useStyles from '../Product/styles.js'
import './../../../static/css/_card.css'
import {BsCartPlusFill} from 'react-icons/bs'
import { useCart } from "react-use-cart";
 

const Product = (props) => {
    const classes = useStyles();  
    const {addItem} = useCart(); 

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={props.image} title={props.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Box ml={1} mr={1}>
                            <Typography className='title-card' gutterBottom variant="h6" component="h2">
                                {props.name}
                            </Typography>
                        </Box>
                    </div>
                    <Box ml={1} mr={1}>
                        <Typography variant="body2" color="textSecondary" component="p" align="left" style={{wordWrap: 'break-word'}}>
                            {props.description}
                        </Typography>
                    </Box>
                </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Grid container spacing={12}>
                    <Grid item md={6}>
                        <Typography gutterBottom variant="h6" component="h2">
                        ₱{props.price}
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <IconButton aria-label='Add to Cart' onClick={()=>addItem(props.item)}>
                            <BsCartPlusFill />
                        </IconButton>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default Product