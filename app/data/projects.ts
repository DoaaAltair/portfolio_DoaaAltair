export type Project = {
    slug: string;
    title: string;
    subtitle?: string;
    description: string;
    logo: string;
    image: string;
    tech: Array<"HTML" | "CSS" | "JS" | "React">;
    liveHref?: string;
    moreHref?: string;
};

export const allProjects: Project[] = [
    {
        slug: "easter-egg",
        title: "Easter Egg",
        description: `Beschrijving:
        Dit project is een interactieve Easter Egg die op een speelse manier de overgang van Enorm naar Fightclub laat zien.
        Ik wilde iets maken dat niet alleen visueel sterk was, maar ook mensen even laat glimlachen.
        Door animatie, geluid en interactie te combineren, ontstaat er een kleine verrassing die de nieuwe merkidentiteit op een creatieve manier tot leven brengt.

        Doel van het project
        Mijn doel was om niet zomaar een animatie te maken, maar een ervaring.
        Een moment dat de gebruiker onverwacht ontdekt — alsof je per ongeluk op iets klikt en ineens een verborgen verhaal vindt.
        Die nieuwsgierigheid en verrassing wilde ik gebruiken om de overgang tussen twee merken voelbaar te maken, in plaats van alleen zichtbaar.

        De focus lag op:
        De merkverandering op een creatieve manier communiceren
        Gebruikers nieuwsgierig maken en laten interageren
        Een vloeiende, lichte animatie bouwen zonder afhankelijk te zijn van frameworks

        Mijn ontwerpkeuzes
        Ik wilde dat dit project echt speelde met interactie. Daarom koos ik ervoor om het niet te presenteren als een video, maar als iets dat reageert op wat je doet.
        Het vliegende Enorm-logo dat wordt geraakt door een bokshandschoen staat symbool voor de energie en kracht van Fightclub.
        De overgang voelt letterlijk als een ‘klap’ richting een nieuw, krachtiger merk.
        De animatie is bewust licht en dynamisch, zonder chaotisch te worden — ik zocht de balans tussen professioneel en speels.
        Kleine details zoals geluidseffecten en confetti geven het einde een feestelijk gevoel en maken het moment echt af.

        Technische keuzes
        Ik heb het project helemaal met pure HTML, CSS en JavaScript gebouwd, omdat ik volledige controle wilde over de animaties en performance.
        Dat gaf me ook de kans om alles echt vanaf nul te begrijpen.

        Ik gebruikte onder andere:
        Canvas Confetti voor het slotmoment
        HTML5 Audio API voor de punch- en cheers-geluiden
        CSS keyframes voor vloeiende bewegingen
        Event listeners voor alle interacties
        Door alles handmatig te bouwen, leerde ik hoe DOM-manipulatie en CSS-transities samenwerken om iets kleins echt tot leven te brengen.

        Wat ik heb geleerd
        Dit project was klein, maar ik heb er enorm veel van geleerd.
        Ik leerde hoe belangrijk micro-interacties zijn voor de gebruikerservaring, hoe je animaties vloeiend en snel houdt op verschillende browsers, en hoe geluid en beweging samen emotie kunnen oproepen.
        Ook ontdekte ik hoe een simpel idee — een verborgen animatie — kan uitgroeien tot een krachtig middel om een merkverhaal te vertellen.
        Het is precies dat soort creatieve, speelse projecten die me herinneren waarom ik graag digitale ervaringen maak.`,
        logo: "enormlogovleugels.png",
        image: "enorm.png",
        tech: ["React", "JS", "HTML", "CSS"],
        liveHref: "https://easter-eggs-beta.vercel.app/",
        moreHref: "https://github.com/DoaaAltair/Easter-Eggs",
    },
    {
        slug: "yahtzee-spel",
        title: "Yahtzee Spel",
        description: `Beschrijving:
        Een moderne, interactieve webapplicatie van het klassieke dobbelspel Yahtzee, gebouwd met React. De app biedt een soepele spelervaring met automatische scoreberekening, gebruikerslogin en responsief design — ideaal om mijn kennis van frontendlogica, state management en UI-design te demonstreren.

        Waarom dit project?
        Ik koos dit project omdat ik zowel logica als design wilde combineren. Yahtzee is een spel met veel regels, wat het ideaal maakte om state management, componentstructuur en dataopslag te oefenen.
        Daarnaast wilde ik een volledige gebruikersflow maken — van login tot scorepagina — om te laten zien dat ik complete webapplicaties kan ontwikkelen met een focus op gebruiksvriendelijkheid en structuur.

        Belangrijkste Features
        Volledig functioneel dobbelspel – werp, houd vast en bereken automatisch de scores.
        Real-time scoreweergave – alle Yahtzee-categorieën worden live bijgewerkt.
        Inloggen en gebruikersprofiel – gebruikers kunnen hun spelstatus opslaan via localStorage.
        Responsive design – werkt vloeiend op desktop, tablet en mobiel.
        Intuïtieve navigatie – overzichtelijke structuur met React Router.
        Atomatische spelopslag – voortgang blijft behouden bij herladen.

        Gebruikte Technologieën
        Technologie	Gebruik
        React 19.0	Component-based UI en logica
        React Router 7.6	Pagina-navigatie
        Context API	Gebruikersauthenticatie
        CSS3 / Custom Properties	Styling en animaties
        LocalStorage API	Opslag van spelstatus
        Create React App	Build & ontwikkelomgeving
        Ontwerpkeuzes

        Ik koos voor een minimalistische interface met zachte contrasten en speelse dobbelsteen-iconen om het thema van het spel te behouden.
        De layout is bewust duidelijk en intuïtief, met hover-animaties en subtiele overgangen voor een moderne look.
        De focus lag op toegankelijkheid en visuele consistentie, met een design dat aansluit bij moderne webstandaarden.

        Toekomstige Verbeteringen
        Multiplayer-modus voor real-time spel met vrienden
        Geluidseffecten bij worpen en scores
        Persoonlijke statistieken en thema’s
        Online opslag van gebruikersdata

        Reflectie
        Dit project hielp me mijn kennis van React-logica, state management en user experience design te versterken.
        Het combineren van spelmechanica en visueel ontwerp gaf me inzicht in hoe frontendontwikkeling zowel technisch als creatief kan zijn.`,
        logo: "yahtzee-logo.png",
        image: "yahtzee.png",
        tech: ["React", "JS", "HTML", "CSS"],
        liveHref: "https://yahtzee-spel.vercel.app/",
        moreHref: "https://github.com/DoaaAltair/yahtzee-spel",
    },
    {
        slug: "bakkerij-webshop",
        title: "Bakkerij Webshop",
        description: "Een functionele en moderne website voor de fictieve bakkerij De Gouden Korst. Ontworpen met een warme huisstijl in goud en bruin, en gebouwd met HTML, CSS en JavaScript. Inclusief interactieve productpagina's en contactformulier.",
        logo: "bakker-logo.png",
        image: "bakker.png",
        tech: ["React", "JS", "HTML", "CSS"],
        liveHref: "https://de-gouden-korst.vercel.app/",
        moreHref: "https://github.com/DoaaAltair/De-Gouden-Korst",
    },
    {
        slug: "paturain-website",
        title: "Paturain Website",
        description: "Een interactieve game-ervaring gebouwd met React en TypeScript. Bestuur de Paturain-auto, ontwijk obstakels en verzamel bonuspunten in een dynamische race vol geluidseffecten en uitdagingen.",
        logo: "paturain.png",
        image: "paturain.png",
        tech: ["React", "JS", "HTML", "CSS"],
        liveHref: "https://paturain-play-palace.vercel.app/",
        moreHref: "https://github.com/DoaaAltair/paturain-play-palace",
    },
    {
        slug: "biljarttafel",
        title: "Biljarttafel",
        description: `Beschrijving:
        Dit project maakte ik tijdens mijn JavaScript-cursus. In het begin was het heel simpel, alleen met de basisfuncties en een opslaan-knop. Na de cursus wilde ik het beter maken, dus heb ik zelf meer functies toegevoegd — zoals botsingen, kracht opbouwen en animaties — zodat het echt aanvoelt als een interactieve biljarttafel. Het project was eerst niet responsief, maar ik heb dat later zelf verbeterd. Ik heb dit spel gebouwd met HTML, CSS en JavaScript, zonder frameworks. Daarmee heb ik veel geleerd over hoe beweging, botsingen en animaties werken in Canvas. Het was een leuk project om te doen, en ik ben trots dat iets wat begon als een kleine oefening is uitgegroeid tot een echt speelbaar spel.

        Doel van het project
        Mijn doel was om te ontdekken hoe ver ik kon gaan met alleen native webtechnologieën — zonder frameworks of game engines. Ik wilde leren hoe ik met Canvas, JavaScript en een beetje wiskunde realistische bewegingen en botsingen kon simuleren. Daarnaast wilde ik een spel maken dat gewoon lekker speelt: iets kleins, maar technisch uitdagends dat laat zien dat ik zowel logica als design begrijp.

        De focus lag op:
        Realistische bewegingen met botsingen, wrijving en stuiters
        Gebruiksvriendelijke bediening, met muis én touch
        Een sfeervol ontwerp dat echt aanvoelt als een klassieke biljarttafel

        Mijn ontwerpkeuzes
        Voor het design wilde ik de echte sfeer van een biljartzaal oproepen — een groene tafel, houten rand en goudkleurige knoppen met subtiele schaduwen. Ik koos bewust voor een eenvoudige interface: starten, pauzeren, opslaan, laden — alles duidelijk zichtbaar en direct bruikbaar. Tijdens het mikken verschijnt een visuele keu met een krachtindicator, wat zorgt voor een intuïtieve ervaring. Bij het opstarten verschijnt een kort instructiepaneel dat vanzelf weer verdwijnt, zodat de speler meteen weet wat hij moet doen zonder afleiding. De responsive versie was een belangrijk leerpunt: ik heb de canvas en UI aangepast zodat het ook soepel werkt op mobiele schermen en tablets.

        Technische keuzes
        Dit project draait volledig op de HTML5 Canvas API. Alle bewegingen, botsingen en animaties worden in real-time berekend met JavaScript. De game tekent zichzelf steeds opnieuw met setInterval(drawCanvas, 10), wat neerkomt op ongeveer 100 frames per seconde.

        Belangrijke technieken:
        Canvas rendering voor dynamische updates
        Collision detection voor balinteractie
        Event listeners voor muis- en touch-besturing
        Data-opslag via localStorage
        Responsive layout voor verschillende schermformaten

        Door alles handmatig te bouwen, kreeg ik beter inzicht in gamephysics en DOM-manipulatie, maar ook in performance-optimalisatie en het efficiënt updaten van canvas-elementen.

        Wat ik heb geleerd
        Dit project was een echte eye-opener. Ik leerde niet alleen hoe Canvas werkt, maar ook hoe belangrijk gevoel is bij interactieve projecten. De juiste snelheid, frictie of botsingshoek kan het verschil maken tussen een stroeve simulatie of een soepel, geloofwaardig spel.

        Ik heb geleerd om:
        Fysica te combineren met design voor realistische gameplay
        Code te optimaliseren voor verschillende schermformaten
        Kleine interacties betekenis te geven via animatie en feedback
        Efficiënt te werken met native webtechnologieën

        Wat begon als een kleine cursusopdracht, groeide uit tot iets waar ik trots op ben — een interactieve biljarttafel die niet alleen technisch klopt, maar ook echt speels en uitnodigend aanvoelt.`,
        logo: "Biljarttafel-logo.png",
        image: "biljardtafel.png",
        tech: ["JS", "HTML", "CSS"],
        liveHref: "https://biljarttafel.vercel.app/",
        moreHref: "https://github.com/DoaaAltair/biljarttafel",
    },
    {
        slug: "elite-home",
        title: "Elite Home",
        description: "Een moderne website voor een interieurbedrijf, met nadruk op UI-animaties.",
        logo: "elitehome.png",
        image: "elite-home.png",
        tech: ["React", "JS", "HTML", "CSS"],
        liveHref: "#",
        moreHref: "#",
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return allProjects.find(project => project.slug === slug);
}

