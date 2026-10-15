# Nexe Consultoria ERP · Ceràmica Riu Sec

Web de Nexe Consultoria ERP sobre Ceràmica Riu Sec i el procés d'aprovisionament de matèries primeres. Està organitzada en cinc apartats: inici, empresa, procés, consultora i fonts.

## Obrir el projecte

Cal tindre Node.js 22 o posterior. Des de la carpeta del repositori:

```bash
npm install
npm run dev
```

Vite mostrarà l'adreça local de la web. Per comprovar la versió que es publicarà:

```bash
npm run build
npm run preview
```

## On editar els continguts

- `src/App.jsx`: textos, apartats i navegació.
- `src/content.js`: membres de l'equip, departaments i passos del procés.
- `src/styles.css`: colors i estils generals de Tailwind.
- `public/images/`: logotip de Nexe i imatge il·lustrativa.

L'apartat **Qui som** ja té una fitxa per a cada membre. Quan tingueu la informació confirmada, empleneu `studies`, `specialty` i `cvUrl` en `src/content.js`. L'enllaç al CV només apareixerà quan `cvUrl` tinga una adreça.

## Publicació en GitHub Pages

El projecte inclou un flux de GitHub Actions preparat per publicar la carpeta `dist` quan es pugen canvis a `main`. En la configuració del repositori, a **Settings → Pages → Build and deployment**, seleccioneu **GitHub Actions**. L'adreça prevista és:

`https://carlesmarti2003.github.io/Consultoria-ERP-1046/`

La ruta base de Vite ja està configurada per a aquest repositori. Comproveu l'adreça pública després del desplegament.
