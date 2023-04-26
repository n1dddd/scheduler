import { useState} from "react";

export default function useVisualMode(initial) {
    const [mode, setMode] = useState(initial);
    const [history, setHistory] = useState([initial]);

    function transition(newMode, replace = false) {
        if (replace) {
            setMode((prev) => newMode)
            let replaceHistory = [...history]
            replaceHistory[replaceHistory.length - 1] = mode;
            setHistory((prev) => replaceHistory)
        }
        else {
            setMode((prev) => newMode)
            let newHistory = [...history];
            newHistory.push(newMode);
            setHistory((prev) => newHistory);
        }
    }
    function back() {
        let backArray = [...history]
        backArray.pop(mode);
        setHistory((prev) => backArray)
        if (history.length > 1){
        setMode((prev) => backArray[(backArray.length - 1)])
        }
    }
    return { mode, transition, back } 
}