import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Products/Product/Product"

const products = [
    {id: 1, name: "shoes", description: "good shoes", price: "$10", image: "https://sport-marafon.ru/upload/resize_cache/files/iblock/elements/e80e9eb2-9e05-11e2-9e97-e83935202582/f3cd5d99-0de4-11e5-80c8-002590d0f723/210_210_1/f3cd5d990de411e580c8002590d0f723_ba8bfb3b5db111e780c9901b0e95a2a8.jpg"},
    {id: 2, name: "gun", description: "kill them all", price: "$100", image: "https://static.detmir.st/media_out/152/134/134152/1500/0.jpg" }
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}  />
                    </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Products