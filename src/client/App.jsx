import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/auth/privateRoute';
import About from './screens/about';
import Contact from './screens/contact';
import Home from './screens/home';
import Login from './screens/login';
import Passwordreset from './screens/passwordReset';
import Register from './screens/register';
import UseCart from './utils/cart-modules/use-cart';
import CartContext from './utils/cart-modules/cart-context';
import Cart from './components/store/cart';
import Success from './components/store/success';
import SingleProduct from './components/store/singleProduct';
import Onsale from './screens/onSale';


export default function App(props) {

	const { cart, addToCart, getCartItems, clearCartItems, removeCartItem, changeQty } = UseCart([])

	return (
		<>
		<CartContext.Provider value={{
        cart,
        addToCart,
        getCartItems,
        clearCartItems,
        removeCartItem,
        changeQty,
      }}>
		

		
		<BrowserRouter>
			
			<Switch>
	
				<Route exact path="/" component={Home} />
				<Route exact path="/cart" component={Cart} />
				<Route exact path="/product/:id" component={SingleProduct} />
				<Route exact path="/onSale" component={Onsale} />
				<Route exact path="/success" component={Success} />
				<Route exact path="/about"  component={About} />
				<Route exact path="/login" component={Login} /> 
				<Route exact path="/register" component={Register} />
				<Route exact path="/resetPassword" component={Passwordreset} />
				<PrivateRoute exact path="/contact" component={Contact} />

				<Route render={() => <h1>404: page not found</h1>} />
				

			</Switch>

		</BrowserRouter>
		
		</CartContext.Provider>
		</>
	)
}
