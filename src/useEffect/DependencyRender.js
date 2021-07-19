import React from "react";

function DependencyRender() {
    const [counter1, setCounter1] = React.useState(0);
    const [counter2, setCounter2] = React.useState(0);

    React.useEffect(() => {
        console.log("I run on first render and when counter1 value get updated");
    }, [counter1]);

    return (
        <div>
            <h2>useEffect run on dependencies </h2>
            <button onClick={() => setCounter1(counter1 + 1)}>
                Increment {counter1}
            </button>
            <button onClick={() => setCounter2(counter2 + 1)}>
                Increment {counter2}
            </button>
        </div>
    );
}

export default DependencyRender;
