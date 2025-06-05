//uses uncontrolled input thru form

import React, { useRef } from 'react';

function Form({ setCount1, setCount2 }) {
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed1 = parseInt(input1Ref.current.value);
    const parsed2 = parseInt(input2Ref.current.value);
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
        ref = {input1Ref} />
        <br />

      <label>Enter starting value for Counter 2:</label><br />
      <input 
        type="number"
        ref={ input2Ref}
      /><br />

      <button type="submit">initialise counters</button>
    </form>
  );
}

export default Form;