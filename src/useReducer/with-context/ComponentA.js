import React from "react";
import { Context } from "./Main";

function ComponentA() {
    const context = React.useContext(Context);

    return (
        <div>
            Component A: {context.counter} {" "}
            <button onClick={() => context.dispatchCounter("increment")}>
                Increment
            </button>
            <button onClick={() => context.dispatchCounter("decrement")}>
                Decrement
            </button>
            <button onClick={() => context.dispatchCounter("reset")}>
                Reset
            </button>
        </div>
    );
}

export default ComponentA;
