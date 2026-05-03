import './Statistique.css';

function Statistique({nombre, libelle}) {
    return (
        <div className="statistique">
        <h2>{nombre}</h2>
        <p>{libelle}</p>
        </div>
    );
}

export default Statistique;