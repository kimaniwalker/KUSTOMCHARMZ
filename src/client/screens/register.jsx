import React, { useState } from 'react'
import { register } from '../utils/register';


export default function Register(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [first_name, setFirst] = React.useState('')
    const [last_name, setLast] = React.useState('')
    const [state, setState] = React.useState('')
    const [zipcode, setZip] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('admin')
    const [profile_picture, setPic] = React.useState('')



    const handleSubmit = async (e) => {

        try {
            e.preventDefault()
            let userObject = {
                email,
                password,
                first_name,
                last_name,
                state,
                zipcode,
                address,
                phone,
                role,
                profile_picture
            }

            console.log(userObject)
            let confirmation = password.localeCompare(confirmPassword);
            console.log(confirmation)
            let id = await register(userObject)
            console.log(id);
            setTimeout(function () {

                alert("Registration completed. Now try and login.");

                window.location.replace("/login");
            }, 2000);

        } catch (err) {
            console.log(err)
        }


    }

    return (
        <>
            <div className="container">
                <form>


                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">


                            <div className="text-center py-3"><h2>Register for exclusive access</h2></div>


                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">



                            <div class="mb-3">
                                <label for="firstName" class="form-label">First Name</label>
                                <input onChange={(e) => setFirst(e.target.value)} value={first_name} type="text" class="form-control" id="firstName" placeholder="David Davinci" />
                            </div>


                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="mb-3">
                                <label for="lastName" class="form-label">Last Name</label>
                                <input onChange={(e) => setLast(e.target.value)} value={last_name} type="text" class="form-control" id="lastName" />

                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div class="mb-3">
                                <label for="address" class="form-label">Address</label>
                                <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" class="form-control" id="address" />

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div class="mb-3">
                                <label for="state" class="form-label">State</label>
                                <input onChange={(e) => setState(e.target.value)} value={state} type="text" class="form-control" id="state" />

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div class="mb-3">
                                <label for="zipCode" class="form-label">Zip Code</label>
                                <input onChange={(e) => setZip(e.target.value)} value={zipcode} type="text" class="form-control" id="zipCode" />

                            </div>
                        </div>
                        <div className="col-12">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" class="form-control" id="email" />

                            </div>
                        </div>
                        <div className="col-12">
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" class="form-control" id="phone" />

                            </div>
                        </div>
                        <div className="col-12">
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" class="form-control" id="password" />

                            </div>
                        </div>
                        <div className="col-12">
                            <div class="mb-3">
                                <label for="password" class="form-label">Confirm Password</label>
                                <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" class="form-control" id="confirmPassword" />

                            </div>
                        </div>
                        <div className="col-12">
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100">Submit</button>
                        </div>

                    </div>

                </form>
            </div>
        </>
    )
}
