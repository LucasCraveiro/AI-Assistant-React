import "./InfoBlocks.scss";
import Ready from "../assets/always_ready.png";
import Ask from "../assets/just_ask.png";
import { InfoBlocksProps } from "../types";

const InfoBlocks: React.FC<InfoBlocksProps> = (dataInfoBlocks) => {
  return (
    <section id="info_blocks" className="lazy-section">
      <div className="card first_card">
        <div className="content_wrapper">
          <p className="top_title">{dataInfoBlocks.top_title_1}</p>
          <h1 className="title">{dataInfoBlocks.title_1}</h1>
          <p className="description">{dataInfoBlocks.description_1}</p>
        </div>
        <img src={Ready} alt="Always Ready image" />
      </div>
      <div className="card second_card">
        <div className="content_wrapper">
          <p className="top_title">{dataInfoBlocks.top_title_2}</p>
          <h1 className="title">{dataInfoBlocks.title_2}</h1>
          <p className="description">{dataInfoBlocks.description_2}</p>
        </div>
        <img src={Ask} alt="Just Ask image" />
      </div>
    </section>
  );
};

export default InfoBlocks;
