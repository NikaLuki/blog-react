import React from "react";
import { NavLink } from "react-router-dom";
import NavBarLinkList from "./NavBarLinkList";
import NavBarWrapper from "./NavBarWrapper";

const NavBar = () => {
    return (
        <NavBarWrapper>
            <NavLink className={"font-bold text-2xl"} to={"/"}>
                LNS
            </NavLink>
            <NavBarLinkList>
                <NavLink to={"/"}>Главная</NavLink>
                <NavLink to={"/posts"}>Блог</NavLink>
                <NavLink to={"/"}>About</NavLink>
                <NavLink to={"/contact"}>Контакты</NavLink>
            </NavBarLinkList>
        </NavBarWrapper>
    );
};

export default NavBar;
