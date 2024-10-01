import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <NavLink to="/login" className="btn btn-outline-primary ms-auto" >
               <span className="fa fa-sign-in me-1"></span> Login
            </NavLink>

        </>
                    )
}

                    export default Login
