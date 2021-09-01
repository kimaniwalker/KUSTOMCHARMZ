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
    const notify = () => toast("Thank you For subscribing !");
    const notifyError = () => toast.error("Something Went Wrong. Try Again");

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
            notifyError()
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
                        <button type="button" className="btn btn-secondary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Click Here To Subscribe
                        </button>


                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="row">
                                            <div className="col-12">
                                                <h2 className="modal-title text-secondary py-2" id="exampleModalLabel">Subscribe To Our Newsletter</h2>
                                            </div>
                                            <div className="col-12">
                                                <span>Get the latest information on our new and upcoming products. You will also get access to our secret promo codes and discounts</span>
                                            </div>

                                        </div>

                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="First Name" className="form-label">First Name <code>(Required)</code></label>
                                            <input onChange={(e) => setFirst(e.target.value)} value={first} type="text" className="form-control" id="first_name" placeholder="Tahmirah" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Last" className="form-label">Last Name <code>(Required)</code></label>
                                            <input onChange={(e) => setLast(e.target.value)} type="text" value={last} className="form-control" id="last_name" placeholder="Cosby" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Email" className="form-label">Email <code>(Required)</code></label>
                                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="email" placeholder="tcosby25@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <div className="col-12">
                                            <form onSubmit={(e) => handleSubmit(e)}>
                                                {email ?<button type="submit" className="btn btn-primary w-100">Subscribe</button> : <button type="submit" className="btn btn-primary w-100" disabled>Subscribe</button>  }
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
