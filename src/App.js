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
  // countTotalFeedback() {}

  // countPositiveFeedbackPercentage() {}

  render() {
    return (
      <>
        <Statistics stats={this.state} onFeedback={this.onFeedback} />
      </>
    );
  }
}

export default App;
