import React, { Component } from "react";

function ParentClassLifeCycle() {
    const [display, setDisplay] = React.useState(true);
    return (
        <div>
            <h2>Class LifeCycle</h2>
            <button onClick={()=>setDisplay(!display)}>
                {display ? "Hide" : "Show"} Counter
            </button>
            {display && <ClassLifeCycle/>}
        </div>
    );
}

class ClassLifeCycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };
        console.log("Constructor: I run only when component get mounted first time");
    }

    componentDidMount() {
        console.log("componentDidMount: I run only on first render after constructor");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate: I run when any state or props get updated");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount: I run only when compnent get unmounted from DOM");
    }

    render() {
        return (
            <div>
                <button
                    onClick={() =>
                        this.setState({ counter: this.state.counter + 1 })
                    }
                >
                    Increment {this.state.counter}
                </button>
            </div>
        );
    }
}

export default ParentClassLifeCycle;
