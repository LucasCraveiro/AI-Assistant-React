import "./Hero.scss";
import Options from "../assets/optionsInput.png";
import Bolt from "../assets/bolt.svg";
import { HeroProps } from "../types";

const Hero: React.FC<HeroProps> = (dataHero) => {
  return (
    <section id="hero_section">
      <div className="content_wrapper_hero">
        <h1 className="title">
          {dataHero.title_1} <br />
          {dataHero.title_2}
        </h1>
        <p className="description">
          {dataHero.description_1}
          <br />
          {dataHero.description_2} <br />
          {dataHero.description_3}
        </p>
        <a className="get_started_hero_button" href="/">
          {dataHero.button_txt}
        </a>
      </div>
      <div className="input_wrapper">
        <input type="text" id="input_user" placeholder="Ask me anything" />
        <img src={Bolt} alt="Bolt image" className="icon" />
      </div>
      <div id="image_wrapper" className="image_wrapper">
        <img src={Options} alt="Options image" className="options" />
        <div className="overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
