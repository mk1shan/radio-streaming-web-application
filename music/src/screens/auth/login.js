import React from 'react'
import { loginEndpoint } from '../../spotify'
import './login.css';
export default function Login() {
  return (

    <div className="login-page">

    <img src ="login.png"

        alt="login-spotify"
        className="logo"
    />

    <a href = {loginEndpoint}>

        <div className='login-btn'>LOG IN</div>
    </a>
    </div>
  )
}
