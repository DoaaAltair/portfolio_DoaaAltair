# Portfolio - Doaa Altair

Een modern, interactief portfolio website gebouwd met Next.js en React. Dit portfolio toont mijn projecten, vaardigheden en ervaring als front-end developer.

## 🚀 Features

### Hoofdfunctionaliteiten
- **Responsive Design**: Volledig responsive en geoptimaliseerd voor alle schermformaten
- **Smooth Scrolling**: Vloeiende scroll-animaties en sectie-navigatie
- **Project Showcase**: Overzichtspagina met projectkaarten en detailpagina's per project
- **Intersection Observer**: Automatische sectie-detectie voor actieve navigatie
- **Scroll Indicator**: Visuele progress indicator tijdens het scrollen (alleen desktop)
- **Glass Morphism UI**: Moderne glassmorphism design met backdrop blur effecten
- **Dynamic Routes**: Dynamische project detailpagina's via Next.js App Router
- **Scroll-based Animations**: Framer Motion animaties gebaseerd op scroll positie

### Interactieve Componenten

#### HeroTypewriter
Geanimeerde typewriter effect component die tekst letter voor letter toont.
- **Props:**
  - `name: string` - De tekst om te typen
  - `className?: string` - Optionele CSS classes
  - `speedMs?: number` - Typesnelheid in milliseconden (default: 110)

#### MorphWords
Animated word morphing component die tussen verschillende woorden fade.
- Wisselt tussen: 'DESIGN', 'DEVELOPMENT', 'UI/UX', 'CODE'
- Fade in/out animaties met 2 seconden interval

#### NavBar
Navigatiebalk met actieve sectie highlighting en social media links.
- **Props:**
  - `sections: Array<{id: string, label: string}>` - Secties voor navigatie
  - `activeSection: string` - Huidige actieve sectie
- **Features:**
  - Actieve sectie underline animatie
  - Hover effecten met letter-spacing animatie
  - Social media icons (Vercel, LinkedIn, GitHub)

#### ScrollIndicator
Visuele progress indicator die de scrollpositie toont.
- **Props:**
  - `progress: number` - Progress waarde tussen 0 en 1
- **Features:**
  - Alleen zichtbaar op desktop (lg breakpoint)
  - Smooth transitions bij scrollen
  - Visuele thumb met glow effect

#### ProjectDescription
Slimme tekst parser die projectbeschrijvingen formatteert.
- **Props:**
  - `description: string` - Project beschrijving tekst
- **Features:**
  - Automatische subtitel detectie (korte regels zonder leestekens)
  - Bullet point parsing (regels die beginnen met •)
  - Paragraaf formatting
  - Automatische list grouping

#### BackgroundCanvas
Interactieve canvas achtergrond met muis-gevoelige animaties.
- **Features:**
  - Reactieve verticale lijnen die reageren op muispositie
  - Smooth animaties met requestAnimationFrame
  - Responsive canvas sizing

#### DraggableContact
Draggable contact component (niet actief gebruikt in huidige versie).
- **Features:**
  - Sleep functionaliteit met muis
  - Position state management

#### ProjectHeader
Simpele header component voor project sectie.

### Project Detail Pagina Features
- **Scroll-based Image Animation**: Project afbeelding fade/scale bij scrollen
- **Parallax Effects**: Framer Motion scroll transforms
- **Dynamic Content**: Automatische project data loading
- **Tech Stack Display**: Visuele weergave van gebruikte technologieën
- **Call-to-Action Buttons**: Live demo en code links

## 🛠️ Technologieën

### Core Framework & Libraries
- **Next.js 14.2.4** - React framework met App Router
  - Server Components & Client Components
  - Dynamic Routes (`[slug]`)
  - Image Optimization
  - Built-in Routing
- **React 18.2.0** - UI library
  - Hooks (useState, useEffect, useMemo, useRef)
  - Client-side interactiviteit
- **TypeScript 5.3.3** - Type-safe JavaScript
  - Type definitions voor alle componenten
  - Interface definitions voor data structures

### Styling & Animatie
- **Tailwind CSS 3.4.9** - Utility-first CSS framework
  - Custom color variables
  - Responsive utilities
  - Custom component classes
- **Framer Motion 12.23.26** - Animatie library voor React
  - Scroll-based animations (`useScroll`, `useTransform`)
  - Viewport animations (`whileInView`)
  - Smooth transitions
- **CSS Custom Properties** - Theming en variabelen
  - Color scheme management
  - Consistent design tokens

### Fonts
- **Manrope** (Google Fonts) - Via Next.js font optimization
  - Weights: 400, 600, 700, 800
  - Variable font support

### Development Tools
- **ESLint 8.57.0** - Code linting
- **ESLint Config Next 14.2.4** - Next.js specifieke linting rules
- **PostCSS 8.4.38** - CSS processing
- **Autoprefixer 10.4.19** - CSS vendor prefixing
- **Type Definitions:**
  - `@types/node 20.11.24`
  - `@types/react 18.2.49`
  - `@types/react-dom 18.2.17`

