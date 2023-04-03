import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Route, Switch, useRouteMatch } from "react-router-dom";
import PostListPage from "../components/page/posts/PostListPage";
import PostPage from "../components/page/posts/PostPage";
import ScreenWidthWrapper from "../components/ui/ScreenWidthWrapper";
import { loadPostsList } from "../store/post";

const PostsLayout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPostsList());
    }, []);
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
