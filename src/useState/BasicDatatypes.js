import React from "react";

function BasicDatatypes() {
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <h2>Basic Datatypes</h2>
            <button onClick={() => setCounter(counter + 1)}>
                Increment {counter}
            </button>
        </div>
    );
}

export default BasicDatatypes;
