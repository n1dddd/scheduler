import { useState} from "react";

export default function useVisualMode(initial) {
    const [mode, setMode] = useState(initial)
    const [history, setHistory] = useState([initial]);
    //there was redundant state
    //make sure history is up to date, since mode relies on it now

    function transition(newMode, replace = false) {
        if (replace === true) {
            setMode((prev) => newMode);
            let replaceHistory = [...history]
            setHistory((prev) => replaceHistory)
        }
        else {
            setMode((prev) => newMode);
            let newHistory = [...history];
            newHistory.push(newMode);
            setHistory((prev) => newHistory);
        }
        //use prev to clone state, and then add mode with prev spread
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