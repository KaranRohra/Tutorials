import React from "react";

function List() {
    const [notes, setNotes] = React.useState([]);
    const [title, setTitle] = React.useState("");

    const addNote = () => setNotes([...notes, title]);

    return (
        <div>
            <h2>List in useState</h2>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <button onClick={addNote}>Add Note</button>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
        </div>
    );
}

export default List;
