import React from 'react'
import logo from '../assets/1.png'
import '../scss/_header.scss'

export default function Header(props) {


    return (
        <>
            <main className="header">

                <nav className="navbar navbar-expand-lg bg-light py-2 fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={logo} height="65" alt=""></img>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i class="bi bi-list"></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-sm-center text-center">
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="/onSale">On Sale</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">Our Story</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Get In Touch</a>
                                </li>

                            </ul>
                            <span className="navbar-text justify-content-center align-items-center text-center d-flex">
                                <a href="/trackorder"><i className="bi bi-truck p-2"></i></a>
                                <a href="/login"><i className="bi bi-person p-2"></i></a>
                                <a href="/cart"><i className="bi bi-cart4 p-2"></i></a>
                            </span>
                        </div>
                    </div>
                </nav>

            </main>
        </>
    )
}
