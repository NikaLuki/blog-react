import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post, className }) => {
    return (
        <div className={className}>
            <img
                className="rounded-lg bg-transparent max-w-[100%] h-auto"
                src="https://phonoteka.org/uploads/posts/2022-09/1663262481_43-phonoteka-org-p-van-pis-art-instagram-54.jpg"
            />
            <ul className="mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text">
                <li>04 Apr 2022</li>
                <li>Development</li>
            </ul>
            <h3 className="mb-2">
                <Link className="block hover:text-primary">Test name</Link>
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

Post.propTypes = {
    post: PropTypes.object,
    className: PropTypes.string
};

export default Post;
