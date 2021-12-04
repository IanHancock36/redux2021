import React, { useState } from "react"
import logo from './logo.svg';
import './App.css';
import {configureStore} from "@reduxjs/toolkit"
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
     <h1>The count is: {count}</h1>
     <button onClick={()=> setCount(count +1)}> increment </button>
     <button onClick={()=> setCount(count -1)}> decrement </button>
    </div>
  );
}

export default App;
