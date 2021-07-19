import React from "react";
import { Context } from "./Main";

function ComponentC() {
    const context = React.useContext(Context);

    return (
        <div>
            Component C: {context.counter} {" "}
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

export default ComponentC;
