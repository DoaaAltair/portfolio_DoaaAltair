## Portfolio — Doaa Altair

Mijn persoonlijke webportfolio, ontworpen en gebouwd om mijn werk, projecten en reis als front-end developer te laten zien.
Een moderne, snelle en toegankelijke portfolio-website gebouwd met Next.js (App Router). Dit project toont projecten, vaardigheden en achtergrond, en is ontworpen om eenvoudig uit te breiden en te onderhouden.

- Live demo: (`https://portfolio-doaa-altair.vercel.app/`)
- Technologieën: Next.js, React, TypeScript, Tailwind CSS

## Inhoud

- Overzicht
- Functies
- Snel starten
- Scripts
- Projectstructuur
- Content beheren (projecten)
- Kwaliteit (toegankelijkheid, performance)
- Deploy
- Contact

## Overzicht

Deze portfolio is opgezet met de Next.js App Router. Inhoud (zoals projecten) staat in eenvoudige TypeScript-bronnen, zodat je geen CMS nodig hebt. De site is geoptimaliseerd voor SEO, prestaties en toegankelijkheid.

## Functies

- Projectoverzicht met data uit `app/data/projects.ts`
- SSR/SSG via Next.js App Router
- TypeScript voor typeveiligheid
- Best practices voor SEO (metadata, semantische HTML)
- Klaar voor deploy op Vercel of eigen hosting

## Snel starten

1) Vereisten
- Node.js LTS (aanbevolen)
- npm, pnpm of yarn

2) Installatie

```bash
npm install
# of
yarn
# of
pnpm install
```

3) Development server

```bash
npm run dev
# open vervolgens http://localhost:3000
```

## Scripts

```bash
npm run dev      # start dev-server met hot reload
npm run build    # bouw productiebuild
npm run start    # start productie-server (na build)
npm run lint     # voer lints uit (indien geconfigureerd)
```

## Projectstructuur

```text
app/
  page.tsx                # homepage
  layout.tsx              # root layout (App Router)
  data/
    projects.ts           # brondata voor projecten
public/                   # statische assets
README.md
```

Afhankelijk van je ontwerp kunnen er extra routes, componenten en stijlen zijn.

## Content beheren (projecten)

Projecten staan in `app/data/projects.ts`. Voeg een nieuw project toe door een object te append’en aan de export. Voorbeeldvelden kunnen zijn: `title`, `description`, `tech`, `links`, `images`. Pas de UI aan als je extra velden nodig hebt.

## Kwaliteit

- Toegankelijkheid: semantische HTML, aria-attributen waar nodig
- Performance: gebruik van Next.js optimalisaties (afbeeldingen, fonts via `next/font`)
- SEO: titel/metadata in layout en/of route-segmenten


## Deploy

Aanbevolen: Vercel (naadloze integratie met Next.js).

1) Push naar GitHub/GitLab/Bitbucket
2) Koppel de repository bij Vercel
3) Vercel bouwt en deployt automatisch

Alternatief: eigen server/container

```bash
npm run build
npm run start
```

## Preview

![Homepage screenshot](screencapture.png)

## Contact

Heb je feedback, een vraag of wil je samenwerken?
Stuur gerust een bericht!  

- Naam: Doaa Altair
- E-mail: altair.doaa1994@hotmail.com
- LinkedIn: https://www.linkedin.com/in/doaa-altair-488998195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app
