import { useState } from "react";


//Used in Appointment/index.js to change display mode for each appointment
export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // transitions to new visual mode and adds it to history state
  function transition(newMode, isReplacement = false) {
    let historyBuffer = history;
    (isReplacement && historyBuffer.pop())
    setHistory([...historyBuffer, newMode]);
    setMode(newMode);
  }

  // transitions to previous mode and removes current mode from history
  function back() {
    let backstep = history;
    (history.length > 1 && backstep.pop())
    setHistory(backstep);
    const nextMode = history[history.length -1]
    setMode(nextMode)
  }


  return { mode, transition, back };
}