import "./App.scss";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import InfoBlocks from "./components/InfoBlocks";
import AssitantDocs from "./components/AssistentDocs";
import GenerateCTA from "./components/GenerateCTA";
import Footer from "./components/Footer";

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
      <InfoBlocks {...dataInfoBlocks} />
      <AssitantDocs {...dataAssistantDocs} />
      <GenerateCTA {...dataCTA} />
      <Footer {...dataFooter} />
    </>
  );
}

export default App;
