# GOGEN-TAYLOR — Catálogo de Recambios Deutz

Web ecommerce tipo catálogo industrial B2B para **GOGEN-TAYLOR**, distribuidor especializado en recambios para motores Deutz. Estática, sin backend, lista para desplegar en Vercel.

**URL de producción:** _pendiente, se genera al desplegar (ver sección "Deploy")_

---

## Stack

- **Next.js 14** (App Router) con `output: 'export'` — 1.149 páginas HTML estáticas
- **React 18**
- **Tailwind CSS 3.4** con design tokens extraídos del logo
- Zero backend, zero database, zero login

## Qué incluye

- 30 series de motores Deutz (las literales del documento fuente)
- 9 subsistemas mecánicos, 27 tipos de pieza
- Páginas dinámicas pre-renderizadas: 30 motores × 9 subcategorías × 27 piezas
- Buscador cliente-side con autocompletar y atajo `/`
- Botón WhatsApp en cada ficha de pieza con mensaje pre-rellenado:
  _"Hola, estoy interesado en la pieza: {nombre}, del motor {motor}. ¿Podéis darme más información y precio?"_
- Formulario de contacto que abre `mailto:info@recambiosoriginales.com`
- Reseñas con `schema.org Review` + `AggregateRating`
- SEO completo: Open Graph, Twitter cards, geo tags, sitemap.xml, robots.txt, JSON-LD (`LocalBusiness` + `AutoPartsStore` + `Product` + `BreadcrumbList` + `WebSite` + `SearchAction`)
- PWA manifest, og-image 1200×630, favicon, apple-touch-icon
- Skip-link a11y, `prefers-reduced-motion`, contraste AA
- Responsive mobile-first, FAB WhatsApp flotante con pulso, drawer lateral
- Animaciones de scroll con IntersectionObserver (sin sobrecarga)

## Teléfono y datos de contacto

- **Teléfono / WhatsApp:** +34 686 93 09 69
- **Email:** info@recambiosoriginales.com
- **Dirección:** Calle de Aragón, 35 - nv 95, Mejorada del Campo, 28840, Madrid
- **LinkedIn:** Gogen-Taylor | OEM & Industrial Parts

Todos editables en `src/data/config.js`.

---

## Probar en local

Requisitos: **Node.js 18.17+** y npm.

```bash
npm install
npm run dev
# abrir http://localhost:3000
```

## Build de producción

```bash
npm run build
```

Genera el directorio `out/` con el sitio estático completo.

---

## Deploy a Vercel — Guía paso a paso

### Paso 1: subir el código a GitHub

Si no tienes el repo aún, desde la raíz del proyecto:

```bash
# Si el repositorio ya está inicializado con git (viene así en el zip):
git remote add origin https://github.com/TU-USUARIO/gogen-taylor.git
git branch -M main
git push -u origin main
```

Si empiezas desde cero:

```bash
git init
git add .
git commit -m "Initial commit: GOGEN-TAYLOR catálogo Deutz"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/gogen-taylor.git
git push -u origin main
```

> Antes de hacer `push`, crea el repo vacío en [github.com/new](https://github.com/new) (sin README ni .gitignore, el proyecto ya los trae).

### Paso 2: importar en Vercel

1. Entra en [vercel.com/new](https://vercel.com/new) con tu cuenta.
2. Pulsa **"Import Git Repository"** y selecciona `gogen-taylor`.
3. Vercel detecta Next.js automáticamente. **No cambies nada** de la configuración por defecto:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output Directory: (dejar vacío, Vercel lo detecta)
   - Install Command: `npm install`
4. Pulsa **"Deploy"**.

En ~90 segundos tendrás la URL pública: `https://gogen-taylor.vercel.app` (o similar).

### Paso 3 (opcional): dominio propio

En el panel de Vercel → _Settings → Domains_ → añade `gogen-taylor.com` y apunta los DNS según las instrucciones que te dé Vercel.

Cuando tengas el dominio final, edita en `src/data/config.js`:

```js
siteUrl: 'https://gogen-taylor.com',
```

y vuelve a hacer commit + push. Vercel redesplegará automáticamente.

---

## Deploy alternativo: Vercel CLI

Si prefieres no pasar por GitHub:

```bash
npm install -g vercel
vercel login
vercel            # primer deploy, responder a las preguntas
vercel --prod     # deploy a producción
```

---

## Estructura del proyecto

```
gogen-taylor/
├── public/
│   ├── logo.jpg                   Logo de la empresa
│   ├── og-image.png               Open Graph 1200x630
│   ├── favicon.ico
│   ├── manifest.webmanifest       PWA
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.js              Layout raíz: SEO global + schemas
│   │   ├── globals.css            Tokens + animaciones
│   │   ├── page.js                Home
│   │   ├── not-found.js           404
│   │   ├── sitemap.js             sitemap.xml dinámico
│   │   ├── motores/…              Catálogo + [engine] + [subcategory]
│   │   ├── producto/[engine]/[part]/page.js
│   │   ├── buscar/page.js
│   │   ├── contacto/page.js
│   │   └── resenas/page.js
│   ├── components/                18 componentes
│   ├── data/                      Datos del catálogo (Word)
│   └── lib/                       Helpers WhatsApp / búsqueda
├── tailwind.config.js
├── next.config.mjs
├── vercel.json
├── package.json
└── README.md
```

## Edición de datos

- **Datos empresa:** `src/data/config.js`
- **Motores:** `src/data/engines.js` (30 registros)
- **Piezas:** `src/data/parts.js` (27 registros)
- **Reseñas:** `src/data/reviews.js`

Cualquier cambio en estos ficheros → `git commit + push` → Vercel redespliega en segundos.

## Licencia

Proyecto privado para GOGEN-TAYLOR.
