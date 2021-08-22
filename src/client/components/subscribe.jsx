import React from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

export default function Subscribe(props) {

    const [first, setFirst] = React.useState('')
    const [last, setLast] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [submitted, setSubmitted] = React.useState(false)
    const notify = () => toast("Thank you for subscribing !");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await fetch('/api/contact/subscribe', {
                method: 'PUT',
                body: JSON.stringify({ firstname: first, lastname: last, email: email }),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let sessionResponse = await res.json();
            console.log(sessionResponse);
            setFirst('')
            setLast('')
            setEmail('')
            notify()

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {

            var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {})
            myModal.toggle('show')

    }, [])

        if (submitted) {
            return null
        } else {
            return (
            <>
            <ToastContainer />
                <div className="container-fluid">
                    <div className="row">
                        <button type="button" class="btn btn-secondary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Click Here To Subscribe
                        </button>


                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <div className="row">
                                            <div className="col-12">
                                                <h2 class="modal-title text-secondary py-2" id="exampleModalLabel">Subscribe To Our Newsletter</h2>
                                            </div>
                                            <div className="col-12">
                                                <span>Get the latest information on our new and upcoming products. You will also get access to our secret promo codes and discounts</span>
                                            </div>

                                        </div>

                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label for="First Name" class="form-label">First Name <code>(Required)</code></label>
                                            <input onChange={(e) => setFirst(e.target.value)} value={first} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Tahmirah" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="Last" class="form-label">Last Name <code>(Required)</code></label>
                                            <input onChange={(e) => setLast(e.target.value)} type="text" value={last} class="form-control" id="exampleFormControlInput1" placeholder="Cosby" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="Email" class="form-label">Email <code>(Required)</code></label>
                                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" class="form-control" id="exampleFormControlInput1" placeholder="tcosby25@gmail.com" />
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <div className="col-12">
                                            <form onSubmit={(e) => handleSubmit(e)}>
                                                {email ?<button type="submit" class="btn btn-primary w-100">Subscribe</button> : <button type="submit" class="btn btn-primary w-100" disabled>Subscribe</button>  }
                                            </form>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </>
        )
        }
        
    

}
