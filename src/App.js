/*import React, { useState, useEffect, useRef } from 'react';
import Counter from './Counter';
*/

import { useState } from "react";
import { CounterContext } from "./CounterContext";
import Wrapper from './components/Wrapper';
function App() {

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
        <div>
            <h1>My Counter App with Form</h1>
            <CounterContext.Provider value={{ start, setStart }}>
                <Wrapper />
            </CounterContext.Provider>
        </div>
    );
}

export default App;


  