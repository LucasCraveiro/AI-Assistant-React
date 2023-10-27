import "./AssistentDocs.scss";
import AIDocs from "../assets/Assistant_docs.png";
import ArrowRight from "../assets/arrow-right.svg";

const AssitantDocs = () => {
  return (
    <section id="assistant_docs" className="lazy-section">
      <div className="content_wrapper">
        <p className="top_title">Organized Documents</p>
        <h1 className="title">Save anything for later</h1>
        <p className="description">
          Never lose track of the business conversations that matter. Save,
          organize, and access saved outputs in your Assistant Documents.
        </p>
        <a className="get_started_btn" href="/">
          Get Started
          <img src={ArrowRight} alt="Arrow Right image" />
        </a>
      </div>
      <img src={AIDocs} alt="Assistant Docs image" className="assistant_img" />
    </section>
  );
};

export default AssitantDocs;
