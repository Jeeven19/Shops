import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {                              //declaration of constant
    const {
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      counters,  
          
    } = this.props;
    return (
      <div>

        <div> 
            <button                             //refresh button
              className="btn btn-success m-2"
              onClick={onReset}                        
              disabled={counters.length === 0 ? "disabled" : ""}
            > 
              <i className="fa fa-refresh" aria-hidden="true" />
            </button>
            
        </div>
        
        {counters.map(counter => (          //getting the values for main content
          <Counter
            Item={counter.item}
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
        
      </div>
    );
  }
}

export default Counters;
