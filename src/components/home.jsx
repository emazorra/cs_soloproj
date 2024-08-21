import React from 'react';
import LoginForm from './login.jsx';
import SignupForm from './signup.jsx';
import Logo from '/docs/assets/images/Logo.png'

const HomePage = () => {
    return (
        <div className ="homepage">
            <h1>Welcome to Left Rising HR</h1>
            <div>
                <LoginForm />
            </div>
            <div>
                <img
                className="logo"
                src={Logo}
                ></img>
            </div>
            {/* <div> 
                <h2> Or Sign Up</h2>
                <SignupForm/>
            </div>  */}
        </div>
    )
}

export default HomePage;
