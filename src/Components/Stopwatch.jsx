import React from 'react';
import setTimeFormat from '../utils/helpers';


const Stopwatch = ({
  time,
  start,
  stop,
  reset,
  wait,
}) => (
  <>
    <header className="header">
      <h1 className="stopwatch indicator">
          {setTimeFormat(time)}
      </h1>
    </header>
     <div >
       <button type="button" className="stopwatch-btn stopwatch-btn-gre" onClick={start}>
         Start
       </button>
       <button type="button" className="stopwatch-btn stopwatch-btn-red" onClick={stop}>
         Stop
       </button>
       <button type="button" className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>
         Reset
       </button>
       <button type="button" className="stopwatch-btn stopwatch-btn-coral" onClick={wait}>
         Wait
       </button>
     </div>
  </>
);

export default Stopwatch;