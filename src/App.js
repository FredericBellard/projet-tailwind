import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Notice from "./components/Notice";
import Product from "./components/Product";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <Header lien1="Produits" lien2="Témoignages" lien3="Contact" lien4="A propos" />
      <Hero />
      {/* Produits */}
      <h2 className="m-8 text-start text-2xl font-bold" id="produits">Produits</h2>
      <div class="flex flex-wrap justify-center gap-6" >
        <Product
          src="https://picsum.photos/id/23/240/160"
          productName="Pomme"
          productBrand="Fruits"
          prix="23"
        />
        <Product
          src="https://picsum.photos/id/33/240/160"
          productName="Poire"
          productBrand="Fruits"
          prix="18"
        />
        <Product
          src="https://picsum.photos/id/25/240/160"
          productName="Fraise"
          productBrand="Fruits rouges"
          prix="28"
        />
        <Product
          src="https://picsum.photos/id/26/240/160"
          productName="Kiwi"
          productBrand="Fruits"
          prix="22"
        />
        <Product
          src="https://picsum.photos/id/27/240/160"
          productName="Mangue"
          productBrand="Fruits"
          prix="29"
        />
        <Product
          src="https://picsum.photos/id/28/240/160"
          productName="Melon"
          productBrand="Fruits"
          prix="20"
        />
      </div>
      {/* Notice */}
      <h2 className="m-8 text-start text-2xl font-bold" id="temoignages">Témoignages</h2>
      <div class="flex flex-wrap justify-center gap-6">
        <Notice image="https://picsum.photos/id/35/100/100" nom="John Doe" description="Super produit ! Je recommande !"/>
        <Notice image="https://picsum.photos/id/36/100/100" nom="Jane Dae" description="Problème de qualité."/>
        <Notice image="https://picsum.photos/id/38/100/100" nom="Joe Due" description="Satisfaisant !"/>
        <Notice image="https://picsum.photos/id/39/100/100" nom="June Dune" description="Je viens de le recevoir ! Super !"/>
      </div>

      {/* Footer */}
      <Footer/>
      
    </div>
  );
}

export default App;
