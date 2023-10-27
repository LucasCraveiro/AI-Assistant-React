import "./InfoBlocks.scss";
import Ready from "../assets/always_ready.png";
import Ask from "../assets/just_ask.png";

const InfoBlocks = () => {
  return (
    <section id="info_blocks" className="lazy-section">
      <div className="card first_card">
        <div className="content_wrapper">
          <p className="top_title">Fast Access</p>
          <h1 className="title">Always ready.</h1>
          <p className="description">
            Need a hand? Instantly access AI Assistant by typing “S” or clicking
            the bolt icon. Wherever you are in the Durable app, AI Assistant is
            right there with you.
          </p>
        </div>
        <img src={Ready} alt="Always Ready image" />
      </div>
      <div className="card second_card">
        <div className="content_wrapper">
          <p className="top_title">Instant Outputs</p>
          <h1 className="title">Just ask.</h1>
          <p className="description">
            Your AI assistant understands conversational language. Ask any
            question or send a request and get the response you need in seconds.
          </p>
        </div>
        <img src={Ask} alt="Just Ask image" />
      </div>
    </section>
  );
};

export default InfoBlocks;