## 📁 Project Structuur

```
portfolio-DoaaAltair/
├── app/
│   ├── components/              # React componenten
│   │   ├── BackgroundCanvas.tsx # Interactieve canvas achtergrond
│   │   ├── DraggableContact.tsx # Draggable contact component
│   │   ├── HeroTypewriter.tsx   # Typewriter animatie
│   │   ├── MorphWords.tsx       # Word morphing animatie
│   │   ├── NavBar.tsx           # Navigatie component
│   │   ├── ProjectDescription.tsx # Slimme tekst parser
│   │   ├── ProjectHeader.tsx    # Project header
│   │   └── ScrollIndicator.tsx  # Scroll progress indicator
│   ├── data/                    # Data bestanden
│   │   └── projects.ts          # Project data & types
│   ├── projecten/               # Project detail pagina's
│   │   └── [slug]/              # Dynamic route
│   │       └── page.tsx         # Project detail component
│   ├── globals.css              # Globale styles & CSS variabelen
│   ├── layout.tsx               # Root layout met metadata
│   └── page.tsx                 # Homepage component
├── public/                      # Statische assets
│   ├── *.png                   # Project afbeeldingen
│   ├── *.svg                   # Iconen (GitHub, LinkedIn, Vercel)
│   └── *.jpg                   # Extra afbeeldingen
├── next.config.mjs              # Next.js configuratie
├── tailwind.config.ts           # Tailwind CSS configuratie
├── postcss.config.mjs           # PostCSS configuratie
├── tsconfig.json                # TypeScript configuratie
├── package.json                 # Dependencies & scripts
└── README.md                    # Dit bestand
```

## 🎨 Design Features

### Color Scheme
- **Background**: `#8f917b` (Olive green)
- **Text**: `#E8E4D8` (Cream white)
- **Accent**: `#1F2A1E` (Dark green)
- **Muted**: `#E8E4D8` (Cream white)
- **Card Background**: `rgba(255, 255, 255, 0.04)` (Semi-transparent white)

### UI Elements
- **Glass Morphism**: Cards met backdrop blur en semi-transparante achtergronden
- **Smooth Transitions**: Hover effects en state changes
- **Gradient Backgrounds**: Radial gradients voor depth
- **Custom Scroll Indicator**: Visuele progress bar (desktop only)
- **Responsive Grid Layouts**: Flexbox en Grid voor verschillende schermformaten
- **Custom Button Styles**: Primary buttons met hover effects
- **Navigation Underlines**: Animated underline voor actieve secties

## 🚦 Getting Started

### Vereisten
- **Node.js 18+** (aanbevolen: LTS versie)
- **npm** of **yarn** package manager

### Installatie

1. **Clone de repository:**
```bash
git clone <repository-url>
cd portfolio-DoaaAltair
```

2. **Installeer dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** in je browser

### Build voor Productie

```bash
# Build de applicatie
npm run build

# Start productie server
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server op http://localhost:3000
- `npm run build` - Build voor productie (optimalisaties en minificatie)
- `npm start` - Start productie server (na build)
- `npm run lint` - Run ESLint voor code kwaliteit checks

## 🎯 Componenten Overzicht

### HeroTypewriter
Geanimeerde typewriter component die tekst letter voor letter toont.

**Gebruik:**
```tsx
<HeroTypewriter 
  name="Doaa Altair" 
  className="text-5xl"
  speedMs={110}
/>
```

### ScrollIndicator
Visuele progress indicator die de scrollpositie toont.

**Gebruik:**
```tsx
<ScrollIndicator progress={0.5} />
```

### NavBar
Navigatiebalk met actieve sectie highlighting.

**Gebruik:**
```tsx
<NavBar 
  sections={[
    { id: 'over', label: 'Over' },
    { id: 'projecten', label: 'Projecten' }
  ]}
  activeSection="over"
