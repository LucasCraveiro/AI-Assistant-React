import "./Footer.scss";
import logo from "../assets/Logo.svg";
import instagram from "../assets/icon-Instagram.svg";
import twitter from "../assets/icon-Twitter.svg";
import linkedin from "../assets/icon-LinkedIn.svg";
import flag from "../assets/united_states.svg";

const Footer = () => {
  return (
    <footer id="footer-AI" className="lazy-section">
      <div className="footer_logo_container">
        <a href="/" id="logo_link_footer">
          <img src={logo} alt="Durable" />
        </a>
        <p>
          Durable makes owning a business easier <br className="break_line" />
          than having a job
        </p>
        <div className="language_box">
          <img className="language" src={flag} alt="US English" />
          <select name="language" id="language_select">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Portuguese">Portuguese</option>
          </select>
        </div>
        <p className="established">©2023 Durable, Inc.</p>
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
          <h5>Product</h5>
          <a href="/">Money</a>
          <a href="/">Invoicing</a>
          <a href="/">CRM</a>
          <a href="/">Review automation</a>
          <a href="/">Website builder</a>
        </div>
        <div className="links_box">
          <h5>Company</h5>
          <a href="/">About</a>
          <a href="/">Carrers</a>
          <a href="/">Privacy policy</a>
          <a href="/">Terms of Service</a>
        </div>
      </div>
      <div className="mobile_social_media">
        <p>©2023 Durable, Inc.</p>
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
