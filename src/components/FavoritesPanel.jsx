export default function FavoritesPanel({ favoritos, onQuitarFavorito }) {
  return (
    <aside className="panel-favoritos">
      <h2>Favoritos (<span>{favoritos.length}</span>)</h2>

      {favoritos.length === 0 ? (
        <p className="sin-favoritos">Aún no has marcado favoritos.</p>
      ) : (
        <ul>
          {favoritos.map((personaje) => (
            <li key={personaje.id}>
              <img src={personaje.image} alt="" />
              <span title={personaje.name}>{personaje.name}</span>
              <button onClick={() => onQuitarFavorito(personaje.id)}>
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}