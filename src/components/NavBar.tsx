import "./NavBar.scss";
import arrowDown from "../assets/arrow.svg";
import bars from "../assets/bars.svg";
import logo from "../assets/Logo.svg";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="logo_links_container">
        <a href="/" className="logo_link">
          <img src={logo} alt="Durable" />
        </a>
        <ul className="links_container">
          <li>
            <a href="/">Products</a>
            <img className="arrow_down" src={arrowDown} alt="Arrow Down" />
          </li>
          <li>
            <a href="/">Resources</a>
            <img className="arrow_down" src={arrowDown} alt="Arrow Down" />
          </li>
          <li>
            <a href="/">Tools</a>
            <img className="arrow_down" src={arrowDown} alt="Arrow Down" />
          </li>
        </ul>
      </div>
      <div className="signin_wrapper">
        <a className="signin_button" href="/">
          Sign In
        </a>
        <img className="bars" src={bars} alt="Bars" />
      </div>
    </nav>
  );
};

export default NavBar;
