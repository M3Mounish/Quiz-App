import React, { useState } from 'react';
import Option from "./option";
import Question from "./title-question";
// import Result from "./result";

function Qnumber(props) {

    // middle-man for passing values form callback.
    function noName(params, score) {
        props.fun(params, score);


    }
    return (
        <div>

            <div className="quiz-box">
                <Question question={props.question} />
                <Option
                    optionName={props.optionName[0]}
                    answer={props.answer[0]}
                    fun={noName}
                />
                <Option optionName={props.optionName[1]} answer={props.answer[1]} fun={noName} />
                <Option optionName={props.optionName[2]} answer={props.answer[2]} fun={noName} />
                <Option optionName={props.optionName[3]} answer={props.answer[3]} fun={noName} />

            </div>
        </div>
    );
}

export default Qnumber;