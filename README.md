# Portfolio - Doaa Altair

Een modern, interactief portfolio website gebouwd met Next.js en React. Dit portfolio toont mijn projecten, vaardigheden en ervaring als front-end developer.

## 🚀 Features

### Hoofdfunctionaliteiten
- **Responsive Design**: Volledig responsive en geoptimaliseerd voor alle schermformaten
- **Smooth Scrolling**: Vloeiende scroll-animaties en sectie-navigatie
- **Project Showcase**: Overzichtspagina met projectkaarten en detailpagina's per project
- **Intersection Observer**: Automatische sectie-detectie voor actieve navigatie
- **Scroll Indicator**: Visuele progress indicator tijdens het scrollen
- **Glass Morphism UI**: Moderne glassmorphism design met backdrop blur effecten

### Interactieve Componenten
- **Hero Typewriter**: Geanimeerde typewriter effect voor de naam
- **Dynamic Navigation**: Actieve sectie-highlighting tijdens scrollen
- **Project Cards**: Hover-effecten en animaties op projectkaarten
- **Project Detail Pages**: Dynamische routes voor elk project met scroll-animaties
- **Smart Text Parsing**: Automatische parsing van projectbeschrijvingen met subtitels en bullet points

## 🛠️ Technologieën

### Core
- **Next.js 14.2.4** - React framework met App Router
- **React 18.2.0** - UI library
- **TypeScript 5.3.3** - Type-safe JavaScript

### Styling & Animatie
- **Tailwind CSS 3.4.9** - Utility-first CSS framework
- **Framer Motion 12.23.26** - Animatie library voor React
- **CSS Custom Properties** - Theming en variabelen

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structuur

```
portfolio-DoaaAltair/
├── app/
│   ├── components/          # React componenten
│   │   ├── HeroTypewriter.tsx
│   │   ├── NavBar.tsx
│   │   ├── ScrollIndicator.tsx
│   │   ├── ProjectDescription.tsx
│   │   ├── MorphWords.tsx
│   │   └── ...
│   ├── data/               # Data bestanden
│   │   └── projects.ts     # Project data
│   ├── projecten/          # Project detail pagina's
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── globals.css         # Globale styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── public/                 # Statische assets
│   ├── *.png              # Project afbeeldingen
│   └── ...
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design Features

### Color Scheme
- **Background**: `#8f917b` (Olive green)
- **Text**: `#E8E4D8` (Cream white)
- **Accent**: `#1F2A1E` (Dark green)
- **Muted**: `#E8E4D8` (Cream white)

### UI Elements
- Glass morphism cards met backdrop blur
- Smooth hover transitions
- Gradient backgrounds en shapes
- Custom scroll indicator
- Responsive grid layouts

## 🚦 Getting Started

### Vereisten
- Node.js 18+ 
- npm of yarn

### Installatie

1. Clone de repository:
```bash
git clone <repository-url>
cd portfolio-DoaaAltair
```

2. Installeer dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in je browser

### Build voor Productie

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build voor productie
- `npm start` - Start productie server
- `npm run lint` - Run ESLint

## 🎯 Componenten Overzicht

### HeroTypewriter
Geanimeerde typewriter component die tekst letter voor letter toont.

**Props:**
- `name: string` - De tekst om te typen
- `className?: string` - Optionele CSS classes
- `speedMs?: number` - Typesnelheid in milliseconden (default: 110)

### ScrollIndicator
Visuele progress indicator die de scrollpositie toont.

**Props:**
- `progress: number` - Progress waarde tussen 0 en 1

### NavBar
Navigatiebalk met actieve sectie highlighting.

**Props:**
- `sections: Array<{id: string, label: string}>` - Secties voor navigatie
- `activeSection: string` - Huidige actieve sectie

### ProjectDescription
Slimme tekst parser die projectbeschrijvingen formatteert met:
- Automatische subtitel detectie
- Bullet point parsing
- Paragraaf formatting

**Props:**
- `description: string` - Project beschrijving tekst

## 📊 Project Data Structuur

Projecten worden opgeslagen in `app/data/projects.ts`:

```typescript
type Project = {
    slug: string;
    title: string;
    subtitle?: string;
    description: string;
    shortDescription?: string;
    logo: string;
    image: string;
    tech: string[];
    liveHref?: string;
    moreHref?: string;
}
```

## 🎨 Customization

### Kleuren Aanpassen
Pas de CSS variabelen aan in `app/globals.css`:

```css
:root {
    --bg: #8f917b;
    --text: #E8E4D8;
    --muted: #E8E4D8;
    --accent: #1F2A1E;
    --accent-strong: #1F2A1E;
    --card: rgba(255, 255, 255, 0.04);
}
```

### Projecten Toevoegen
Voeg nieuwe projecten toe aan `app/data/projects.ts`:

```typescript
{
    slug: "project-naam",
    title: "Project Titel",
    shortDescription: "Korte beschrijving...",
    description: "Volledige beschrijving...",
    logo: "logo.png",
    image: "project.png",
    tech: ["React", "TypeScript"],
    liveHref: "https://...",
    moreHref: "https://github.com/..."
}
```

## 🌐 Deployment

Dit project kan worden gedeployed op:
- **Vercel** (aanbevolen voor Next.js)
- **Netlify**
- **Railway**
- Elke andere platform die Next.js ondersteunt

### Vercel Deployment

1. Push code naar GitHub
2. Import project in Vercel
3. Vercel detecteert automatisch Next.js
4. Deploy!

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Performance

- **Code Splitting**: Automatisch door Next.js
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Images en componenten
- **CSS Optimization**: Tailwind CSS purging

## 📄 License

Dit project is privé en voor persoonlijk gebruik.

## 👤 Auteur

**Doaa Altair**
- Front-end Developer uit Tilburg, Nederland
- Email: altair.doaa1994@hotmail.com

## 🙏 Acknowledgments

- Next.js team voor het geweldige framework
- Tailwind CSS voor de utility-first approach
- Framer Motion voor soepele animaties


