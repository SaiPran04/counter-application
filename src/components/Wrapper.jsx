import React, { useState,useRef,useEffect } from 'react';
import Form from './Form2';
import Counter from './Counter';

function Wrapper() {

  const [count1, setCount1] = useState(null);
  const [count2, setCount2] = useState(null);

  const lastUpdatedVal =  useRef(10);
  /* dependancies are the variables that are being tracked in useEffect
  variable change ke liye [x] and for every render if we want useEffect to run, 
  theres no dep useEffect (() => {});*/ 
  useEffect (()=>{
    console.log("Wrapper component mounted ");
    return () => {
      console.log("Wrapper component unmounted");
    };
  });

  useEffect(()=>{
      if((count1-lastUpdatedVal.current) == 5){
          setCount2(prev => prev+10);
          lastUpdatedVal.current = count1;
      }
  } , [count1] )

  return (
    <div>
      <Form setCount1={setCount1} setCount2={setCount2} />
      <Counter title = "Counter 1" count = {count1} setCount = {setCount1}  />
      <Counter title = "Counter 2" count = {count2} setCount = {setCount2}  />
    </div>
  );
}

export default Wrapper;