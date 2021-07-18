import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BasicDatatypes from "./useState/BasicDatatypes";
import Objects from "./useState/Objects";
import List from "./useState/List";
import Classes from "./useState/Classes";

function App() {
    return (
        <div className="App">
            <h1>React Hooks Tutorial</h1>
            <Router>
                <Switch>
                    {/* useState */}
                    <Route
                        exact
                        path="/use-state/basic-datatypes"
                        component={BasicDatatypes}
                    />

                    <Route
                        exact
                        path="/use-state/objects"
                        component={Objects}
                    />

                    <Route exact path="/use-state/list" component={List} />

                    <Route exact path="/use-state/class" component={Classes} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
