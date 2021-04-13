import { Component } from "react";

class Stepper extends Component {
  constructor() {
    super();

    this.state = {
      ctr: 0,
    };
  }

  stepperIncrease = () => {
    this.setState({
      ctr: this.state.ctr + 1,
    });
  };

  stepperDecrease = () => {
    this.setState({
      ctr: this.state.ctr - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.stepperDecrease}> - </button>
        <h1>{this.state.ctr}</h1>
        <button onClick={this.stepperIncrease}> + </button>
      </div>
    );
  }
}

export default Stepper;
