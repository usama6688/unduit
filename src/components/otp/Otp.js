import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Logo from "../../assets/logo.svg";
import Header from '../header/Header';

const Otp = () => {

    const [otp, setOtp] = useState('');

    return (
        <>
        <Header />
            <div className="row">
                <div className='col-md-4'></div>

                <div className='col-md-4'>
                    <div className='text-center' style={{ marginTop: '5rem' }}>
                        <img src={Logo} className='logo mb-5' />
                        <h1 className='heading'>Verify OTP</h1>
                        <p className='subHeading'>Please enter 6 digit OTP that has been sent on your registered mobile XXXXXXXX73</p>
                    </div>

                    <div className="divBox mb-3">
                        <div className="otpBox">
                            <OtpInput
                                value={otp}
                                inputType="number"
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} />}
                            />
                        </div>
                    </div>

                    {otp === "000000" &&
                        <div className='d-flex justify-content-start'>
                            <p className='forgotLink mt-3 border-0 mb-0 pb-0' style={{ color: "#EF5A3E" }}><i class="fa fa-exclamation-circle mr-2" aria-hidden="true" style={{ color: "#EF5A3E" }}></i> Invalid OTP. Please check your code and try again.</p>
                        </div>
                    }

                    <div className='d-flex justify-content-center'>
                        <p className='forgotLink mt-5'>Resend OTP</p>
                    </div>
                </div>

                <div className='col-md-4'></div>
            </div>
        </>
    )
}

export default Otp;