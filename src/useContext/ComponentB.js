import React from "react";
import { Context } from "./ComponentA";
import ComponentC from "./ComponentC";

const ComponentB = () => {
    const context = React.useContext(Context);

    return (
        <div>
            <ComponentC/>
            <ul>
                {context.notesList.map((note, index) => (
                    <li key={index}>{note.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ComponentB;
