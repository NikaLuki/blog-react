import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PostListPage from "../components/page/posts/PostListPage";
import PostPage from "../components/page/posts/PostPage";
import ScreenWidthWrapper from "../components/ui/ScreenWidthWrapper";

const PostsLayout = () => {
    const { path } = useRouteMatch();
    return (
        <ScreenWidthWrapper>
            <Switch>
                <Route path={path + "/:postId"} component={PostPage} />
                <Route exact path={path} component={PostListPage} />
            </Switch>
        </ScreenWidthWrapper>
    );
};

export default PostsLayout;
