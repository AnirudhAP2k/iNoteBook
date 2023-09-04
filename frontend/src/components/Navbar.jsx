import React, { useContext } from "react";
import { Link, useLocation} from "react-router-dom";
import noteContext from '../context/NoteContext';

function Navbar() {
  const context = useContext(noteContext)
  const { showAlert } = context;

  let location = useLocation();

  const handleLogout =() => {
    localStorage.removeItem("auth-token");
   showAlert("LogOut Successful", "success");
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNoteBook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem('auth-token') ? 
            <form className="d-flex">
              <Link className={`btn btn-dark mx-1 ${location.pathname === '/login' ? "active" : ""}`} to="/login" role="button">Login</Link>
              <Link className={`btn btn-dark mx-1 ${location.pathname === '/signup' ? "active" : ""}`} to="/signup" role="button">SignUp</Link>
            </form>
             :  <form className="d-flex">
              <Link className={`btn btn-dark mx-1`} onClick={handleLogout} to="/login" role="button">Log Out</Link> </form> }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
