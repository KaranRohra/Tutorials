import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentD from "./ComponentD";

export const Context = React.createContext();

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

function Main() {
    const [counter, dispatchCounter] = React.useReducer(reducer, initialState);

    return (
        <div>
            <h2>useReducer with useContext</h2>
            <h3>{counter}</h3>
            <Context.Provider
                value={{
                    counter: counter,
                    dispatchCounter: dispatchCounter,
                }}
            >
                <ComponentA /> <br />
                <ComponentB /> <br />
                <ComponentD /> <br />
            </Context.Provider>
        </div>
    );
}

export default Main;
