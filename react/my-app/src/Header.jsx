import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
    
      <h1>My Website</h1>

      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

    </header>
  );
}

export default Header;