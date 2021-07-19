import React from "react";
import { Context } from "./ComponentA";

const ComponentC = () => {
    const context = React.useContext(Context);
    const [title, setTitle] = React.useState("");

    function addNote() {
        context.setNotesList([...context.notesList, { title: title }]);
    }

    return (
        <div>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />{" "}
            <br />
            <button onClick={addNote}>Add Note</button> <br />
        </div>
    );
};

export default ComponentC;
