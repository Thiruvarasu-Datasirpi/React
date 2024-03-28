import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  // Define a state variable called 'count' and a function to update it 'setCount'
  const [count, setCount] = useState(0);

  // Event handler to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Event handler to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
