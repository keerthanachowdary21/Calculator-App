import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); // Calculate result (use with caution in production)
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ['C', '/', '*', '-'],
    ['7', '8', '9', '+'],
    ['4', '5', '6', '.'],
    ['1', '2', '3', '='],
    ['0'],
  ];

  return (
    <div className="app-container">
      <div className="display-container">
        <div className="input-text">{input}</div>
        <div className="result-text">{result}</div>
      </div>
      <div className="button-container">
        {buttons.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((buttonValue) => (
              <button
                className={`button ${buttonValue === '=' ? 'equals-button' : ''}`}
                key={buttonValue}
                onClick={() => handlePress(buttonValue)}
              >
                {buttonValue}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="footer">Calc by Keerthana</div>
    </div>
  );
};

export default App;
