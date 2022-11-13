import React, { useEffect, useState } from "react";
import './calculator.css'
const Calc = () => {
  const [result, setResult] = useState("");
  const [displayres, setDisplayres] = useState(0);

  useEffect(() => {
    var id;
    id = setTimeout(() => {
      if (result.length > 0 && result[result.length - 1].match(/[0-9]/g)) {
        let res;
        res = eval(result);
        setDisplayres(result);
        setResult(res);
      }
    }, 2000);
    console.log("ID", id);
    return () => clearTimeout(id);
  }, [result]);

  const handleClick = (e) => {
    setResult(result + "" + e.target.name);
    if (e.target.name === "AC") {
      setDisplayres(0);
      setResult("");
    }
  };
  const calculator_buttons = [
    "(",
    ")",
    "%",
    "AC",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "3",
    "2",
    "1",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="calculator">
      <div className="result-div">
        <div className="display-res">{displayres}</div>
        <div className="res">{result}</div>
      </div>
      <div className="btn-div">
        {calculator_buttons.map((e, i) => {
          return (
            <button key={i} name={e} onClick={handleClick}>
              {e}
            </button>
          );
        })}
        
      </div>
    </div>
  );
};

export default Calc;

