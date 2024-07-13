import {Link, useLocation} from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = () => {
    const location = useLocation();

    const getClassName = (path: string): string => {
        let currentPath: string = location.pathname;
        return path === currentPath ? "active" : "";
    };

    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <Link to="/" className={getClassName("/")}>
                        me
                    </Link>
                </li>
                <li>
                    <Link
                        to="/experience"
                        className={getClassName("/experience")}
                    >
                        experience
                    </Link>
                </li>
                <li>
                    <Link
                        to="/education"
                        className={getClassName("/education")}
                    >
                        education
                    </Link>
                </li>
                {/* <li>
                    <Link to="/projects" className={getClassName("/projects")}>
                        projects
                    </Link>
                </li> */}
                <li>
                    <Link
                        to="/tech-stack"
                        className={getClassName("/tech-stack")}
                    >
                        tech-stack
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={getClassName("/contact")}>
                        contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
