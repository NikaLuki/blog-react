import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/NavBar/NavBar";
import PostsLayout from "./layouts/PostsLayout";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-150 flex flex-col ">
                <Switch>
                    <Route path="/" exact />
                    <Route path="/auth" />
                    <Route path="/posts/:id?" component={PostsLayout} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
