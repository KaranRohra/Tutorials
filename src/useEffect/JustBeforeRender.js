import React from "react";

function JustBeforeRender() {
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        console.log(`CurrCounte:${counter}`);

        // Retured function got executed just before every render except first render
        return () => {
            console.log(
                `I run just before render, PROOF: PrevCount=${counter}`
            );
        };
    });

    return (
        <div>
            <h2>useEffect run just before render</h2>
            <button onClick={() => setCounter(counter + 1)}>
                Increment {counter}
            </button>
        </div>
    );
}

export default JustBeforeRender;
