import "./Hero.scss";
import Options from "../assets/optionsInput.png";
import Bolt from "../assets/bolt.svg";

const Hero = () => {
  return (
    <section id="hero_section">
      <div className="content_wrapper_hero">
        <h1 className="title">
          Your always-ready <br />
          AI assistant.
        </h1>
        <p className="description">
          Introducing the conversational AI trained to grow your business.
          <br />
          Generate ideas, answer questions, complete tasks. <br />
          Just ask.
        </p>
        <a className="get_started_hero_button" href="/">
          Get started
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
