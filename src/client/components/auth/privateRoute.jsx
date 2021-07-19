import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isLoggedIn } from '../../utils/auth'

export default function PrivateRoute(props) {

    const Component = props.component;
    const propsToPass = Object.assign({}, props);
    delete propsToPass.component;

    

    return (
        <>
           <Route {...propsToPass} render={props => (
            isLoggedIn() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                    

                }} />
            )
        )} />
        </>
    )
}
