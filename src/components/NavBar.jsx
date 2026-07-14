import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark shadow-sm py-3"
            style={{
                background: "linear-gradient(135deg, #0F172A, #134E4A)",
                borderBottom: "1px solid rgba(255,255,255,0.1)"
            }}
        >
            <div className="container">

                <Link
                    className="navbar-brand fw-bold fs-3"
                    to="/"
                    style={{
                        color: "#FFFFFF",
                        letterSpacing: "2px"
                    }}
                >
                    HACK<span style={{ color: "#5EEAD4" }}>TRACK</span>
                </Link>

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto align-items-lg-center">


                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link fw-semibold px-3 py-2"
                                to="/add-team"
                                style={{
                                    color: "#FFFFFF",
                                    letterSpacing: "1px"
                                }}
                            >
                                ADD TEAM
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link fw-semibold px-3 py-2"
                                to="/view-team"
                                style={{
                                    color: "#FFFFFF",
                                    letterSpacing: "1px"
                                }}
                            >
                                VIEW TEAM
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavBar