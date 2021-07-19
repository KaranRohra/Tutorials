import React from "react";
import ComponentB from "./ComponentB";

export const Context = React.createContext();

const ComponentA = () => {
    const [notesList, setNotesList] = React.useState([]);

    return (
        <div>
            <h2>useContext: Passing data between component without props</h2>
            <Context.Provider
                value={{
                    notesList: notesList,
                    setNotesList: setNotesList,
                }}
            >
                <ComponentB/>
            </Context.Provider>
        </div>
    );
};

export default ComponentA;
