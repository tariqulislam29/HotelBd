
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {

    const { googleLoginHandler } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const signInWithGoogle = () => {

        googleLoginHandler().then(result => {
            history.push(redirect_uri);
        })
    }



    return (
        <div className="login">
            <div className="login-details">
                <div className="mt-4"> <h1>you can Login Using</h1>  </div>
                <br />
                <button onClick={signInWithGoogle} className="bg-dark mb-5 text-white rounded px-2 py-2">Google Sign In</button>
            </div>
        </div>





    );
};

export default Login;