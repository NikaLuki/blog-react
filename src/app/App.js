import React from "react";
import Navbar from "./components/ui/navbar";
import { Route, Switch } from "react-router-dom";
import ArticlesPage from "./components/page/articlesPage";
import NewsPage from "./components/page/newsPage";
import AuthPage from "./components/page/authPage";

function App() {
    return (
        <>
            <div className="container mw-100% " style={{ width: "800px" }}>
                <Navbar />
                <Switch>
                    <Route path="/articles" component={ArticlesPage} />
                    <Route path="/news" component={NewsPage} />
                    <Route path="/shiza" component={AuthPage} />
                </Switch>
            </div>
        </>
    );
}

export default App;
