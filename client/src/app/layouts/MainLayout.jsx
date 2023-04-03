import React from "react";

import { Route, Switch } from "react-router-dom";
import HomePage from "../components/page/posts/HomePage";
import NavBar from "../components/ui/NavBar/NavBar";

import LoginLayout from "./LoginLayout";
import PostsLayout from "./PostsLayout";

const MainLayout = () => {
    return (
        <div className="min-h-screen w-full  pt-[80px] flex flex-col overflow-hidden ">
            <NavBar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/posts/:id?" component={PostsLayout} />
                <Route path="/admin" component={LoginLayout} />
            </Switch>
        </div>
    );
};

export default MainLayout;
