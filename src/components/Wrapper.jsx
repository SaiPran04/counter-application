import React, { useState,useRef,useEffect, useContext } from 'react';
import { CounterContext } from '../CounterContext';
import Form from './Form2';
import Counter from './Counter';

function Wrapper() {

  const { count1, setCount2 } = useContext(CounterContext);

  const lastUpdatedVal =  useRef(null);
  /* dependancies are the variables that are being tracked in useEffect
  variable change ke liye [x] and for every render if we want useEffect to run, 
  theres no dep useEffect (() => {});*/ 
  useEffect(() => {
    if (count1 !== null && lastUpdatedVal.current !== null) {
      if (count1 - lastUpdatedVal.current === 5) {
        setCount2(prev => prev + 10);
        lastUpdatedVal.current = count1;
      }
    } else {
      lastUpdatedVal.current = count1;
    }
  }, [count1]);



  return (
    <div>
      <Form  />
      <Counter title = "Counter 1" which = {1}  />
      <Counter title = "Counter 2" which = {2}  />
    </div>
  );
}

export default Wrapper;