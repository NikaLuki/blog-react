import React from "react";
import { NavLink } from "react-router-dom";
import NavBarLinkList from "./NavBarLinkList";
import NavBarWrapper from "./NavBarWrapper";

const NavBar = () => {
    return (
        <NavBarWrapper>
            <NavLink to={"/"}>Лого</NavLink>
            <NavBarLinkList>
                <NavLink to={"/"}>Главная</NavLink>
                <NavLink to={"/posts"}>Посты</NavLink>
                <NavLink to={"/"}>О проекте</NavLink>
            </NavBarLinkList>
        </NavBarWrapper>
    );
};

export default NavBar;
