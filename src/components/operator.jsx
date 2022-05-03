import React, { useState } from 'react';
import '../styles.css';

function Operator() {

    const [temp, setTemp] = useState(0);
    function handleAdd() {
        setTemp(temp + 1);
    }
    function handleSubtract() {
        setTemp(temp - 1);
    }
    return (
        <div>
            <div className="tempBox">
                <h3 style={{ color: temp > 33 ? "red" : "blue" }}>{temp}°C</h3>
                <button onClick={handleAdd}>+</button>
                <button onClick={handleSubtract}>-</button>

            </div>
        </div >

    )
}

export default Operator;