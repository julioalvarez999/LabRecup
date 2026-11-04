# Laboratorio Recuperatorio – React + Vite

Aplicación que consume la API pública de Rick and Morty, muestra los primeros 20 personajes y permite agregarlos o quitarlos de favoritos.

## Ejecutar el proyecto

1. Instalar Node.js.
2. Abrir una terminal dentro de esta carpeta.
3. Ejecutar:

```bash
npm install
npm run dev
```

4. Abrir la dirección local que muestra Vite.

## Estructura solicitada

```text
src/
├── components/
│   ├── PersonajeList.jsx
│   ├── PersonajeCard.jsx
│   └── FavoritesPanel.jsx
├── hooks/
│   └── usePersonajes.js
├── services/
│   └── fetchPersonajes.js
├── MultiversoApp.jsx
├── main.jsx
└── styles.css
```

## Publicar

En GitHub subir el contenido del proyecto, excepto `node_modules` y `dist`.
Para Netlify, conectar el repositorio de GitHub y usar:
- Build command: `npm run build`
- Publish directory: `dist`

La aplicación necesita conexión a internet para consultar la API.
