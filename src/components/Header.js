import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/news-app/general">
          News App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {location.pathname == "/news-app/general" ? (
                <a className="nav-link active" href="/news-app/general">
                  General
                </a>
              ) : (
                <a className="nav-link" href="/news-app/general">
                  General
                </a>
              )}
            </li>
            <li className="nav-item">
              {location.pathname == "/news-app/entertainment" ? (
                <a className="nav-link active" href="/news-app/entertainment">
                  Entertainment
                </a>
              ) : (
                <a className="nav-link" href="/news-app/entertainment">
                  Entertainment
                </a>
              )}
            </li>
            <li className="nav-item">
              {location.pathname == "/news-app/business" ? (
                <a className="nav-link active" href="/news-app/business">
                  Business
                </a>
              ) : (
                <a className="nav-link" href="/news-app/business">
                  Business
                </a>
              )}
            </li>
            <li className="nav-item">
              {location.pathname == "/news-app/health" ? (
                <a className="nav-link active" href="/news-app/health">
                  Health
                </a>
              ) : (
                <a className="nav-link" href="/news-app/health">
                  Health
                </a>
              )}
            </li>
            <li className="nav-item">
              {location.pathname == "/news-app/science" ? (
                <a className="nav-link active" href="/news-app/science">
                  Science
                </a>
              ) : (
                <a className="nav-link" href="/news-app/science">
                  Science
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
