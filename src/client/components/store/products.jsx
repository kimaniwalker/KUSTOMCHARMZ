import React from 'react'
import cartCtx from '../../utils/cart-modules/cart-context'

export default function Products({ id, name, image, price, description, count, category }) {
    
    /* const [price, setPrice] = React.useState(''); */
    const [cart, setCart] = React.useState([]);
    const ctx = React.useContext(cartCtx)

    React.useEffect(() => {

    }, [])

    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title text-center">{name}</h5>

                    </div>
                    <img className="card-img-top p-5" src={image} alt={`Image for ${name}`} />
                    <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{description}</li>
                        <li class="list-group-item">{count}</li>
                        <li class="list-group-item">{category}</li>
                    </ul>
                </div>
                    <div class="card-footer text-muted">
                        <btn href="#" class="btn btn-primary" onClick={() => ctx.addToCart({
                        id, name, image, price, count
                    })} >Add to Cart</btn>
                    <a href="#" class="btn btn-primary" onClick={() => ctx.removeCartItem(id)}>Remove Item</a>
                        <p class="card-text text-center">

                            Price:{price}

                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
