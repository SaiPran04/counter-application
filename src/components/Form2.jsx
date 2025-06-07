//uses uncontrolled input thru form

import React, { useContext, useRef } from 'react';
import { CounterContext } from '../CounterContext';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();


  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  const { setCount1, setCount2 } = useContext(CounterContext);


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
    navigate('/counter'); // navigate to counters page
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter starting value for Counter 1:</label><br />
      <input
        type="number"
        ref={input1Ref} />
      <br />

      <label>Enter starting value for Counter 2:</label><br />
      <input
        type="number"
        ref={input2Ref}
      /><br />

      <button type="submit">initialise counters</button>
      
    </form>
  );
}

export default Form;