/>
```

### ProjectDescription
Slimme tekst parser die projectbeschrijvingen formatteert.

**Gebruik:**
```tsx
<ProjectDescription description={project.description} />
```

**Ondersteunt:**
- Automatische subtitel detectie (korte regels zonder leestekens)
- Bullet points (regels die beginnen met •)
- Paragraaf formatting
- Automatische list grouping

### MorphWords
Animated word morphing component.

**Gebruik:**
```tsx
<MorphWords />
```

Wisselt automatisch tussen: 'DESIGN', 'DEVELOPMENT', 'UI/UX', 'CODE'

### BackgroundCanvas
Interactieve canvas achtergrond.

**Gebruik:**
```tsx
<BackgroundCanvas />
```

## 📊 Project Data Structuur

Projecten worden opgeslagen in `app/data/projects.ts`:

```typescript
type Project = {
    slug: string;                    // URL slug voor routing
    title: string;                   // Project titel
    subtitle?: string;                // Optionele subtitel
    description: string;              // Volledige beschrijving (ondersteunt formatting)
    shortDescription?: string;       // Korte beschrijving voor cards
    logo: string;                    // Logo bestandsnaam
    image: string;                   // Hoofdafbeelding bestandsnaam
    tech: string[];                  // Array van technologieën
    liveHref?: string;               // Link naar live demo
    moreHref?: string;               // Link naar code/repository
}
```

**Helper functie:**
```typescript
getProjectBySlug(slug: string): Project | undefined
```

## 🎨 Customization

### Kleuren Aanpassen
Pas de CSS variabelen aan in `app/globals.css`:

```css
:root {
    --bg: #8f917b;              /* Achtergrond kleur */
    --text: #E8E4D8;             /* Tekst kleur */
    --muted: #E8E4D8;            /* Muted tekst kleur */
    --accent: #1F2A1E;           /* Accent kleur */
    --accent-strong: #1F2A1E;    /* Sterke accent kleur */
    --card: rgba(255, 255, 255, 0.04); /* Card achtergrond */
}
```

### Projecten Toevoegen
Voeg nieuwe projecten toe aan `app/data/projects.ts`:

```typescript
{
    slug: "project-naam",
    title: "Project Titel",
    subtitle: "Optionele subtitel",
    shortDescription: "Korte beschrijving voor de project card...",
    description: `Volledige beschrijving
    met meerdere paragrafen.
    
    Subtitel zonder leesteken
    
    • Bullet point 1
    • Bullet point 2
    
    Meer tekst...`,
    logo: "logo.png",
    image: "project.png",
    tech: ["React", "TypeScript", "Next.js"],
    liveHref: "https://example.com",
    moreHref: "https://github.com/username/repo"
}
```

### Secties Aanpassen
Wijzig de secties in `app/page.tsx`:

```typescript
const sections = [
    { id: 'over', label: 'Over' },
    { id: 'projecten', label: 'Projecten' },
    { id: 'vaardigheden', label: 'Vaardigheden' },
];
```

## 🌐 Deployment

Dit project kan worden gedeployed op verschillende platforms:

### Vercel (Aanbevolen)
1. Push code naar GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel detecteert automatisch Next.js
4. Configureer environment variables indien nodig
5. Deploy!

### Andere Platforms
- **Netlify** - Ondersteunt Next.js met build command: `npm run build`
- **Railway** - Full-stack deployment platform
- **AWS Amplify** - AWS deployment oplossing
- Elke andere platform die Node.js en Next.js ondersteunt

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (niet ondersteund)

## 🔧 Performance Features

- **Code Splitting**: Automatisch door Next.js App Router
- **Image Optimization**: Next.js Image component met lazy loading
- **Lazy Loading**: Images en componenten worden geladen wanneer nodig
- **CSS Optimization**: Tailwind CSS purging voor minimale bundle size
- **Font Optimization**: Next.js font optimization voor Manrope
- **Client Components**: Alleen waar nodig voor interactiviteit
- **Server Components**: Standaard voor betere performance

## 🎓 Key Features & Functionalities

### Intersection Observer
Automatische detectie van zichtbare secties voor actieve navigatie:
- Threshold: `[0.25, 0.5, 0.75]`
- Root margin: `-20% 0px -40% 0px`
- Automatische active section updates

### Scroll Progress Calculation
Dynamische progress berekening gebaseerd op actieve sectie:
```typescript
const progress = useMemo(() => {
    const idx = sections.findIndex((s) => s.id === activeSection);
    if (idx < 0 || sections.length <= 1) return 0;
    return idx / (sections.length - 1);
}, [activeSection]);
```

### Framer Motion Scroll Animations
Scroll-based transforms voor project detail pagina:
- Image opacity fade
- Image scale transform
- Image Y position transform

### Smart Text Parsing
Intelligente parsing van project beschrijvingen:
- Detecteert subtitels (korte regels zonder leestekens)
- Groepeert bullet points in lists
- Formatteert paragrafen automatisch

## 📄 License

Dit project is privé en voor persoonlijk gebruik.

## 👤 Auteur

**Doaa Altair**
- Front-end Developer uit Tilburg, Nederland
- Email: altair.doaa1994@hotmail.com
- LinkedIn: [doaa-altair](https://www.linkedin.com/in/doaa-altair)
- GitHub: [DoaaAltair](https://github.com/DoaaAltair)
- Vercel: [doaa1devs-projects](https://vercel.com/doaa1devs-projects)

## 🙏 Acknowledgments

- **Next.js team** voor het geweldige framework
- **Tailwind CSS** voor de utility-first approach
- **Framer Motion** voor soepele animaties
- **Google Fonts** voor Manrope font
- **React team** voor de krachtige UI library

