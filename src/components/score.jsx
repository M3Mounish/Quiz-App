import React from 'react';

function Score(props) {
    return (
        <div>
            <div>
                <h3 className='score'> You're score: {props.score}</h3>
            </div>
        </div>
    );
}

export default Score;