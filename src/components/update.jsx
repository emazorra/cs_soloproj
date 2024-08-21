import React, { useState } from 'react';
import Box from '@mui/material/Box';

const Update = ({firstName, lastName, email, address, city, state, phoneNum, startDate }) => {
    const [allValues, setAllValues] = useState(...user)

    const handleSubmit = async e => {
        const response = await fetch('/update', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ firstName, lastName })
        })
        
        const userData = await response.json();
    }

    return (
        <Box className="updated" component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            <h1>{firstName}, please update any information</h1>
            <form className ="update_form">
                <div>
                    <label htmlFor='fname'>First Name</label> 
                    <input
                    type ="text"
                    placeholder={firstName}
                    />
                    <label htmlFor='lname'>Last Name</label> 
                    <input
                    type ="text"
                    placeholder={lastName}
                    />
                    <label htmlFor='email'>Secondary Email</label> 
                    <input
                    type ="email"
                    placeholder={email}
                    />
                     <label htmlFor='address'>Address</label> 
                    <input
                    type ="text"
                    placeholder={address}
                    />
                     <label htmlFor='city'>City</label> 
                    <input
                    type ="text"
                    placeholder={city}
                    />
                     <label htmlFor='state'>Secondary Email</label> 
                    <input
                    type ="text"
                    placeholder={state}
                    />
                     <label htmlFor='phoneNum'>Phone Number</label> 
                    <input
                    type ="text"
                    placeholder={phoneNum}
                    />
                     <label htmlFor='startDate'>Start Date</label> 
                    <input
                    type ="text"
                    placeholder={startDate}
                    />
                </div>
            </form>
        </Box>
    )

}

export default Update;