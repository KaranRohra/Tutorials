import React from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 100,
};

function reducer(currState, action) {
    switch (action) {
        case "increment1":
            return { ...currState, firstCounter: currState.firstCounter + 1 };
        case "decrement1":
            return { ...currState, firstCounter: currState.firstCounter - 1 };
        case "increment2":
            return { ...currState, secondCounter: currState.secondCounter + 1 };
        case "decrement2":
            return { ...currState, secondCounter: currState.secondCounter - 1 };
        case "reset":
            return initialState;
        default:
            return currState;
    }
}

function DataObject() {
    const [counter, dispatchCounter] = React.useReducer(reducer, initialState);

    return (
        <div>
            <div>
                <h2>useReducer with data as object</h2>
                {/* Counter 1 */}
                <div>
                    <h3>{counter.firstCounter}</h3>
                    <button onClick={() => dispatchCounter("increment1")}>
                        Increment
                    </button>
                    <button onClick={() => dispatchCounter("decrement1")}>
                        Decrement
                    </button>
                </div>

                {/* counter 2 */}
                <div>
                    <h3>{counter.secondCounter}</h3>
                    <button onClick={() => dispatchCounter("increment2")}>
                        Increment
                    </button>
                    <button onClick={() => dispatchCounter("decrement2")}>
                        Decrement
                    </button>
                </div>

                <button onClick={() => dispatchCounter("reset")}>Reset</button>
            </div>
        </div>
    );
}

export default DataObject;
