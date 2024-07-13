import "../styles/contact.css";

export const Contact = () => {
    return (
        <div className="social-icons">
            <a
                href="https://www.linkedin.com/in/jigyansunanda"
                target="_blank"
                title="LinkedIn"
            >
                <i className="fab fa-linkedin"></i>
            </a>
            <a
                href="https://github.com/jigyansunanda"
                target="_blank"
                title="GitHub"
            >
                <i className="fab fa-github"></i>
            </a>
            <a href="mailto:nandajigyansu@gmail.com" title="Email">
                <i className="fas fa-envelope"></i>
            </a>
        </div>
    );
};
