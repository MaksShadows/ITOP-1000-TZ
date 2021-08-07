import React, {
  useEffect,
  useState,
  
} from 'react';
import { Observable, Subject } from 'rxjs';
import {
  map,
  buffer,
  debounceTime,
  filter,
  takeUntil,
} from 'rxjs/operators';

import Stopwatch  from './Components/Stopwatch';

const App = () => {
  const [time, setTime] = useState(0);
  const [state, setState] = useState(false, 'stop');


  const click$ =  new Subject();
  const stop$ = new Subject();


  const start = () => {
    setState('start');
  };

  const stop = () => {
    setTime(0);
    setState(false);
  };

  const reset = () => {
    setTime(0);
  };

  const wait = () => {
    click$.next();
    setState(true);
    click$.next();
  };

  useEffect(() => {
    const doubleClick$ = click$.pipe(
      buffer(click$.pipe(debounceTime(300))),
      map((list) => list.length),
      filter((value) => value >= 2),
    );

    const timer$ = Observable.create((observer) => {
      const timer  = setInterval(() => {
        observer.next((prev) => prev + 1);
      }, 1000);

      return () => {
        clearInterval(timer );
      };
    }, []);

    const subscribtion$ = timer$
      .pipe(takeUntil(doubleClick$))
      .pipe(takeUntil(stop$))
      .subscribe({
        next: () => {
          if (state === 'start') {
            setTime((prev) => prev + 1);
          }
        },
      });

    return (() => {
      subscribtion$.unsubscribe();
    });
  }, [state]);

  return (
    <section className="stopwatch">
      <Stopwatch
        time={time}
        start={start}
        stop={stop}
        reset={reset}
        wait={wait}
      />
    </section>
  );
};

export default App;
