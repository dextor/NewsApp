import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({title, topics}) {

  const listItems = topics.map((item, index) => {
    return (
      <li className="nav-item" key={index}>
        <Link to={`/news/${item}`} className="nav-link">{item}</Link>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="#" className="navbar-brand">React Fundamentals: {title}</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          {listItems}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;