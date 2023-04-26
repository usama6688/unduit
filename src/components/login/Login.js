import React from 'react';
import Logo from "../../assets/logo.svg";
import Mail from "../../assets/mail.png";
import Lock from "../../assets/lock.png";
import Header from '../header/Header';

const Login = () => {
    return (
        <>
            <Header />
            <div className="row">
                <div className='col-md-4'></div>

                <div className='col-md-4'>
                    <div className='text-center' style={{ marginTop: '5rem' }}>
                        <img src={Logo} className='logo mb-5' />
                        <h1 className='heading'>Login to your account</h1>
                        <p className='subHeading'>Please enter your credentials to continue</p>
                    </div>

                    <div className="divBox">
                        <div style={{ position: "relative" }}>
                            <img src={Mail} alt="" className='icons' />
                            <input type="text" className='inputBox' placeholder='Enter your email' />
                        </div>

                        <div className='mt-5' style={{ position: "relative" }}>
                            <img src={Lock} alt="" className='icons' />
                            <input type="password" className='inputBox' placeholder='Enter your password' />
                        </div>
                    </div>

                    <button className='submitButton'>Let's Go</button>

                    <div className='d-flex justify-content-center'>
                        <p className='forgotLink mt-5'>Forgot password?</p>
                    </div>
                </div>

                <div className='col-md-4'></div>
            </div>
        </>
    )
}

export default Login;