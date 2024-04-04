import React, { useState, useEffect } from "react";
import "./styles.css";

function App () {
    const [] = useState("");
//what do i need as state for my stuff?

const url = 'http://localhost:3000';

    fetch(url)
    .then((res) => res.json())
    .then((res) => console.log('res: ', res));

    return (
        <div className = 'App'>
        </div>
    )
}

export default App;