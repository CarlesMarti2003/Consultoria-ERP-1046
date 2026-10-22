# Nexe Consultoria ERP · Ceràmica Riu Sec

Web de Nexe Consultoria ERP sobre Ceràmica Riu Sec i el procés d'aprovisionament de matèries primeres. Està organitzada en cinc apartats: inici, empresa, procés, consultora i contacte.

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

- `src/index.html`: entrada de l'aplicació per al desenvolupament.
- `src/App.jsx`: textos, apartats i navegació.
- `src/content.js`: membres de l'equip, departaments i passos del procés.
- `src/styles.css`: colors i estils generals de Tailwind.
- `public/images/`: logotip de Nexe i imatge il·lustrativa.

L'apartat **Qui som** mostra la formació de cada membre i enllaça els quatre CV disponibles a `public/cv/`. No s'assignen funcions individuals sense confirmar-les amb l'equip.

Cada PDF es guarda dins de `public/cv/` i la seua ruta figura en `cvUrl` de `src/content.js`. També s'accepta un enllaç públic complet a un PDF allotjat fora de la web. Reviseu que els CV no incloguen dades personals que no vulgueu fer públiques (adreça, telèfon, document d'identitat, etc.).

## Publicació en GitHub Pages

GitHub Pages publica la carpeta principal de la branca `main`. Per generar els fitxers que serveix:

```bash
npm run export
git add -A
git commit -m "Actualitza la web"
git push origin main
```

`npm run export` compila l'aplicació i copia `index.html`, `assets/`, `images/` i, si existeix, `cv/` a la carpeta principal. Editeu sempre els fitxers de `src/` i `public/`; els de la carpeta principal es tornen a generar amb l'exportació. L'adreça pública és [carlesmarti2003.github.io/Consultoria-ERP-1046](https://carlesmarti2003.github.io/Consultoria-ERP-1046/).
