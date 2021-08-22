import React from 'react'
import cartCtx from '../../utils/cart-modules/cart-context'
import { formatCurrency } from '../../utils/cart-modules/currencyConverter';
import Header from '../header'
import '../../scss/_cart.scss'
import Footer from '../footer';
import { useEffect } from 'react';


export default function Cart(props) {

    const { cart, changeQty, removeCartItem } = React.useContext(cartCtx);
    const total = cart.reduce((total, product) => total + (product.price * product.qty), 0);
    const [shipping, setShipping] = React.useState(8);
    const [message, setMessage] = React.useState('');
    const [promocode, setCode] = React.useState('');
    const [shipping_rate, setRate] = React.useState('shr_1JQGE9H9WDnn97wq2aToY9XK')
    const orderTotal = formatCurrency(total + parseInt(shipping));
    const price = total + parseInt(shipping);
    

    useEffect(() => {
        if ( total >= 100 ) {
            setShipping(0)
            setRate('shr_1JQGF8H9WDnn97wqzLHpfJRo')
        }

    }, [])

    const handleShipping = (rate, total) => {
        if (rate == 0 || total > 100) {
            setShipping(0)
            setRate('shr_1JQGF8H9WDnn97wqzLHpfJRo')
        } else if ( rate == 30) {
            setRate('shr_1JQGBlH9WDnn97wq0fHThG58')
        } else if ( rate == 8 ) {
            setRate('shr_1JQGE9H9WDnn97wq2aToY9XK')
        }
    }

    const cartItems = (cart) => {
        let newItems = []
        cart.forEach(item => {
            newItems.push(
                {
                  "price_data": {
                    "currency": "usd",
                    "product_data": {
                      "name": item.name + '-' + item.color,
                      "images": [item.image],
                    },
                    "unit_amount": item.price * 100,
                  },
                  "quantity": item.qty,
                },
              )
            console.log(newItems)
            /* newItems.push([{ "id": item.id, "price": item.price, "name": item.name, "qty": item.qty, "color": item.color }])
            console.log(newItems) */
        });
        return newItems;
    }

    

    const handleCheckout = async (e) => {
        e.preventDefault();
        let items = cartItems(cart);
        handleShipping(shipping,total);
        try {
           console.log(items)
            let res = await fetch('/api/checkout/create-checkout-session', {
                method: 'POST',
                body: JSON.stringify({items: items, message: message , shipping: shipping, shipping_rate: shipping_rate})
                /* body: JSON.stringify({ name: "Kustom Charms", price, message, shipping, cart: JSON.stringify(items) }) */,
                headers: new Headers({ "Content-Type": "application/json" })
            });
            let sessionResponse = await res.json();
            console.log(sessionResponse);
            window.location.href = sessionResponse;
        } catch (e) {
            console.log(e)
        }
    }

    if (cart.length < 1) {
        return (
            <>
                <Header />
                <div className="container">
                    <p className="text-center">
                        Cart is Empty
                    </p>
                </div>
            </>
        )
    } else {

        return (
            <>
                <Header />
                <main className="cart">
                    <div className="container">
                        <div className="row py-2">
                            <h2 className="text-center display-6 py-2">My Shopping Cart</h2>
                        </div>
                        <div className="row py-2">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
                                <div class="card mb-3 w-100 py-2">
                                    {cart.map((product) => (

                                        <div key={product.id} class="row g-0">
                                            <div class="col-md-4 col-lg-4 col-xl-4 col-10">
                                                <img src={product.image} class="img-fluid rounded-start p-4 m-4 border" alt="..." />
                                            </div>
                                            <div class="col-md-8 col-lg-8 col-xl-8 col-12">
                                                <div class="card-body">
                                                    <div className="row">
                                                        <div className="col-md-8 col-lg-8 col-xl-8 col-12">
                                                            <div className="row py-2">
                                                                <h5 class="card-title text-secondary">{product.name}</h5>
                                                                <p class="card-text">Color: {product.color}</p>
                                                                <p class="card-text">Category: {product.category}</p>
                                                            </div>


                                                        </div>
                                                        <div className="col-md-4 col-lg-4 col-xl-4 col-12">
                                                            <div class="input-group mb-3 w-100">
                                                                <i class="bi bi-plus-circle p-2 input-group-text bg-primary text-light" onClick={(e) => changeQty(product, parseInt(product.qty + 1), product.color)}></i>
                                                                <input value={product.qty} onChange={(e) => changeQty(product, parseInt(e.target.value))} type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                                                <i class="bi bi-dash-circle p-2 input-group-text bg-primary text-light" onClick={(e) => changeQty(product, parseInt(product.qty - 1), product.color)}></i>
                                                            </div>
                                                            <p class="card-text text-secondary">{formatCurrency(product.price * product.qty)}</p>
                                                        </div>
                                                        <div className="col-12 py-2">
                                                            <i onClick={(e) => removeCartItem(product.id)} class="bi bi-trash text-primary"></i><span className="p-2"><small>Remove From Cart</small></span>
                                                            <i class="bi bi-heart text-danger"></i><span className="p-2"><small>Add To Wish List</small></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="row justify-content-center py-2 m-0">

                                                <hr />


                                            </div>

                                        </div>

                                    ))
                                    }
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-12">

                                <div class="card">
                                    <h5 class="card-header bg-primary text-light">Cart Total</h5>
                                    <div class="card-body">

                                        <p class="card-text">Order Subtotal:<span className="card-text p-2">{formatCurrency(total)}</span></p>


                                        <p class="card-text">Shipping:<span className="card-text p-2">{total >= 100 ? 'Free' : null || shipping == 30  ? '$' + shipping + '.00 '  : null || shipping == 8  ? '$' + shipping + '.00 '  : null  }</span></p>

                                        <hr />
                                        <div className="row justify-content-center py-2">
                                            <h5 class="card-title text-secondary">Order Total: {orderTotal}</h5>
                                        </div>

                                        <form onSubmit={(e) => handleCheckout(e)}>
                                            <div class="d-grid gap-2">
                                                <button class="btn btn-primary" type="submit">Checkout Now</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>


                                <div class="card py-2 my-3">
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Add A Discount Code <code>(Optional)</code>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    <div class="input-group mb-3">

                                                        <input onChange={(e) => setCode(e.target.value)} type="text" class="form-control" placeholder="Enter Promo Code" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="container py-2">
                        <div className="row">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Shipping
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <div className="container">
                                                <select onChange={(e) => setShipping(e.target.value)} class="form-select" aria-label="Default select example">
                                                    <option hidden value={0}>Free Shipping - Up to 1 week</option>
                                                    <option value={8} selected >8$ - Priority Shipping - 2-3 days</option>
                                                    <option value={30}>30$ - Express Shipping - Next-day to 2-day guarantee by 6 PM</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Custom Notes
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body"><div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">Leave A Custom Message For Us (Max 500 Charachters)</label>
                                            <textarea maxlength="500" onChange={(e) => setMessage(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div></div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Disclaimer
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </main>
                <Footer />

            </>

        )
    }
}
