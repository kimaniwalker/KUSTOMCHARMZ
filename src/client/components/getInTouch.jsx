import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../scss/_getInTouch.scss'

export default function Getintouch(props) {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [subject, setSubject] = React.useState('')
    const [message, setMessage] = React.useState('')
    const notify = () => toast("Thank you! Your message has been submitted");
    const notifyError = () => toast.error("Something Went Wrong. Try Again");

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
            notifyError();
            console.log(e)
        }
    }

    

    return (
        <>
            <ToastContainer />
            <main className="getInTouch">
            <div className="container">
                <div className="row m-4">
                    <div className="col-12 col-lg-6 col-xl-6 bg-light p-4">
                        <div className="row py-4">
                            <h4 className="text-secondary">Get In Touch</h4>
                        </div>
                        <div className="row pb-4">
                            <span>If you have any questions or concerns please feel free to contact us. We're happy to help with any questions you may have.</span>
                        </div>
                        {/* <div className="row py-3">
                            <div className="col-12">
                                <i className="bi bi-phone"></i><p id="phone" className="p-4 text-secondary d-inline">205-603-8724</p>
                            </div>

                        </div> */}
                        <div className="row py-3">
                            <div className="col-12">
                                <i className="bi bi-envelope"></i><p id="email" className="p-4 text-secondary d-inline"><a id="email" className="text-secondary" href="mailto:admin@kustomcharmz.com">admin@kustomcharmz.com</a></p>
                            </div>

                        </div>
                        <div className="row py-3">
                            <div className="col-12">
                                <i className="bi bi-geo-alt"></i><p id="city" className="p-4 text-secondary d-inline">Birmingham, AL</p>
                            </div>

                        </div>
                        <div className="row py-3">
                            <div className="col-12">
                                <i className="bi bi-instagram pr-4 pt-4 pb-4"></i>
                                <i className="bi bi-linkedin p-4"></i>
                                <i className="bi bi-facebook p-4"></i>
                                <i className="bi bi-twitter p-4"></i>

                            </div>

                        </div>

                    </div>
                    <div className="col-12 col-lg-6 col-xl-6">
                        <div className="row py-4">
                            <h2 className="display-5 text-primary">Leave Us A Message</h2>
                        </div>
                        
                            <div className="mb-3">
                                <label htmlFor="Full Name" className="form-label text-secondary">Full Name</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" value={name} className="form-control" id="name" placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Subject" className="form-label text-secondary">Subject</label>
                                <input onChange={(e) => setSubject(e.target.value)} type="text" value={subject} className="form-control" id="Subject" placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label text-secondary">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" value={email} id="Email" placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Message" className="form-label text-secondary">Message</label>
                                <textarea onChange={(e) => setMessage(e.target.value)} className="form-control" id="Message" value={message} rows="3" placeholder=""></textarea>
                            </div>
                            <div className="mb-3">
                              
                            <form onSubmit={(e) => handleSubmit(e)}>
                                {name && email && subject && message  ? <btn type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary w-100">Submit</btn> : <button disabled type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary w-100" disabled>Submit</button> }
                                
                                </form>
                            </div>
                        
                    </div>
                </div>
            </div>
            </main>
        </>
    )
}
