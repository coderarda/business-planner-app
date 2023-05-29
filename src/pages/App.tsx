import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
    return (
        <div className="root-div">
            <div className="navbar">
                <ul className="nav-list">
                    <li>
                        <NavButton path="home" title="Home"></NavButton>
                    </li>
                    <li>
                        <NavButton path="calendar" title="Plan"></NavButton>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
}


interface btnProps {
    title: string;
    path: string;
}

const NavButton = function (props: btnProps) {
    return (
        <div>
            <div className="navbar-button">
                <Link className="nav-link" to={props.path}>{props.title}</Link>
            </div>
        </div>
    );
};

export default App;
