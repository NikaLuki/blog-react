import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link " to="/articles">
                    Статьи
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/news">
                    Новости
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/shiza">
                    Шиза
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to="/about">
                    О проекте
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
