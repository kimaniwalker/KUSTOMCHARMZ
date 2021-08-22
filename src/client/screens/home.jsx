import React from 'react'
import Header from '../components/header'
import Homebanner from '../components/homeBanner'
import ProductThumbnail from '../components/store/productThumbnail'
import Banner from '../components/banner'
import Subscribe from '../components/subscribe'
import Getintouch from '../components/getInTouch'
import Footer from '../components/footer'


export default function Home(props) {
    

    return (
        <>
            <Header />
            <Homebanner />
            <ProductThumbnail title={'Most Loved Items'} />
            <Banner title='FREE SHIPPING ON ALL ORDERS OVER $100' message='*All orders at The Kustom Charmz Boutique are beautifully boxed and shipped priority within 3-5 business days.  This offer does not apply to express and international orders.' />
            <Subscribe />
            <Getintouch />
            <Footer />
           
            
        </>
    )
}
