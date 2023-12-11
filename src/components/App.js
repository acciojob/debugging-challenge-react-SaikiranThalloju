import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0);

  function increase (){
setCount(count+1)
console.log(count)
  }

  return (
    <div className="ball">
      <h1 className="count" onDoubleClick={() => { alert("cant edit it") }}>{count}</h1>
      <button className='increment-button' onClick={increase}>Increment</button>
    </div>
  )
}


export default App;