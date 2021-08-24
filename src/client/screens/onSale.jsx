import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ProductThumbnail from '../components/store/productThumbnail'
import Banner from '../components/banner'
import SEO from '../components/seo'
import { motion } from 'framer-motion'


export default function Onsale(props) {


    return (
        <>
           <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
                <SEO title='Products On Sale' />
                <Header />
                <Banner title={'Sweet New Arrivals On Sale'} message={'25% Off Of All Items Below'} />
                <ProductThumbnail />

                <Footer />
           </motion.div>
        </>
    )
}
