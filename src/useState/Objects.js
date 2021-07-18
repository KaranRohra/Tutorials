import React from "react";

function Objects() {
    const [name, setName] = React.useState({ firstName: "", lastName: "" });

    const setFirstName = (e) => setName({ ...name, firstName: e.target.value });
    const setLastName = (e) => setName({ ...name, lastName: e.target.value });

    return (
        <div>
            <h2>Objects in useState</h2>
            <input type="text" onChange={setFirstName} /> <br />
            <input type="text" onChange={setLastName} /> <br />
            {JSON.stringify(name)}
        </div>
    );
}

export default Objects;
