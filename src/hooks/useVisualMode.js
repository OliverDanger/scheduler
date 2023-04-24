import React, { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, isReplacement = false) {
    let historyBuffer = history;
    (isReplacement && historyBuffer.pop())
    setHistory([...historyBuffer, newMode]);
    setMode(newMode);
  }
  function back() {
    let backstep = history;
    (history.length > 1 && backstep.pop())
    setHistory(backstep);
    const nextMode = history[history.length -1]
    setMode(nextMode)
  }
  return { mode, transition, back };
}