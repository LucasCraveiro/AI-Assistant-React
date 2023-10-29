import "./NavBar.scss";
import arrowDown from "../assets/arrow.svg";
import bars from "../assets/bars.svg";
import logo from "../assets/Logo.svg";
import { NavBarProps } from "../types";

const NavBar: React.FC<NavBarProps> = (dataNavBar) => {
  return (
    <nav className="navBar">
      <div className="logo_links_container">
        <a href="/" className="logo_link">
          <img src={logo} alt="Durable" />
        </a>
        <ul className="links_container">
          {dataNavBar.links.map((link) => (
            <li>
              <a href="/">{link}</a>
              <img className="arrow_down" src={arrowDown} alt="Arrow Down" />
            </li>
          ))}
        </ul>
      </div>
      <div className="signin_wrapper">
        <a className="signin_button" href="/">
          {dataNavBar.sign_in}
        </a>
        <img className="bars" src={bars} alt="Bars" />
      </div>
    </nav>
  );
};

export default NavBar;
