/*import Header from './Header/Header';
import './App.css';
import Footer from './Footer/Footer';
import Statistique from './Statistique/Statistique';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="contenu">
      <p>Bienvenue ! Cette application vous aide a trouver
      votre ligne de bus a Dakar.</p>
      </main>
      <h2 className='stat'>Statistique DDD</h2>
      <Statistique nombre={10} libelle="lignes de bus" />
      <Statistique nombre={500} libelle="bus en circulation" />
      <Statistique nombre={150} libelle="arrêts de bus" />
      <Footer />
    </div>
  );
}

export default App;*/



/*return (
    <div className="App">
      <Header />
      <main className="contenu">
        <ListeLignes lignes={lignes} />
      </main>
      <StatReseau lignes={lignes} />
      <Footer />
    </div>
  );*/














import './App.css';
import Header from './Header/Header';
import ListeLignes from './ListeLignes';
import Footer from './Footer/Footer';
import StatReseau from './StatReseau';
import { useState } from 'react';
import Recherche from './Recherche/Recherche';
import LigneBus from './LigneBus/LigneBus';
import DetailLigne from './DetailLigne/DetailLigne';

function App() {
  const [recherche, setRecherche] = useState("");
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);

  const [nombreRecherches, setNombreRecherches] = useState(0);

  
  function handleRecherche(valeur) {
   setRecherche(valeur);
   setNombreRecherches(nombreRecherches + 1);
  }

  
  const lignes = [
{ id: 1, numero: "1", depart: "Parcelles Assainies",
arrivee: "Plateau", arrets: 14,
listeArrets: ["Parcelles U14", "Parcelles U10",
"Camberene", "Patte d'Oie", "Grand Dakar",
"Colobane", "Ponty", "Plateau"] },
{ id: 2, numero: "7", depart: "Guediawaye",
arrivee: "Place Obe", arrets: 18,
listeArrets: ["Guediawaye", "Pikine", "Thiaroye",
"Keur Massar", "Grand Yoff", "Parcelles",
"Liberte 6", "Place Obe"] },
{ id: 3, numero: "15", depart: "Pikine",
arrivee: "Medina", arrets: 12,
listeArrets: ["Pikine Centre", "Thiaroye Gare",
"Hann", "Colobane", "Fass", "Medina"] },
{ id: 4, numero: "23", depart: "Ouakam",
arrivee: "Grand Dakar", arrets: 10,
listeArrets: ["Ouakam Village", "Mermoz", "Fann",
"Point E", "Liberte 5", "Grand Dakar"] },
{ id: 5, numero: "8", depart: "Almadies",
arrivee: "Colobane", arrets: 16,
listeArrets: ["Almadies", "Ngor", "Yoff",
"Ouest Foire", "Liberte 6", "Colobane"] },
{ id: 6, numero: "12", depart: "Yoff",
arrivee: "Sandaga", arrets: 11,
listeArrets: ["Yoff Village", "Aeroport LSS",
"Parcelles U17", "Grand Yoff", "HLM", "Sandaga"] },
];

  // Filtrer les lignes selon le texte tape
  const lignesFiltrees = lignes.filter(l =>
    l.depart.toLowerCase().includes(recherche.toLowerCase()) ||
    l.arrivee.toLowerCase().includes(recherche.toLowerCase()) ||
    l.numero.includes(recherche)
  );

  function handleClickLigne(ligne) {
    if (ligneSelectionnee && ligneSelectionnee.id === ligne.id) {
      setLigneSelectionnee(null);
      // re-clic = deselectioner
    } else {
      setLigneSelectionnee(ligne); // premier clic = selectionner
    }
  }


  
  return (
    <div className="App">
      <Header />
      <main className="contenu">

        <p className="compteur-recherche">
          Vous avez effectué {nombreRecherches} recherche(s)
        </p>
        
        <Recherche valeur={recherche} onChange={handleRecherche}/>

        <button
          className="btn-effacer"
          onClick={() => setRecherche("")}
        >
          Effacer
        </button>
        
        <p className="resultat-recherche"> {lignesFiltrees.length} ligne {lignesFiltrees.length > 1 ? 's' : ''} trouvee {lignesFiltrees.length > 1 ? 's' : ''}</p>


        {lignesFiltrees.length === 0 && (
            <p className="aucun-resultat">
              Aucune ligne trouvée
            </p>
        )}


        {lignesFiltrees.map(ligne => (
          <LigneBus
            key={ligne.id}
            numero={ligne.numero}
            depart={ligne.depart}
            arrivee={ligne.arrivee}
            arrets={ligne.arrets}
            estSelectionnee={ligneSelectionnee
            && ligneSelectionnee.id === ligne.id}
            onClick={() => handleClickLigne(ligne)}
          />
        ))}

        {ligneSelectionnee && <DetailLigne ligne={ligneSelectionnee} />}

      </main>

      <Footer />
    </div>
  );
}


export default App;