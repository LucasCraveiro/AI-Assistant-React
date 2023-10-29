import "./Footer.scss";
import logo from "../assets/Logo.svg";
import instagram from "../assets/icon-Instagram.svg";
import twitter from "../assets/icon-Twitter.svg";
import linkedin from "../assets/icon-LinkedIn.svg";
import flag from "../assets/united_states.svg";
import { FooterProps } from "../types";

const Footer: React.FC<FooterProps> = (dataFooter) => {
  return (
    <footer id="footer-AI" className="lazy-section">
      <div className="footer_logo_container">
        <a href="/" id="logo_link_footer">
          <img src={logo} alt="Durable" />
        </a>
        <p>
          {dataFooter.headline_1} <br className="break_line" />
          {dataFooter.headline_2}
        </p>
        <div className="language_box">
          <img className="language" src={flag} alt="US English" />
          <select name="language" id="language_select">
            {dataFooter.languages.map((language) => (
              <option value={language}>{language}</option>
            ))}
          </select>
        </div>
        <p className="established">{dataFooter.established}</p>
        <div id="social_media_container">
          <a href="/">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="/">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="/">
            <img src={linkedin} alt="Linkedin" />
          </a>
        </div>
      </div>
      <div className="footer_links">
        <div className="links_box">
          <h5>{dataFooter.product_menu_title}</h5>
          {dataFooter.product_menu.map((product_link) => (
            <a href="/">{product_link}</a>
          ))}
        </div>
        <div className="links_box">
          <h5>{dataFooter.company_menu_title}</h5>
          {dataFooter.company_menu.map((company_link) => (
            <a href="/">{company_link}</a>
          ))}
        </div>
      </div>
      <div className="mobile_social_media">
        <p>{dataFooter.established}</p>
        <div className="social_media_icons">
          <a href="/">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="/">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="/">
            <img src={linkedin} alt="Linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
