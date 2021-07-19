import React from "react";

function ParentOnUnmount() {
    const [display, setDisplay] = React.useState(true);
    return (
        <div>
            <h2>useEffect run when component get unmounted</h2>
            <button onClick={() => setDisplay(!display)}>
                {display ? "Hide" : "Show"} Counter
            </button>
            {display && <OnUnmount />}
        </div>
    );
}

function OnUnmount() {
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        return () => {
            console.log("I only run when component get unmounted from DOM");
        };
    }, []);
    // [] does not depend on anything and
    // run retured function only when component is get deleted from DOM

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>
                Increment {counter}
            </button>
        </div>
    );
}

export default ParentOnUnmount;
