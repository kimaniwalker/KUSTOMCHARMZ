import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Getintouch(props) {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [subject, setSubject] = React.useState('')
    const [message, setMessage] = React.useState('')
    const notify = () => toast("Thank you! Your message has been submitted");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({ subject: subject, content: message, email: email, name: name }),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let sessionResponse = await res.json();
            console.log(sessionResponse);
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
            notify()
            
        } catch (e) {
            console.log(e)
        }
    }

    

    return (
        <>
            <ToastContainer />
            <div className="container">
                <div className="row m-4">
                    <div className="col-12 col-lg-6 col-xl-6 bg-light p-4">
                        <div className="row py-4">
                            <h4 className="text-secondary">Get In Touch</h4>
                        </div>
                        <div className="row pb-4">
                            <span>If you have any questions or concerns please feel free to contact us. Were happy to help with any questions you may have.</span>
                        </div>
                        <div className="row py-3">
                            <div className="col-12">
                                <i class="bi bi-phone"></i><p className="p-4 text-secondary d-inline">205-603-8724</p>
                            </div>

                        </div>
                        <div className="row py-3">
                            <div className="col-12">
                                <i class="bi bi-envelope"></i><p className="p-4 text-secondary d-inline">admin@k3charmz.com</p>
                            </div>

                        </div>
                        <div className="row py-3">
                            <div className="col-12">
                                <i class="bi bi-geo-alt"></i><p className="p-4 text-secondary d-inline">Birmingham, AL</p>
                            </div>

                        </div>
                        <div className="row py-3">
                            <div className="col-12">
                                <i class="bi bi-instagram pr-4 pt-4 pb-4"></i>
                                <i class="bi bi-linkedin p-4"></i>
                                <i class="bi bi-facebook p-4"></i>
                                <i class="bi bi-twitter p-4"></i>

                            </div>

                        </div>

                    </div>
                    <div className="col-12 col-lg-6 col-xl-6">
                        <div className="row py-4">
                            <h2 className="display-5 text-primary">Leave Us A Message</h2>
                        </div>
                        
                            <div class="mb-3">
                                <label for="Full Name" class="form-label text-secondary">Full Name</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" value={name} class="form-control" id="name" placeholder="Jania Cosby" />
                            </div>
                            <div class="mb-3">
                                <label for="Subject" class="form-label text-secondary">Subject</label>
                                <input onChange={(e) => setSubject(e.target.value)} type="text" value={subject} class="form-control" id="Subject" placeholder="VIP Subscription Inquiry" />
                            </div>
                            <div class="mb-3">
                                <label for="Email" class="form-label text-secondary">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" value={email} id="Email" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="Message" class="form-label text-secondary">Message</label>
                                <textarea onChange={(e) => setMessage(e.target.value)} class="form-control" id="Message" value={message} rows="3" placeholder="Leave A Custom Message"></textarea>
                            </div>
                            <div class="mb-3">
                              
                            <form onSubmit={(e) => handleSubmit(e)}>
                                {name && email && subject && message  ? <btn type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary w-100">Submit</btn> : <button disabled type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary w-100" disabled>Submit</button> }
                                
                                </form>
                            </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
