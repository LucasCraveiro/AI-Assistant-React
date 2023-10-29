import "./App.scss";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import InfoBlocks from "./components/InfoBlocks";
import AssitantDocs from "./components/AssistentDocs";
import GenerateCTA from "./components/GenerateCTA";
import Footer from "./components/Footer";
import LazyLoadWrapper from "./components/LazyLoadWrapper";
import {
  dataCTA,
  dataAssistantDocs,
  dataInfoBlocks,
  dataHero,
  dataFooter,
  dataNavBar,
} from "./helpers";

function App() {
  return (
    <>
      <NavBar {...dataNavBar} />

      <Hero {...dataHero} />

      <LazyLoadWrapper delay={100}>
        <InfoBlocks {...dataInfoBlocks} />
      </LazyLoadWrapper>

      <LazyLoadWrapper delay={100}>
        <AssitantDocs {...dataAssistantDocs} />
      </LazyLoadWrapper>

      <LazyLoadWrapper delay={100}>
        <GenerateCTA {...dataCTA} />
      </LazyLoadWrapper>

      <LazyLoadWrapper delay={100}>
        <Footer {...dataFooter} />
      </LazyLoadWrapper>
    </>
  );
}

export default App;
