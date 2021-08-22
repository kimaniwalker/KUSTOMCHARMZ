import React from 'react'
import Products from '../store/products'
import products from '../store/products.json'



export default function ProductItem(props) {


    return (
        <>

            <h1>Products</h1>
            <div className="container">
                <div className="row products g-3">
                    {products.map((product) => (
                        <Products key={product.id} {...product} />
                    ))}
                </div>

            </div>


        </>
    )
}
