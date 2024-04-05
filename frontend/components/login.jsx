import React, { useState } from 'react';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log({username})
        console.log({password})

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                console.log('Login successful');
            } else {
                setError('Invalid username or password');
            }
        } catch (err) {
            setError('Failed to log in. Please try again later.');
            console.log('Login failed: ', err);
        }
    } 

    return (
        <form onSubmit={handleSubmit}>
            <div className="login_form">
                <label htmlFor='user-email'>Email: </label>
                <input
                type="email"
                id="username"
                name="email"
                placeholder="example@gmail.com"
                onChange={handleUsernameChange}
                />
            </div>
            <div className="login_form">
                <label htmlFor='password'>Password: </label>
                <input
                type="password"
                id="password"
                name="password"
                onChange={handlePasswordChange}
                />
            </div>
            <button className="login_btn" type="submit">Login</button>
        </form>
    )

};

export default LoginForm;