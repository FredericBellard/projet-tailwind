import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Notice from "./components/Notice";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      <div class="container mx-auto px-6 py-16">
        <h2 class="text-2xl font-bold text-gray-800">Témoignages</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <Notice
            image="./assets/guy-6309458_1280.jpg"
            nom="Pierre"
            avis="Bon produit"
          />
          <Notice
            image="./assets/girl-2961959_1280.jpg"
            nom="Mary"
            avis="Bon design"
          />
          <Notice
            image="./assets/man-1867175_1280.jpg"
            nom="Thomas"
            avis="Très bien"
          />
          <Notice
            image="./assets/woman-2112292_1280.jpg"
            nom="Adeline"
            avis="Incroyable"
          />
        </div>
      </div>

      <main class="container mx-auto px-6 py-8">
        <h2 class="text-2xl font-bold text-gray-800">Nos Produits</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Product image="./assets/agriculture-1846358_1280.jpg" />
          <Product image="./assets/grapes-3638444_1280.jpg" />
          <Product image="./assets/raspberries-2431029_1280.jpg" />
          <Product image="./assets/strawberries-3431122_1280.jpg" />
          <Product image="./assets/ai-generated-7725925_1280.jpg" />
          <Product image="./assets/cherries-7952771_1280.jpg" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
