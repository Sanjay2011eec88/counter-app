import React, { Component} from "react";
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";
import Count from "./components/Count";

class App extends Component{
  state = {
    count: 0
  };

  //We can use this
  constructor(props) {
    super(props);
    this.handlePlus = this.handlePlus.bind(this);
  }


  handlePlus(){
    console.log("Plus", this);
    //We need to call the set state to change any state property
    this.setState({
      count: this.state.count + 1
    })
    // this.state.count += 1
  }

  //Or this
  handleMinus = () => {
    console.log("Minus");
    // this.state.count -= 1
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
        <div>
          <Header title="Counting app" />
          <Count count={this.state.count} />
          <button onClick={this.handlePlus}>
            Add
          </button>
          <button onClick={this.handleMinus}>
            Minus
          </button>
          <HelloWorld />
        </div>
    )
  }
}

export default App;