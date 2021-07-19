import React from "react";

const initialState = 0;

function reducer(currState, action) {
    switch (action) {
        case "increment":
            return currState + 1;
        case "decrement":
            return currState - 1;
        case "reset":
            return initialState;
        default:
            return currState;
    }
}

function BasicDatatypeR() {
    const [counter, dispatchCounter] = React.useReducer(reducer, initialState);

    return (
        <div>
            <h2>useReducer with Basic Datatype</h2>

            <h3>{counter}</h3>
            <button onClick={() => dispatchCounter("increment")}>
                Increment
            </button>
            <button onClick={() => dispatchCounter("decrement")}>
                Decrement
            </button>

            <button onClick={() => dispatchCounter("reset")}>Reset</button>
        </div>
    );
}

export default BasicDatatypeR;
