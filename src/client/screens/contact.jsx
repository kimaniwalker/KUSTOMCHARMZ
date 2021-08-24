import React from 'react'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Getintouch from '../components/getInTouch'
import Header from '../components/header'
import SEO from '../components/seo'
import { motion } from 'framer-motion'



export default function Contact(props) {


    return (
        <>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
                <SEO title='Get In Touch' />
                <Header />
                <Banner title={'Have A Question Or Concern ?'} message={'Send us a message. We would love to hear from you ! '} />
                <Getintouch />
                <Footer />
</motion.div> 
            

        </>
    )
}
