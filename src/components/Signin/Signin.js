import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './Signin.scss';
import { Link } from 'react-router-dom';
import LendsqrLogo from '../../images/lendsqr-logo.png';
// import {ReactComponent as LogoSvg} from '../../images/NavLogo.svg'
import Artwork from '../../images/artwork.png';

const Signin = () => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const history = useHistory()

    const handleEmailInput = (e) => {
        const {name, value} = e.target.value;
        setUserEmail({
            [name]: value
        })
    }
    
    const handlePasswordInput = (e) => {
        const {name, value} = e.target.value;
        setUserPassword({
            [name]: value
        })
    }

    const handleSignin = (e) => {
        e.preventDefault()
        if (userEmail !== "" && userPassword !== "") {
            history.push('/users')
        }
    }

    return (
        <div className="signin">
            <div className="homepage-art">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={LendsqrLogo} alt="Logo" className="logo-img" />
                    </Link>
                </div> 
                <div className="artwork-img-cont">
                    <img src={Artwork} alt="Artwork" className="artwork-img" />
                </div>
            </div>
            <div className="homepage-signin">
                <div className="signin-container">
                    <h1 className="welcome">Welcome!</h1>
                    <p className="enter-details">Enter details to login.</p>
                    <form action="" className="signin-form">
                        <input name="email" type="email" className="signin-input" placeholder="Email" onChange={handleEmailInput} />
                        <input name="password" type="password" className="signin-input" placeholder="Password" onChange={handlePasswordInput} />
                        <p className="forgot">Forgot Password?</p>
                        <button className="signin-btn" onClick={handleSignin}>Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
