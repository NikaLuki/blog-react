import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostList = ({ children }) => {
    return <div className="flex flex-wrap   mb-16">{children}</div>;
};

const PostListItem = ({ item }) => {
    return (
        <div className={" w-1/2"}>
            <img className="rounded-lg bg-transparent " src={item.url} />
            <ul className="mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text">
                <li>04 Apr 2022</li>
                <li>Development</li>
            </ul>
            <h3 className="mb-2">
                <Link className="block hover:text-primary">{item.content}</Link>
            </h3>
            <p className="text-text">
                Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin
                urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum
                lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis
                neque blan
            </p>
        </div>
    );
};

PostListItem.propTypes = {
    item: PropTypes.object
};
PostList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

PostList.Item = PostListItem;
export default PostList;
