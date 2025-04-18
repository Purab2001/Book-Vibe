import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar work-sans py-10">
            <div className="navbar-start">
                <a className="text-2xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-md mx-4 btn btn-outline btn-success" : "text-md mx-4"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-md mx-4 btn btn-outline btn-success" : "text-md mx-4"
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/read-list"
                    className={({ isActive }) =>
                        isActive ? "text-md px-4 btn btn-outline btn-success" : "text-md mx-4"
                    }
                >
                    Listed Books
                </NavLink>
                <NavLink
                    to="/pages-to-read"
                    className={({ isActive }) =>
                        isActive ? "text-md px-4 btn btn-outline btn-success" : "text-md mx-4"
                    }
                >
                    Pages to Read
                </NavLink>
            </div>
            <div className="navbar-end">
                <a className="btn btn-success mr-4 text-white shadow-none">Sign In</a>
                <a className="btn btn-accent text-white shadow-none">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;