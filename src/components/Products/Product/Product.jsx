import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";



const Product = ({product, onAddtoCart}) => {
    const classes = useStyles()
    
    return (
        <Card className={classes.root}>
        <div>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {product.name}
                </Typography>
                <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant="body2" color="textSecondary" />

            </CardContent>
            </div>
            <div className={classes.cardContent}>
                <Typography variant="h6" gutterBottom >
                        {product.price.formatted_with_code}
                </Typography>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to cart" onClick={()=>onAddtoCart(product.id, 1)} >
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>

            </div>

        </Card>
    )
}

export default Product
