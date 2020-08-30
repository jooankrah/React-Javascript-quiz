import React, { Component } from 'react';




// Counter Component
class Counter extends Component {

  handleChange =  event => {
    const  {name,value} = event.target
      this.setState({
       [name]: value,
       value
      });
    }

  render() {
    const { value ,onDecrement,onIncrement} = this.props;
    return (
      <div className="counter">
        <b style={{paddingRight:10}}>{value}</b>
        <input name="inputVal" size={5} onChange = {this.handlechange} ></input>
        <div className="counter-controls">
          <button className="button is-danger is-small" onClick={onDecrement}>-</button>
          <button className="button is-success is-small" onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state= {
      data : [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
    total:0
  }
}

onDecrement = (number,id)=>{
  this.setState(state => {
    const data = state.data.map(data => data.id === id ? {id: data.id, value: data.value - Number(number)} : data);
    const total = state.total - number
    return {
      data,
      total
    };
  });
}

onIncrement = (number,id) =>{
  this.setState(state => {
    const data = state.data.map(data => data.id === id ? {id: data.id, value: data.value + Number(number)} : data);
    const total = state.total + number
    return {
      data,
      total
    };
  });
 }

  render() {
    return (
      <>
      <div>
        {this.state.data.map((counter) => (
          <Counter key={counter.id} value={counter.value} onDecrement={()=>this.onDecrement(4,counter.id)} onIncrement = {()=>this.onIncrement(4,counter.id)}/>
        ))}
      </div>
      <div>
        <Counter value={0} onDecrement={()=>this.onDecrement(4)} onIncrement = {()=>this.onIncrement(4)}/>
      </div>

      <div style={{fontSize:50}}>
        <b>Total: {this.state.total}</b>
      </div>
      </>
    );
  }
}

export default App;
