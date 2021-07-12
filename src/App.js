import React, { Component } from "react";
import Statistics from "./components/Statistics";
// import logo from "./logo.svg";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onFeedback = (mark) => {
    this.setState((prevState) => ({ [mark]: prevState[mark] + 1 }));
    console.log(this.state);
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage() {
    console.log(this.state.good);
    console.log(this.countTotalFeedback());
    return (this.state.good / this.countTotalFeedback()) * 100;
  }

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    console.log(percentage);
    return (
      <>
        <Statistics
          stats={this.state}
          onFeedback={this.onFeedback}
          total={total}
          percentage={percentage}
        />
      </>
    );
  }
}

export default App;
