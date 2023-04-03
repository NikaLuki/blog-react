import React from "react";
import PropTypes from "prop-types";

const BlockWrapper = ({ children }) => {
    return (
        <div className="w-full h-full  flex justify-center ">
            <div className="w-4/5 items-center  flex h-full ">{children}</div>
        </div>
    );
};

BlockWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default BlockWrapper;
