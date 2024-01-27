import { Link } from "react-router-dom";
import inecLogo from "../static/logo.webp";
const Header = () => {
  return (
    <header className="navbar">
      <span className="w-80">
        <img src={inecLogo} alt="logo" className="logo" />
      </span>
      <span className="space-x-4 w-15 ">
        <Link id="home" className="" to="/">
          Home
        </Link>
        <Link id="help" className="" to="/section">
          Help
        </Link>
      </span>
    </header>
  );
};

export default Header;
