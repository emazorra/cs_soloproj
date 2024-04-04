import React, { useState, useEffect } from "react";
import "./styles.css";
import Home from './components/home.jsx'


function App () {
    // const [] = useState("");
//what do i need as state for my stuff?

// const url = 'http://localhost:3000';

//     fetch(url)
//     .then((res) => res.json())
//     .then((res) => console.log('res: ', res));

    return (
        <div>
            <Home />
        </div>
    );
}

export default App;