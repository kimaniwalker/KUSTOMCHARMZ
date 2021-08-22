import React from 'react'
import { formatCurrency } from '../../utils/cart-modules/currencyConverter'
import '../../scss/_productThumbnail.scss';
import products from '../store/products.json'
import { Link } from 'react-router-dom';

export default function ProductThumbnail(props) {


    return (
        <>
            <main className="productThumbnail">
                <div className="container">
                    <div className="row py-4">
                        <h1 className="display-5 text-center">{props.title}</h1>
                    </div>
                    <div className="row py-2">
                        
                        <div class="card-group py-2">
                            {products.map((product) => (
                                <div className="col-12 col-lg-4 col-xl-4">

                                
                                    <div key={product.id} className="card text-center p-2 border-0 m-2">
                                        <Link to={`/product/${product.id}`}><img src={product.image} className="card-img-top py-3" alt="..." /></Link>
                                        <div className="card-body">
                                            <p className="card-title">{product.name}</p>
                                            <p className="card-title text-success">{formatCurrency(product.price)}</p>
                                        <Link to={`/product/${product.id}`}><button className="btn btn-primary w-50">View Details</button></Link>   
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
