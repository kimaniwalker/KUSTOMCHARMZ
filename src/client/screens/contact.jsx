import React from 'react'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Getintouch from '../components/getInTouch'
import Header from '../components/header'


export default function Contact(props) {


    return (
        <>
            <Header />
            <Banner title={'Have A Question Or Concern ?'} message={'Send us a message. We would love to hear from you ! '} />
            <Getintouch />
            <Footer />



        </>
    )
}
