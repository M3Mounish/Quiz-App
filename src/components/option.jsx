import React, { useState } from 'react';
import '../styles.css';



function Option(props) {

    const [score, setScore] = useState(0);

    function handleClick() {
        // props.answer ? alert("yup") : alert("nope")
        if (props.answer === true) {
            setScore(score + 1);
            props.fun(true, score);
        } else if (props.answer === false) {
            setScore(score);
            props.fun(false, score);
        }
        // console.log(score);
    }


    return (
        <div className='main-div'>
            <div className='btn-div'>
                <button className='btn' onClick={handleClick} answer={props.answer}>{props.optionName}</button>
            </div>
        </div >
    )
}

export default Option;
// style={{ backgroundColor: isTrue ? "green" : null }}