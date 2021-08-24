import React from 'react'
import products from '../store/products.json'
import { useParams } from 'react-router-dom';
import Header from '../header'
import Footer from '../footer'
import { formatCurrency } from '../../utils/cart-modules/currencyConverter';
import cartCtx from '../../utils/cart-modules/cart-context'
import Productimg from './productImg';
import Coloroptions from './colorOptions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function SingleProduct(props) {

    const { id } = useParams();
    const [routeid, setId] = React.useState(id)
    const [product, setProduct] = React.useState(products.filter(element => element.id == id));
    const ctx = React.useContext(cartCtx)
    const [selectedColor, setColor] = React.useState(null)
    const [selectedSoro, setSoro] = React.useState(null)

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const getColor = (color) => {
        setColor(color)
    }

    const notify = () => toast("Item Successfully Added to Cart");

    const addItem = () => {
        ctx.addToCart(...product, selectedColor)
        notify()
    }

    const addItemSoro = () => {
        ctx.addToCart(...product, selectedSoro)
        notify()
    }


    return (
        <>
            <ToastContainer />
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-6 order-last order-sm-last order-md-last order-lg-first order-xl-first">
                        <div className="row">
                            <Productimg main={product[0].images[0].url} images={product[0].images} />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-6 order-first order-sm-first order-md-first order-lg-last order-xl-last">
                        <div className="row pt-5 pb-2 px-2">
                            <h3 className="display-5 text-primary">{product[0].name}</h3>
                        </div>
                        <div className="row p-2">
                            <h6 className="lead text-secondary">{formatCurrency(product[0].price)}</h6>
                        </div>
                        <div className="row p-2">
                            <p>{product[0].description}</p>
                        </div>

                        {product[0].color ? <div className="container">
                            <div className="row py-4 px-2">
                                <Coloroptions getColor={getColor} />
                            </div>
                            <div className="row p-2">
                                <div className="d-grid gap-2">
                                    {selectedColor ? <button href="#" className="btn btn-primary" onClick={addItem} >Add to Cart</button> : null}

                                </div>

                            </div>
                        </div> : null}

                        {product[0].soro ? <div className="container">
                           
                            <div className="row py-4 px-2">
                                <select onChange={(e) => setSoro(e.target.value)} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option defaultValue hidden>Select A Sorority</option>
                                    <option value="Alpha Kappa Alpha Sorority, Inc.">Alpha Kappa Alpha Sorority, Inc.</option>
                                    <option value="Delta Sigma Theta">Delta Sigma Theta</option>
                                    <option value="Sigma Gamma Rho">Sigma Gamma Rho</option>
                                    <option value="Zeta Phi Beta">Zeta Phi Beta</option>
                                    <option value="Order of the Eastern Star">Order of the Eastern Star</option>

                                </select>
                            </div>
                            <div className="row p-2">
                                <div className="d-grid gap-2">
                                    {selectedSoro ? <button href="#" className="btn btn-primary" onClick={addItemSoro} >Add to Cart</button> : null}

                                </div>

                            </div>
                        </div> : null}
                        {product[0].comingsoon ? <div className="row px-2">
                           
                            
                                <h5 className="text-danger">Coming Soon</h5>
                            
                            
                        </div> : null}


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
