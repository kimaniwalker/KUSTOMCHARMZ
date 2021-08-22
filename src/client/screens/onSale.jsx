import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ProductThumbnail from '../components/store/productThumbnail'
import Banner from '../components/banner'

export default function Onsale(props) {
    

    return (
        <>
            <Header />
            <Banner title={'Sweet New Arrivals On Sale'} message={'25% Off Of All Items Below'}  />
            <ProductThumbnail />
            
            <Footer />
            
        </>
    )
}
