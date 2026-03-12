import React from "react";

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called");
    return true;
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render method called");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }
}

export default Counter;