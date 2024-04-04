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
            console.log('Login failed: ', error);
        }
    } 
};

export default LoginForm;