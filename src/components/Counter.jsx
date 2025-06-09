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

import React, { useEffect, useState, useContext } from 'react';
import { CounterContext } from '../CounterContext';

import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

function Counter({ title, which }) {

  const { count1, setCount1, count2, setCount2, log, setLog } = useContext(CounterContext);
  const count = which === 1 ? count1 : count2;
  const setCount = which === 1 ? setCount1 : setCount2;

  const handleIncrement = () => {
    const newValue = count + 1;
    setCount(newValue);

    if (which === 1) {
      const timestamp = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
      setLog(prev => [...prev, { time: timestamp, count: count1 }]);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <Card sx={{ marginBottom: 3 }}  elevation={4}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        {count !== null ? (
          <>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
              {count}
            </Typography>
          </>
        ) : (
          <Typography variant="body2" color="text.secondary">
            Please enter a starting value.
          </Typography>
        )}
      </CardContent>

      {count !== null && (
        <CardActions>
          <Button variant="contained" onClick={handleIncrement}>
            Increment
          </Button>
          <Button variant="outlined" color="error" onClick={handleReset}>
            Reset
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

export default Counter;
