import './App.css';
import React from 'react'
import { useState, useEffect } from 'react';
import CounterComponenet from './CounterComponent';

function App() {
  let [counter, setCounter] = useState(0)
  //function to incremnt
  function increment() {
    if (counter >= 0) {
      setCounter(counter = counter + 1)
    }

  }
  //function to decrement
  function decrement() {
    if (counter > 10 || counter > 0) {
      setCounter(counter = counter - 1)
    }
  }
  //function to set count to zero
  function zero() {
    setCounter(counter = 0)
  }

  //logging the value using usingEffect everytime the count changes.
  useEffect(() => console.log(`The counter value is ${counter}`), [counter])
  return (
    <div className="App">
      <CounterComponenet counter={counter} increment={increment} decrement={decrement} zero={zero} />
    </div>
  );

}

export default App;
