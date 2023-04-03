import React, { useState, useEffect } from "react";

export default function useVisualMode(initial) {
    const [mode, setMode] = useState(initial)
    const [history, setHistory] = useState([initial]);

    function transition(newMode, replace = false) {
        if (replace === true) {
            setMode(newMode);
        }
        else {
        setMode(newMode);
        history.push(newMode);
        }
    }
    function back() {
        const backArray = [...history]
        if (backArray.length === 0) {
            setHistory(backArray);
            return setMode(backArray[0])
        }
        else if (backArray.length > 1){
        backArray.pop();
        setMode(backArray[backArray.length - 1]);
        setHistory(backArray);
        }
    }

    return { mode, transition, back }
}