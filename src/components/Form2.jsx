//uses uncontrolled input thru form

import React, { useContext, useRef } from 'react';
import { CounterContext } from '../CounterContext';
import { useNavigate } from 'react-router-dom';

import { Typography, TextField, Button } from '@mui/material';
import { Paper } from '@mui/material';

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
    <Paper elevation={3} sx={{ padding: 2 }}>{
        <form onSubmit={handleSubmit}>
          <Typography variant="subtitle1">Enter Counter 1 Start Value:</Typography>
          <TextField type="number" inputRef={input1Ref} fullWidth />

          <Typography variant="subtitle1">Enter Counter 2 Start Value:</Typography>
          <TextField type="number" inputRef={input2Ref} fullWidth />

          <Button variant="contained" type="submit">Initialize</Button>

        </form>
    }
    </Paper>
  );

}

export default Form;