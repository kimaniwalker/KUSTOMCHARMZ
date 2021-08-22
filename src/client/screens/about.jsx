import React from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import Footer from '../components/footer'


export default function About(props) {
    

    return (
        <>
            <Header />
            <Banner title='Looking To Get To Know More About Our Brand?' message='Well share our story and everything else you may want to know about us here' />
            <div className="container">
                <div className="row justify-content-center py-3">
                    <div className="col-8">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aliquam laudantium ipsam, culpa animi cum harum quod aspernatur mollitia tempore iure, recusandae officia. Voluptatum sunt quae ad, nisi minima eius ea culpa maxime optio nostrum cumque maiores, explicabo ex dolorem repudiandae quia. Quasi iusto velit architecto mollitia vitae sunt neque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aliquam laudantium ipsam, culpa animi cum harum quod aspernatur mollitia tempore iure, recusandae officia. Voluptatum sunt quae ad, nisi minima eius ea culpa maxime optio nostrum cumque maiores, explicabo ex dolorem repudiandae quia. Quasi iusto velit architecto mollitia vitae sunt neque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aliquam laudantium ipsam, culpa animi cum harum quod aspernatur mollitia tempore iure, recusandae officia. Voluptatum sunt quae ad, nisi minima eius ea culpa maxime optio nostrum cumque maiores, explicabo ex dolorem repudiandae quia. Quasi iusto velit architecto mollitia vitae sunt neque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aliquam laudantium ipsam, culpa animi cum harum quod aspernatur mollitia tempore iure, recusandae officia. Voluptatum sunt quae ad, nisi minima eius ea culpa maxime optio nostrum cumque maiores, explicabo ex dolorem repudiandae quia. Quasi iusto velit architecto mollitia vitae sunt neque.</p>
                    </div>
                </div>
            </div>
            <Footer />
           
            
        </>
    )
}