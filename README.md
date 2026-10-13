# Wirox web (React + Vite, JavaScript)

## Correrlo en tu compu
1. Instalá Node.js (versión LTS) desde nodejs.org
2. En esta carpeta: `npm install`
3. `npm run dev` y abrí la dirección que aparece (http://localhost:5173)

## Publicar
`npm run build` genera la carpeta `dist`, que se sube a GitHub Pages, Netlify o Vercel.

## Antes de publicar (SEO)
- Reemplazá `TU-DOMINIO.com` en `index.html`, `public/robots.txt` y `public/sitemap.xml`.
- Reemplazá los espacios "Foto del producto" con imágenes limpias en `public/images` y actualizá `src/data/products.js`.
- Dá de alta el sitio en Google Search Console y creá el perfil de Google Business.

## Dónde tocar
- Productos y categorías: `src/data/products.js`
- Colores y estilos: `src/styles.css`
- Secciones: `src/components`
