import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BasicDatatypes from "./useState/BasicDatatypes";
import Objects from "./useState/Objects";
import List from "./useState/List";
import Classes from "./useState/Classes";
import ParentClassLifeCycle from "./useEffect/ClassLifeCycle";
import EveryRender from "./useEffect/EveryRender";
import FirstRender from "./useEffect/FirstRender";
import JustBeforeRender from "./useEffect/JustBeforeRender";
import ParentOnUnmount from "./useEffect/OnUnmount";
import DependencyRender from "./useEffect/DependencyRender";
import DataOnFirstRender from "./useEffect/data-fetching/DataOnFirstRender";
import DataOnChange from "./useEffect/data-fetching/DataOnChange";
import DataOnClick from "./useEffect/data-fetching/DataOnClick";
import ComponentA from "./useContext/ComponentA";
import BasicDatatypeR from "./useReducer/BasicDatatypeR";
import ActionObject from "./useReducer/ActionObject";
import DataObject from "./useReducer/DataObject";
import DataWithUseState from "./useReducer/data-fetching/DataWithUseState";
import DataWithUseReducer from "./useReducer/data-fetching/DataWithUseReducer";
import Main from "./useReducer/with-context/Main";

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

                    {/* useEffect */}
                    <Route
                        exact
                        path="/use-effect/lifecycle/class"
                        component={ParentClassLifeCycle}
                    />

                    <Route
                        exact
                        path="/use-effect/every-render"
                        component={EveryRender}
                    />

                    <Route
                        exact
                        path="/use-effect/first-render"
                        component={FirstRender}
                    />

                    <Route
                        exact
                        path="/use-effect/just-before-render"
                        component={JustBeforeRender}
                    />

                    <Route
                        exact
                        path="/use-effect/on-unmount"
                        component={ParentOnUnmount}
                    />

                    <Route
                        exact
                        path="/use-effect/dependency-render"
                        component={DependencyRender}
                    />

                    {/* useEffect DataFetching */}
                    <Route
                        exact
                        path="/use-effect/data-on-first-render"
                        component={DataOnFirstRender}
                    />

                    <Route
                        exact
                        path="/use-effect/data-on-change"
                        component={DataOnChange}
                    />

                    <Route
                        exact
                        path="/use-effect/data-on-click"
                        component={DataOnClick}
                    />

                    {/* useContext */}
                    <Route exact path="/use-context" component={ComponentA} />

                    {/* useReducer */}
                    <Route
                        exact
                        path="/use-reducer/basic-datatypes"
                        component={BasicDatatypeR}
                    />

                    <Route
                        exact
                        path="/use-reducer/action-object"
                        component={ActionObject}
                    />

                    <Route
                        exact
                        path="/use-reducer/data-object"
                        component={DataObject}
                    />
                    {/* useReducer with useContext */}
                    <Route
                        exact
                        path="/use-reducer/with-use-context"
                        component={Main}
                    />

                    {/* useReducer DataFetching */}
                    <Route
                        exact
                        path="/use-reducer/data-with-use-state"
                        component={DataWithUseState}
                    />

                    <Route
                        exact
                        path="/use-reducer/data-with-use-reducer"
                        component={DataWithUseReducer}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
