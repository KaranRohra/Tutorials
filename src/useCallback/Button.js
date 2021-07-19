import React from "react";

function Button(props) {
    console.log(`Rendering button - ${props.children}`);

    return (
        <div>
            <button onClick={props.handleClick}>{props.children}</button>
        </div>
    );
}

export default React.memo(Button);
