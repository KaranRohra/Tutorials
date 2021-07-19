import React from "react";

function FocusInput() {
    const inputRef = React.useRef(null);

    React.useEffect(() => {
        // Focus input element
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
}

export default FocusInput;
