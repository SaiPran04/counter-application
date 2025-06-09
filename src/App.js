/*import React, { useState, useEffect, useRef } from 'react';
import Counter from './Counter';
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './components/Form2';
import CounterPage from './components/CounterPage';

import { Button} from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';


import { useState } from "react";
import { CounterContext } from "./CounterContext";
import Wrapper from './components/Wrapper';
function App() {
    const [count1, setCount1] = useState(null);
    const [count2, setCount2] = useState(null);
    // const count1Tracker = () => {
    //   const newIncrement = count1Increments + 1;
    //   const newCount1 = count1 +1;

    //   setCount1(newCount1);
    //   setcount1Increments(newIncrement);

    //   if(newIncrement % 5 ==0){
    //     setCount2(prev => prev +10);
    //   }

    // }

    return (
            <BrowserRouter>
            {/* <div style={{ padding: 20 }}>
                <Button variant="contained" color="primary">
                    Test Material UI
                </Button>
            </div> */}

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="200px"
                bgcolor="primary.main"
                color="white"
            >
                <Typography variant="h4"
                    sx={{
                        fontFamily: 'Georgia, serif',
                        fontWeight: '',
                        letterSpacing: 1,
                        color: 'white',
                        textTransform: 'uppercase',
                    }} >

                    My Counter Application with MUI + React
                </Typography>
            </Box>


            <CounterContext.Provider value={{ count1, setCount1, count2, setCount2 }}>
                <Routes>
                    <Route path="/" element={<Wrapper />} />
                    <Route path="/counter" element={<CounterPage />} />
                </Routes>
            </CounterContext.Provider>
            </BrowserRouter>
    );
}

export default App;


