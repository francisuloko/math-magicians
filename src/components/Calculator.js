import React from 'react';
import Button from './Button';
import '../styles/calcStyles.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculateObj: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj, buttonName) {
    this.setState({ calculateObj: calculate(obj, buttonName) });
  }

  render() {
    const { calculateObj } = this.state;
    let output = 0;
    if (Object.keys(calculateObj).length === 0 || (calculateObj.total === null
      && calculateObj.next === null
      && calculateObj.operation === null)) {
      output = 0;
    } else {
      output = calculateObj.next !== null ? calculateObj.next : calculateObj.total;
    }

    return (
      <div className="container">
        <div className="display">
          { output }
        </div>
        <div className="calculator grid-container">
          <Button buttonName="AC" onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="+/-" onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="&#37;" onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="&divide;" buttonClass="orange" onClick={this.handleClick} calcObject={calculateObj} />

          <Button buttonName="7" onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="8" onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="9" onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="x" buttonClass="orange" onClick={this.handleClick} calcObject={calculateObj} />

          <Button buttonName="4" onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="5" onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="6" onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="-" buttonClass="orange" onClick={this.handleClick} calcObject={calculateObj} />

          <Button buttonName="1" onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="2" onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="3" onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="+" buttonClass="orange" onClick={this.handleClick} calcObject={calculateObj} />

          <Button buttonName="0" buttonClass="zero" onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="." onClick={this.handleClick} calcObject={calculateObj} />
          <Button buttonName="=" buttonClass="orange" onClick={this.handleClick} calcObject={calculateObj} />
        </div>
      </div>
    );
  }
}

export default Calculator;
