import React, { Fragment, useState } from 'react'
import '../assets/styles/css/join.css'
import sendData from '../includes/handledata'

const Join = () => {
    const[userdat, setUserDat] = useState({
        username: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        sendData('gitjoin', userdat)
    }
  return (
    <Fragment>
        <div className="join_us">
            <div className="join_container">
                <div className="join_wrapper">
                    <div className="auth-login">
                        <h2 className="reg-title">Request to be added to our Github Org</h2>
                        <form className="register-form" onSubmit={handleSubmit}>
                            <div className="user-input-wrp">
                                <input
                                    id="id-input"
                                    type="text"
                                    name="username"
                                    value={userdat.email}
                                    className="inputText"
                                    onChange={(e) => setUserDat({ ...userdat, [e.target.name]: e.target.value })}
                                />
                                <span className="floating-label">
                                    Github username <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>
                            <span id="id-err"></span>
                            <div className="termsofservice">
                                <br/>
                                <p>By signing up to nullchemy you opt in to our <a href="tos.html" >terms of service</a> and our <a href="privacy.html" >privacy policies</a></p>
                                <br/>
                            </div>
                            <div className="subflex">
                                <input type="submit" value="sign in" className="register-btn"/>
                                <div className="logDirect">
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Join