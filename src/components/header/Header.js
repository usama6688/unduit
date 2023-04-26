import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='headerStyle'>
            <ul>
                <Link to="/">
                    <li>Login</li>
                </Link>

                <Link to="/verify">
                    <li>Verify your account</li>
                </Link>

                <Link to="/otp">
                    <li>Verify OTP</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header;