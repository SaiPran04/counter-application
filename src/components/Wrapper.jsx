import React, { useState, useRef, useEffect, useContext } from 'react';
import { CounterContext } from '../CounterContext';
import Form from './Form2';
import Counter from './Counter';

import { Grid, Paper, Box } from '@mui/material';

import CounterLogTable from './CounterLogTable';

function Wrapper() {

  const { count1, setCount2 } = useContext(CounterContext);

  const lastUpdatedVal = useRef(null);
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
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3}>

        {/* LEFT COLUMN: Form + Counters stacked inside a single Paper */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <Paper elevation={1} sx={{ padding: 2 }}>
                  <Form />
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Counter title="Counter 1" which={1} />
              </Grid>

              <Grid item xs={12}>
                <Counter title="Counter 2" which={2} />
              </Grid>

            </Grid>
          </Paper>
        </Grid>

        {/* RIGHT COLUMN: Table */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <CounterLogTable />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Wrapper;