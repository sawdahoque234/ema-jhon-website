import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="login">
            <div>
                <h1>Register</h1>
                <form onSubmit="">
                    <input type="text" placeholder="enter your name" /> <br /><br />
                    <input type="email" name="" placeholder="enter your email" id="" /> <br />
                    <input type="password" name="" placeholder="enter your password" id="" /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Have an Account?</p> <Link
                    to="/login">Login Now </Link>
                <br />
                <h3>--------------or----------------</h3>
                <button>Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;