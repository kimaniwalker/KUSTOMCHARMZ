import React from 'react'
import Banner from '../banner';
import Footer from '../footer';
import Getintouch from '../getInTouch';
import Header from '../header'
import Loading from '../loading';
import cartCtx from '../../utils/cart-modules/cart-context'

export default function Success(props) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const session_id = urlParams.get('session_id')
    const [session, setSession] = React.useState(null)
    const ctx = React.useContext(cartCtx)

    React.useEffect(() => {
        getSession(session_id)
        /* ctx.clearCartItems() */
    }, [])

    const getSession = async (session_id) => {

        try {
            let res = await fetch('/api/checkout/retrieve-checkout-session', {
                method: 'POST',
                body: JSON.stringify({ session_id }),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let sessionResponse = await res.json();
            console.log(sessionResponse.shipping.name);
            setSession(sessionResponse)
        } catch (e) {
            console.log(e)
        }
    }



    if (session == null) {
        return (
            <>
                <Header />
                <Loading />
            </>
        )
    } else {




        return (
            <>
                <Header />
                <Banner title={'Great News ! Your Order Was Successful'} message={`Thank you for shopping at Kustom Charmz ${session.shipping.name}. We appreciate your business! If you have any questions, please feel free to reach out to us. You should receive an email with your order details shortly at ${session.customer_details.email}.`} />
                
                <Getintouch />
                <Footer />
            </>
        )
    }
}
