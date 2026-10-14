import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import MedalsBand from "./components/MedalsBand";
import QuoteBoxes from "./components/QuoteBoxes";
import IdeaMarquee from "./components/IdeaMarquee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";

export default function App() {
  const [selected, setSelected] = useState("Todo");

  const pickFromTile = (name) => {
    setSelected(name);
    document.getElementById("catalogo")?.scrollIntoView();
  };
  // En los botones del catálogo, tocar la categoría activa vuelve a "Todo"
  const toggle = (name) => setSelected((cur) => (cur === name ? "Todo" : name));

  return (
    <>
      <Header />
      <main id="top">
        <Hero onPick={pickFromTile} />
        <Catalog selected={selected} onSelect={toggle} />
        <MedalsBand />
        <QuoteBoxes />
        <IdeaMarquee />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
