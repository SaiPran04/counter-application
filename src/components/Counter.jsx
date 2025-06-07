/*
import React, { useState, useEffect, useRef } from 'react';

function Counter({count,setCount, label}) {
  return (
    <div style={{ margin: '1rem' }}>
        <h3>{label}</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
*/

import React, { useEffect, useState,useContext } from 'react';
import { CounterContext } from '../CounterContext';
function Counter({ title, which }) {

  const { count1, setCount1, count2, setCount2 } = useContext(CounterContext);
  const count = which === 1 ? count1 : count2;
  const setCount = which === 1 ? setCount1 : setCount2;

  return (
    <div>
      <h3>{title}</h3>
      {count !== null ? (
        <>
          <p>Current Value: {count}</p>
          <button onClick={() => setCount(prev => prev+1)}>Increment</button>
        </>
      ) : (
        <p>Please enter a starting value.</p>
      )}
    </div>
  );
}

export default Counter;
