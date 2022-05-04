import React, { useState } from 'react';
import '../styles.css';



function Option(props) {
    const [isTrue, setIsTrue] = useState(null);

    function handleClick() {
        const answer = props.answer
        props.func(answer);
        setIsTrue(answer);
        setTimeout(function something() {
            setIsTrue(null)
        }, 5000);


    }


    return (
        <div className='main-div'>
            <div className='btn-div'>
                <button className='btn' style={{ backgroundColor: isTrue ? "green" : null }} onClick={handleClick} answer={props.answer}>{props.optionName}</button>
            </div>
        </div >
    )
}

export default Option;