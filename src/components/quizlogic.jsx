import React, { useState } from 'react';
import Header from "./header";
import Qnumber from './questions';
import Score from './score';

function Quiz(props) {

    const [questNo, setQuestNo] = useState(0);
    const [score, setScore] = useState(0);

    function noName(params, scoreC) {
        setQuestNo(questNo + 1)
        console.log(score);
        setScore(scoreC);
        console.log(score);

    }
    // console.log(questNo);

    return (
        <div>

            <Header />

            {questNo === 0 && <button className='startBtn' onClick={() => { setQuestNo(1) }}>Start</button>}

            {questNo === 1 && <Qnumber
                question={"Best consumer-grade graphics card."}
                optionName={["GTX Titan", "GeForce Quadro", "RTX 3090Ti", "RX 900XT"]}
                answer={[false, false, true, false]}
                fun={noName}
            />}

            {questNo === 2 && <Qnumber
                question={"Data rate range of DDR5"}
                optionName={["4800-7200 Mhz", "5000-6000 Mhz", "4800-8800 Mhz", "5000-12000 Mhz"]}
                answer={[true, false, false, false]}
                fun={noName}

            />}

            {questNo === 3 && <Qnumber
                question={"Microarchitecture of Nvidia RTX 3000 series"}
                optionName={["Pascal", "Alder Lake", "Ampere", "Turing"]}
                answer={[false, false, true, false]}
                fun={noName}

            />}

            {questNo > 3 && <Score score={score} />}

            {/* current question */}
            <span className='span'><span>{questNo}</span>/3</span>
            {questNo > 3 && <button onClick={() => { setQuestNo(1) }} className="retake">Retake</button>}
        </div>
    );
}

export default Quiz;