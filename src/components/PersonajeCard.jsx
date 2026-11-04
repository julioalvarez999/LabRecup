export default function PersonajeCard({
  personaje,
  esFavorito,
  onAlternarFavorito,
}) {
  const estado = personaje.status || "unknown";
  const estadoTexto = estado === "unknown" ? "Desconocido" : estado;
  const estadoClase = estado === "Alive"
    ? "vivo"
    : estado === "Dead"
      ? "muerto"
      : "desconocido";

  return (
    <article className={`personaje-card ${esFavorito ? "seleccionado" : ""}`}>
      <img
        className="personaje-imagen"
        src={personaje.image}
        alt={personaje.name}
        loading="lazy"
      />
      <div className="personaje-info">
        <h2>{personaje.name}</h2>
        <p className={estadoClase}>
          {estadoTexto} - {personaje.species}
        </p>
        <button
          className="boton-favorito"
          onClick={() => onAlternarFavorito(personaje)}
        >
          {esFavorito ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
        </button>
      </div>
    </article>
  );
}