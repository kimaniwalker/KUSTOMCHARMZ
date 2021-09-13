import React from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import Footer from '../components/footer'
import SEO from '../components/seo'
import { motion } from 'framer-motion'



export default function About(props) {


    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}>
                <SEO title='About Us' />
                <Header />
                <Banner title='Looking To Get To Know More About Our Brand?' message='We will share our story and everything else you may want to know about us here' />
                <div className="container">
                    <div className="row justify-content-center py-3">
                        <div className="col-8">
                            <h6 className="py-2"><strong>A Brief Intro</strong></h6>
                            <p>Hello! We’re Team Kustom Charmz. We work to deliver "kustom" handmade jewelery all over the world. We are just like most of you fearlessly authentic, unapologetically honest, and really damn interesting. As a small handmade jewelery boutique , we love building intimate relationships and having ongoing conversations with our customers. Our very small staff hustle hard to bring you fresh, unique, and authentic products that we believe millennials truly care about. Keep scrolling to get to know us, and feel free to reach out. We know you have opinions—and the confidence to share ’em. Love you, mean it.
                            </p>
                            <h6 className="py-2"><strong>Our Mission</strong></h6>
                            <p>We'll keep it 💯 with you, always. Our products aren't just thrown together just to make some quick cash. We thouroughly test and experiement with them before putting them on the market. Now that doesn't mean you can just go treating them any kind of way! We only ever recommend products to you that we truly love and back 100 percent. The merchandise we feature on our site are always driven by personal experiences and relationships.</p>
                            <h6 className="py-2"><strong>The "Handmaking" Process</strong></h6>
                            <p>Finding ways to make the world a better place by sourcing our materials sustainably and finding eco-friendly materials to use is our top priority. We source our beads from family owned businesses that follow sustainable practices. Once we have our materials we handmake our bracelets with love. You can count on us if thoughtful purchases are important to you, too.</p>
                            <h6 className="py-2"><strong>Get In Touch</strong></h6>
                            <p>Wanna send us a note the old-fashioned way? We'll you can't right now haha. In all seriousness, were working on getting our first store in the Birmingham area. We're hoping to bring this store to you by winter of 2022. For now , you can shoot us an email at admin@kustomcharmz.com. Looking forward to hearing from you soon.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </motion.div>

        </>
    )
}
