import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
              {location.pathname == "/" ? (
                <a className="nav-link active" href="/">
                  General
                </a>
              ) : (
                <a className="nav-link" href="/">
                  General
                </a>
              )}
            </li>
            <li className="nav-item">
              {location.pathname == "/entertainment" ? (
                <a className="nav-link active" href="/entertainment">
                  Entertainment
                </a>
              ) : (
                <a className="nav-link" href="/entertainment">
                  Entertainment
                </a>
              )}
            </li>
            <li className="nav-item">
              {location.pathname == "/business" ? (
                <a className="nav-link active" href="/business">
                  Business
                </a>
              ) : (
                <a className="nav-link" href="/business">
                  Business
                </a>
              )}
            </li>
            <li className="nav-item">
              {location.pathname == "/health" ? (
                <a className="nav-link active" href="/health">
                  Health
                </a>
              ) : (
                <a className="nav-link" href="/health">
                  Health
                </a>
              )}
            </li>
            <li className="nav-item">
              {location.pathname == "/science" ? (
                <a className="nav-link active" href="/science">
                  Science
                </a>
              ) : (
                <a className="nav-link" href="/science">
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
