import React, { useState } from 'react';
import Button from '../components/Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  let output = 0;
  const [calculateObj, setCalculateObj] = useState({});

  const handleClick = (obj, buttonName) => {
    setCalculateObj(calculate(obj, buttonName));
  };

  if (Object.keys(calculateObj).length === 0 || (calculateObj.total === null
    && calculateObj.next === null
    && calculateObj.operation === null)) {
    output = 0;
  } else {
    output = calculateObj.next !== null ? calculateObj.next : calculateObj.total;
  }

  return (
    <div className="calc-container">
      <div className="message">
        <h2>Let&apos;s do some maths</h2>
      </div>
      <div className="calculator">
        <div className="display">
          {output}
        </div>
        <div className="calculator grid-container">
          <Button buttonName="AC" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="+/-" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="&#37;" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="&divide;" buttonClass="orange" onClick={handleClick} calcObject={calculateObj} />

          <Button buttonName="7" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="8" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="9" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="x" buttonClass="orange" onClick={handleClick} calcObject={calculateObj} />

          <Button buttonName="4" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="5" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="6" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="-" buttonClass="orange" onClick={handleClick} calcObject={calculateObj} />

          <Button buttonName="1" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="2" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="3" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="+" buttonClass="orange" onClick={handleClick} calcObject={calculateObj} />

          <Button buttonName="0" buttonClass="zero" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="." onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="=" buttonClass="orange" onClick={handleClick} calcObject={calculateObj} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
