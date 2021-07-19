import React from "react";

function FirstRender() {
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        console.log("I run only on first render");
    }, []);
    // [] indicating does not depend on anything and run only on first render

    return (
        <div>
            <h2>useEffect run only on first render</h2>
            <button onClick={() => setCounter(counter + 1)}>
                Increment {counter}
            </button>
        </div>
    );
}

export default FirstRender;
