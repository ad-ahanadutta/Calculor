import React from "react";
import { useState } from "react";

const Grid = () => {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    setInput(input.concat(e.target.value));
    console.log(e.target.value.type);
    console.log(input);
  };

  const calculate = () => {
    let rep = {
      "÷": "/",
      "×": "*",
      "−": "-",
    };
    let cal = input.replace(/÷|×|−/gi, function (matched) {
      return rep[matched];
    });
    let res = eval(cal);
    setInput(res);
  };

  return (
    <div className="grid">
      <input type="text" value={input} />
      <div className="calculator-buttons">
        <button onClick={() => setInput("")} className="calc-button is-clear">
          C
        </button>
        <button onClick={handleClick} value="÷" className="calc-button">
          ÷
        </button>

        <button onClick={handleClick} value="7" className="calc-button">
          7
        </button>
        <button onClick={handleClick} value="8" className="calc-button">
          8
        </button>
        <button onClick={handleClick} value="9" className="calc-button">
          9
        </button>
        <button onClick={handleClick} value="×" className="calc-button">
          ×
        </button>

        <button onClick={handleClick} value="4" className="calc-button">
          4
        </button>
        <button onClick={handleClick} value="5" className="calc-button">
          5
        </button>
        <button onClick={handleClick} value="6" className="calc-button">
          6
        </button>
        <button onClick={handleClick} value="−" className="calc-button">
          −
        </button>

        <button onClick={handleClick} value="1" className="calc-button">
          1
        </button>
        <button onClick={handleClick} value="2" className="calc-button">
          2
        </button>
        <button onClick={handleClick} value="3" className="calc-button">
          3
        </button>
        <button onClick={handleClick} value="&#43;" className="calc-button">
          +
        </button>

        <button onClick={handleClick} value="0" className="calc-button is-zero">
          0
        </button>
        <button onClick={calculate} className="calc-button is-equals">
          =
        </button>
      </div>
    </div>
  );
};

export default Grid;
