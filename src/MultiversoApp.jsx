import PersonajeList from "./components/PersonajeList.jsx";
import FavoritesPanel from "./components/FavoritesPanel.jsx";
import { usePersonajes } from "./hooks/usePersonajes.js";

export default function MultiversoApp() {
  const {
    personajes,
    favoritos,
    cargando,
    error,
    alternarFavorito,
    quitarFavorito,
  } = usePersonajes();

  return (
    <main className="app">
      <header className="encabezado">
        <h1>Rick and Morty Universo</h1>
      </header>

      <div className="contenido">
        <section className="zona-principal">
          {cargando && <p className="mensaje">Cargando...</p>}
          {error && <p className="error">{error}</p>}
          {!cargando && !error && (
            <PersonajeList
              personajes={personajes}
              favoritos={favoritos}
              onAlternarFavorito={alternarFavorito}
            />
          )}
        </section>

        <FavoritesPanel
          favoritos={favoritos}
          onQuitarFavorito={quitarFavorito}
        />
      </div>
    </main>
  );
}