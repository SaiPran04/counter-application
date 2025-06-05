//uses controlled input thru form
import React, { useState } from 'react';

function Form({ setCount1, setCount2 }) {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed1 = parseInt(input1);
    const parsed2 = parseInt(input2);
    if (!isNaN(parsed1)) {
      setCount1(parsed1); // pass to parent
    }
    if (!isNaN(parsed2)) {
      setCount2(parsed2); // pass to parent
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter starting value for Counter 1:</label><br />
      <input 
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      /><br /><br />

      <label>Enter starting value for Counter 2:</label><br />
      <input 
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      /><br /><br />


      <button type="submit">initialise counters</button>
    </form>
  );
}

export default Form;
