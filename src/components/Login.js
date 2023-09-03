import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import {auth} from '../firebase';


 const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
 

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(auth=>{history.push('/')}).catch(error => alert(error.message))
  };

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(
      (auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
   

  return (
    <div className='login'>
        <Link to="/">
          <img src='https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png'
      alt="Amazon logo"
      className='login_logo' />
        </Link>
        <div className='login_container'>
          <h1>Sign-in</h1>
          <fom>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>
          </fom>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of 
            Use & 
            Sale. Please see our Privacy Notice, Our Cookies Notice and our 
            Interest-Based Ads Notice.
          </p>
          <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
   }


export default Login