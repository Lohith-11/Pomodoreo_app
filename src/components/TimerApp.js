import React, { useState, useEffect } from "react";

export default function TimerApp() {
  const [workTime, setWorkTime] = useState("25");
  const [breakTime, setBreakTime] = useState("5");
  const [time, setTime] = useState(0);
  const [Run, setRun] = useState(false);
  const [Work, setWork] = useState(true);

  useEffect(() => {
    let timer;
    if (Run && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0 && Run) {
      clearInterval(timer);
      if (Work) {
        alert("Work time completed");
        setWork(false);
        setTime(breakTime * 60);
      } else {
        alert("Break time completed");
        setRun(false);
      }
    }
    return () => clearInterval(timer);
  }, [Run, time, Work, breakTime]);

  const formatTime = (seconds) => {
    const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
    const ss = String(seconds % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  };

  const Set = () => {
    const totalWorkSec = (workTime) * 60;
    setTime(totalWorkSec);
    setWork(true);
  };

  const start = () => {
    if (!Run) {
      setRun(true);
    }
  };

  const stop = () => {
    if (Run) {
      setRun(false);
    }
  };

  const reset = () => {
    setRun(false);
    setTime(
      Work ? (workTime) * 60 : (breakTime) * 60
    );
  };

  return (
    <div>
        <h1>{formatTime(time)}</h1>
        <h1>{Work ? "Work" : "Break"}-time</h1>
        <button onClick={start} disabled={Run}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button><br />

        <input type="number" value={workTime} onChange={(e) => setWorkTime(e.target.value)} placeholder="Enter work time"/>
        <input type="number" value={breakTime} onChange={(e) => setBreakTime(e.target.value)} placeholder="Enter break time"/>
        <button onClick={Set}>Set</button>
      </div>
  );
}
