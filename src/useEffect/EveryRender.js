import React from "react";

function EveryRender() {
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        console.log("I run on every render");
    });

    return (
        <div>
            <h2>useEffect running on every render</h2>
            <button onClick={() => setCounter(counter + 1)}>
                Increment {counter}
            </button>
        </div>
    );
}

export default EveryRender;
