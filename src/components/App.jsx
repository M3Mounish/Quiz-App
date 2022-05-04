import React, { useState } from "react";
import Option from "./option";
import Header from "./header";
import Question from "./question";
import Result from "./result";

function App() {

  const [condition, setCondition] = useState(false);

  function handleAnswer(val) {
    console.log(val);
    setCondition(val);
    setTimeout(function something() {
      setCondition(null)
    }, 5500);
  }
  return (
    <div>
      <Header />
      <div className="quiz-box">
        <Question />
        <Option
          optionName="GTX Titan"
          answer={false}
          func={handleAnswer}
        />
        <Option optionName="GeForce 4000" answer={false} func={handleAnswer} />
        <Option optionName="RTX 3090Ti" answer={true} func={handleAnswer} />
        <Option optionName="RX 900XT" answer={false} func={handleAnswer} />
        <Result result={condition} />
      </div>
    </div>
  )
}


export default App;
