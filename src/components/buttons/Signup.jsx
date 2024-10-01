import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
    return (
        <div>
            <NavLink to="/signup" type="button" className="btn btn-outline-primary ms-2">
                <span className="fa fa-user-plus me-1"></span> Register
            </NavLink>

        </div>
    )
}

export default Signup
