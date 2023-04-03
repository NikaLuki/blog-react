import React from "react";
import PropTypes from "prop-types";
const NavBarLinkList = ({ children }) => {
    return (
        <div className=" items-center ml-auto">
            <nav className="text-lg leading-6 font-semibold ">
                <ul className="flex  items-center space-x-4">{children}</ul>
            </nav>
        </div>
    );
};

NavBarLinkList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default NavBarLinkList;
