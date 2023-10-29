import "./CTA.scss";
import { GenerateCTAProps } from "../types";

const GenerateCTA: React.FC<GenerateCTAProps> = (dataCTA) => {
  return (
    <section id="try_durable_CTA" className="lazy-section">
      <h2 className="title">{dataCTA.title}</h2>
      <p className="description">
        {dataCTA.description_1}
        <br className="break_line_CTA" />
        {dataCTA.description_2}
      </p>
      <a className="generate_button" href="/">
        {dataCTA.button_txt}
      </a>
    </section>
  );
};

export default GenerateCTA;
