import React, { useState } from 'react'
import { login, checkLogin, getUser } from '../utils/auth';
import { useHistory, useLocation, useRouteMatch, Redirect } from 'react-router-dom'
import logo from '../assets/1.png'
import SEO from '../components/seo';

export default function Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')
    const [checkingLogin, setcheckingLogin] = React.useState(false);
    const [redirectToReferrer, setredirectToReferrer] = React.useState(false);
    const [message, setMessage] = React.useState('')
    const [emailValidation, setEmailValidation] = React.useState('form-control')
    const [passwordValidation, setPasswordValidated] = React.useState('form-control')
    const { from } = props.location.state || { from: { pathname: "/" } };
    const [token, setToken] = useState(null)
    const { history } = useHistory();
    const { match } = useRouteMatch();


    React.useEffect(() => {


        validateCredentials();


    }, [])

    const validateCredentials = () => {


        let loggedIn = checkLogin()

        if (loggedIn) {
            /* setredirectToReferrer(true); */
            setcheckingLogin(false);

        } else {
            setcheckingLogin(false);
        }

    }

    const handleSubmit = async (e) => {

        try {
            e.preventDefault(); //default is for the page to refresh (won't end up loggin in) 
            let token = await login(email, password)
            setToken(token)

            if (token) {
                console.log(token);
                setToken(token)
                setEmailValidation('form-control is-valid')
                setPasswordValidated('form-control is-valid')
                setMessage('Login Successful')
                getUser(token)
                /* setredirectToReferrer(true); */
            } else {
                setEmailValidation('form-control is-invalid')
                setPasswordValidated('form-control is-invalid')
                setMessage('Something went wrong try again')
            }


        } catch (err) {
            console.log(err)
            if (err.message) {
                setMessage(err.message); //triggers render again and shows error message
            }

        }

    }

    if (redirectToReferrer) {
        return <Redirect to={from} />;
    } else {


        return (
            <>
            <SEO title='Login'/>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="row align-items-center justify-content-center py-4">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">

                                <div className="row justify-content-center py-2">
                                   <img className="w-25" src={logo}></img> 
                                </div>
                                


                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">


                                <div className="text-center py-3"><h5>Login for exclusive access</h5></div>


                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">



                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" class={emailValidation} id="loginEmail" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" class={passwordValidation} id="loginPassword" />

                                </div>

                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">

                                <div className="row py-4">
                                    <span>{message}</span>
                                </div>

                            </div>


                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">

                                {
                                    email.length && password.length >= 1 ?

                                        <button className="btn btn-primary w-100">Submit</button>
                                        : <button disabled className="btn btn-primary w-100">Submit</button>
                                }


                            </div>

                        </div>
                    </form>
                </div>

            </>
        )
    }
}
