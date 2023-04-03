import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const NavBarWrapper = ({ children }) => {
    const [scroll, setScroll] = useState(0);
    const handleScrol = () => {
        setScroll(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScrol);
    }, []);
    return (
        <div
            className={
                "fixed w-full bg-transparent top-0 left-0 z-50  box-border justify-center flex"
            }
        >
            <div
                className={`${
                    scroll < 15 ? "w-0" : "w-full"
                } h-full bg-stone-50 absolute top-0 right-0  -z-[1] transition-[width] ease-linear duration-300 `}
            ></div>

            <div
                className={`${
                    scroll < 15 ? "text-stone-50" : ""
                } flex items-center py-4 w-4/5 h-[80px]  box-border transition-[color] ease-linear duration-300 `}
            >
                {children}
            </div>
        </div>
    );
};

NavBarWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default NavBarWrapper;
