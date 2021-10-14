import React from 'react';
import { Link } from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {googleSignIn} = useFirebase();
    return (
        <div className="login">
            <div >
                <h1>Login</h1>
                <form onSubmit="">
                    <input type="email" name="" placeholder="enter your email" id="" /> <br />
                    <input type="password" name="" placeholder="enter your password" id="" /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john?</p> <Link to="/register">Create Account </Link>
                <br />
                <h3>--------------or----------------</h3>
                <button onClick={googleSignIn}>Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;