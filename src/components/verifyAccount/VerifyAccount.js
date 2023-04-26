import React from 'react';
import Logo from "../../assets/logo.svg";
import Mail from "../../assets/mail.png";
import Header from '../header/Header';

const VerifyAccount = () => {
    return (
        <>
            <Header />
            <div className="row">
                <div className='col-md-4'></div>

                <div className='col-md-4'>
                    <div className='text-center' style={{ marginTop: '5rem' }}>
                        <img src={Logo} className='logo mb-5' />
                        <h1 className='heading'>Verify your account</h1>
                        <p className='subHeading'>For security, we would like to verify your account by sending OTP on your registered email or mobile number</p>
                    </div>

                    <div className="divBox">

                        <div className='text-center'>
                            <p className='subHeading'>Send OTP on</p>
                        </div>

                        <div style={{ position: "relative" }}>
                            <img src={Mail} alt="" className='icons' />
                            <input type="text" value="Email: fahxxx.xxst@gmail.com" className='inputBox' placeholder='Enter your email' />
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </div>

                        <p className='orText'>or</p>

                        <div style={{ position: "relative" }}>
                            <i className="fa fa-mobile icons phoneIcon" aria-hidden="true"></i>
                            <input type="text" value="Mobile: XXXXXXXX73" className='inputBox' placeholder='Enter your number' />
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </div>

                        <div className='d-flex align-items-center justify-content-start mt-4'>
                            <label className="checkContainer">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <p className='subHeading mb-0 ml-2'>Do not require verification for 30 days</p>
                        </div>
                    </div>

                    <button className='submitButton'>Verify</button>
                </div>

                <div className='col-md-4'></div>
            </div>
        </>
    )
}

export default VerifyAccount;