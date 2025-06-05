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

import React, { useEffect, useState } from 'react';

function Counter({ title, count, setCount }) {
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
