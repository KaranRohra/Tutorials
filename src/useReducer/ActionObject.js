import React from "react";

const initialState = 0;

function reducer(currState, action) {
    switch (action.type) {
        case "increment":
            return currState + action.value;
        case "decrement":
            return currState - action.value;
        case "reset":
            return initialState;
        default:
            return currState;
    }
}

function ActionObject() {
    const [counter, dispatchCounter] = React.useReducer(reducer, initialState);

    return (
        <div>
            <h2>useReducer with action parameter as object</h2>
            <h3>{counter}</h3>
            <button
                onClick={() =>
                    // since we are passing object in dispatchCounter function now action type is object
                    dispatchCounter({
                        type: "increment",
                        value: 1,
                    })
                }
            >
                Increment
            </button>
            <button
                onClick={() =>
                    dispatchCounter({
                        type: "decrement",
                        value: 1,
                    })
                }
            >
                Decrement
            </button>
            <button
                onClick={() =>
                    dispatchCounter({
                        type: "increment",
                        value: 5,
                    })
                }
            >
                Increment 5
            </button>
            <button
                onClick={() =>
                    dispatchCounter({
                        type: "decrement",
                        value: 5,
                    })
                }
            >
                Decrement 5
            </button>
            <button onClick={() => dispatchCounter({ type: "reset" })}>
                Reset
            </button>
        </div>
    );
}

export default ActionObject;
