import PersonajeCard from "./PersonajeCard.jsx";

export default function PersonajeList({
  personajes,
  favoritos,
  onAlternarFavorito,
}) {
  return (
    <section className="lista-personajes" aria-label="Lista de personajes">
      {personajes.map((personaje) => (
        <PersonajeCard
          key={personaje.id}
          personaje={personaje}
          esFavorito={favoritos.some((item) => item.id === personaje.id)}
          onAlternarFavorito={onAlternarFavorito}
        />
      ))}
    </section>
  );
}