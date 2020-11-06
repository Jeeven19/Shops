import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {                                 //item values
    counters: [
      { id: 1, value: 0, item: 'Milk'},
      { id: 2, value: 0, item: 'Butter'},
      { id: 3, value: 0, item: 'Rice'},
      { id: 4, value: 0, item: 'Meat' }
    ]
  };

  handleIncrement = counter => {            //function for increasing the value
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {           //function for decrement the value
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {                     //function for refresh
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {             //function for delete
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}  //for total item count
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onRestart={this.handleRestart}
          />
        </main>
      </div>
    );
  }
}

export default App;
