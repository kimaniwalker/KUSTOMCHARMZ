import React from 'react'
import cartCtx from '../../utils/cart-modules/cart-context'
import { formatCurrency } from '../../utils/cart-modules/currencyConverter';
import Header from '../header'
import '../../scss/_cart.scss'
import Footer from '../footer';
import { useEffect } from 'react';
import SEO from '../seo';
import { motion } from 'framer-motion';


export default function Cart(props) {

    const { cart, changeQty, removeCartItem } = React.useContext(cartCtx);
    const total = cart.reduce((total, product) => total + (product.price * product.qty), 0);
    const [shipping, setShipping] = React.useState(8);
    const [message, setMessage] = React.useState('');
    const [promocode, setCode] = React.useState('');
    const [shipping_rate, setRate] = React.useState('shr_1JZafdLJedda0w0c0Eoxw99x')
    const orderTotal = formatCurrency(total + parseInt(shipping));
    const price = total + parseInt(shipping);


    useEffect(() => {
        if (total >= 100) {
            setShipping(0)
            setRate('shr_1JZafPLJedda0w0c1smQUazr')
        }

    }, [shipping])

    const handleShipping = (rate, total) => {
        if (rate == 0 || total > 100) {
            setShipping(0)
            setRate('shr_1JZafPLJedda0w0c1smQUazr')
        } else if (rate == 30) {
            setRate('shr_1JZafqLJedda0w0cdn6pzsS5')
        } else if (rate == 8) {
            setRate('shr_1JZafdLJedda0w0c0Eoxw99x')
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
        handleShipping(shipping, total);
        try {
            console.log(items)
            let res = await fetch('/api/checkout/create-checkout-session', {
                method: 'POST',
                body: JSON.stringify({ items: items, message: message, shipping: shipping, shipping_rate: shipping_rate })
                /* body: JSON.stringify({ name: "Kustom Charms", price, message, shipping, cart: JSON.stringify(items) }) */,
                headers: new Headers({ "Content-Type": "application/json", "Stripe-Account": "acct_1JSByuLJedda0w0c" })
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
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}>
                    <SEO title='My Cart' />
                    <Header />
                    <main className="cart">
                        <div className="container">
                            <div className="row py-2">
                                <h2 className="text-center display-6 py-2">My Shopping Cart</h2>
                            </div>
                            <div className="row py-2">
                                <div className="col-xl-8 col-lg-8 col-md-12 col-12">
                                    <div className="card mb-3 w-100 py-2">
                                        {cart.map((product) => (

                                            <div key={product.id} className="row g-0">
                                                <div className="col-md-4 col-lg-4 col-xl-4 col-10">
                                                    <img src={product.image} className="img-fluid rounded-start p-4 m-4 border" alt="..." />
                                                </div>
                                                <div className="col-md-8 col-lg-8 col-xl-8 col-12">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-8 col-lg-8 col-xl-8 col-12">
                                                                <div className="row py-2">
                                                                    <h5 className="card-title text-secondary">{product.name}</h5>
                                                                    <p className="card-text">Style: {product.color}</p>
                                                                    <p className="card-text">Category: {product.category}</p>
                                                                </div>


                                                            </div>
                                                            <div className="col-md-4 col-lg-4 col-xl-4 col-12">
                                                                <div className="input-group mb-3 w-100">
                                                                    <i className="bi bi-plus-circle p-2 input-group-text bg-primary text-light" onClick={(e) => changeQty(product, parseInt(product.qty + 1), product.color)}></i>
                                                                    <input value={product.qty} onChange={(e) => changeQty(product, parseInt(e.target.value))} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                                    <i className="bi bi-dash-circle p-2 input-group-text bg-primary text-light" onClick={(e) => changeQty(product, parseInt(product.qty - 1), product.color)}></i>
                                                                </div>
                                                                <p className="card-text text-secondary">{formatCurrency(product.price * product.qty)}</p>
                                                            </div>
                                                            <div className="col-12 py-2">
                                                                <i onClick={(e) => removeCartItem(product.id)} className="bi bi-trash text-primary"></i><span className="p-2"><small>Remove From Cart</small></span>
                                                                <i className="bi bi-heart text-danger"></i><span className="p-2"><small>Add To Wish List</small></span>
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

                                    <div className="card">
                                        <h5 className="card-header bg-primary text-light">Cart Total</h5>
                                        <div className="card-body">

                                            <p className="card-text">Order Subtotal:<span className="card-text p-2">{formatCurrency(total)}</span></p>


                                            <p className="card-text">Shipping:<span className="card-text p-2">{total >= 100 ? 'Free' : null || shipping == 30 ? '$' + shipping + '.00 ' : null || shipping == 8 ? '$' + shipping + '.00 ' : null}</span></p>

                                            <hr />
                                            <div className="row justify-content-center py-2">
                                                <h5 className="card-title text-secondary">Order Total: {orderTotal}</h5>
                                            </div>

                                            <form onSubmit={(e) => handleCheckout(e)}>
                                                <div className="d-grid gap-2">
                                                    <button className="btn btn-primary" type="submit">Checkout Now</button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>


                                    <div className="card py-2 my-3">
                                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingOne">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne">
                                                        Add A Discount Code <code>(Optional)</code>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseOne1" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <div className="input-group mb-3">

                                                            <input onChange={(e) => setCode(e.target.value)} type="text" className="form-control" placeholder="Enter Promo Code" aria-label="Username" aria-describedby="basic-addon1" />
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
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Shipping
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <div className="container">
                                                    <select onChange={(e) => setShipping(e.target.value)} className="form-select" aria-label="Default select example">
                                                        
                                                        <option value={8} defaultValue >8$ - Priority Shipping - 2-3 days</option>
                                                        <option value={30}>30$ - Express Shipping - Next-day to 2-day guarantee by 6 PM</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                Custom Notes
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body"><div className="mb-3">
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Leave A Custom Message For Us (Max 500 Charachters)</label>
                                                <textarea maxLength="500" onChange={(e) => setMessage(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div></div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Disclaimer
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body"><strong><p>If for any reason you are not satisfied with a product, you have the following options:</p></strong>
                                                <p> We give you 10 days to exchange a product for another product or to return a product for a credit note. Your contractual right of withdrawal expires after 10 days from the day on which you or a third party named by you, who is not the carrier, has taken possession of the goods. Please email <a href="mailto:admin@kustomcharmz.com">admin@kustomcharmz.com</a> with your receipt and reason for dissatifaction.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </main>
                    <Footer />
                </motion.div>
            </>

        )
    }
}
