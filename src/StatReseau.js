import './StatReseau.css';

function StatReseau({ lignes }) {

  // Nombre total de lignes
  const totalLignes = lignes.length;

  // Nombre total d'arrêts
  const totalArrets = lignes.reduce((sum, ligne) => sum + ligne.arrets, 0);

  // Ligne avec le plus d'arrêts
  const ligneMax = lignes.reduce((max, ligne) =>
    ligne.arrets > max.arrets ? ligne : max
  );

  return (
    <div className="stat-reseau">
      <h2>Statistiques du réseau</h2>

      <div className="stats-container">
        <div className="stat-card">
          <h3>{totalLignes}</h3>
          <p>Lignes</p>
        </div>

        <div className="stat-card">
          <h3>{totalArrets}</h3>
          <p>Arrêts</p>
        </div>

        <div className="stat-card">
          <h3>Ligne {ligneMax.numero}</h3>
          <p>Max arrêts ({ligneMax.arrets})</p>
        </div>
      </div>
    </div>
  );
}

export default StatReseau;