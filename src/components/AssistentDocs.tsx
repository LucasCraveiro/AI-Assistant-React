import "./AssistentDocs.scss";
import AIDocs from "../assets/Assistant_docs.png";
import ArrowRight from "../assets/arrow-right.svg";
import { AssistantDocsProps } from "../types";

const AssitantDocs: React.FC<AssistantDocsProps> = (dataAssistantDocs) => {
  return (
    <section id="assistant_docs" className="lazy-section">
      <div className="content_wrapper">
        <p className="top_title">{dataAssistantDocs.top_title}</p>
        <h1 className="title">{dataAssistantDocs.title}</h1>
        <p className="description">{dataAssistantDocs.description}</p>
        <a className="get_started_btn" href="/">
          {dataAssistantDocs.button_txt}
          <img src={ArrowRight} alt="Arrow Right image" />
        </a>
      </div>
      <img src={AIDocs} alt="Assistant Docs image" className="assistant_img" />
    </section>
  );
};

export default AssitantDocs;
