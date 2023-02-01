import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostList = ({ children }) => {
    return <div className=" grid grid-cols-2 gap-[30px]">{children}</div>;
};

const PostListItem = ({ item }) => {
    return (
        <Link to={`/posts/${item.id}`}>
            <div className=" bg-white rounded h-auto flex flex-col">
                <div className=" min-h-[240px] text-center h-[240px]">
                    <img
                        className=" rounded-b-none rounded-t w-full h-full object-cover "
                        src={item.url}
                    />
                </div>
                <div className="   px-[30px] pt-[25px] pb-[30px]">
                    {item.id + " " + item.content}
                </div>
            </div>
        </Link>
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
