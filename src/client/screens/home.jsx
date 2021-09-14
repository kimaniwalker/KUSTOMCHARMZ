import React from 'react'
import Header from '../components/header'
import Homebanner from '../components/homeBanner'
import ProductThumbnail from '../components/store/productThumbnail'
import Banner from '../components/banner'
import Subscribe from '../components/subscribe'
import Getintouch from '../components/getInTouch'
import Footer from '../components/footer'
import SEO from '../components/seo'
import { motion } from 'framer-motion'


export default function Home(props) {
    

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
        <motion.div initial={{opacity: 1}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
        <SEO title='Home Page'/>
            <Header />
            <Homebanner />
            <ProductThumbnail title={'Featured Items'} />
            <Banner title='FREE SHIPPING ON ALL ORDERS OVER $100' message='*All orders at The Kustom Charmz Boutique are beautifully boxed and shipped priority within 3-5 business days.  This offer does not apply to express and international orders.' />
            <Subscribe />
            <Getintouch />
            <Footer />
        </motion.div>   
            
        </>
    )
}
