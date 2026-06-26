export type Project = {
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
};

export const allProjects: Project[] = [
    {
        slug: "easter-egg",
        title: "Easter Egg",
        shortDescription: "Interactieve easter egg die de rebrand van Enorm naar Fightclub laat zien met animatie, audio en confetti.",
        description: `Beschrijving

Dit project is een interactieve Easter Egg die op een speelse manier de overgang van Enorm naar Fightclub visualiseert.
Ik wilde een ervaring maken die mensen verrast iets dat niet alleen mooi oogt, maar ook een glimlach oproept.
Door animatie, geluid en interactie te combineren, ontstaat een kleine ontdekking die de nieuwe merkidentiteit op een levendige en onverwachte manier laat voelen.

Doel van het project

Mijn doel was om niet simpelweg een animatie te tonen, maar om een moment te ontwerpen een verborgen interactie die je zelf activeert.
Dat onverwachte element versterkt de merkverandering: de overgang wordt niet alleen gezien, maar ervaren.

Daarom lag mijn focus op:

• De merkverandering creatief en speels communiceren

• Gebruikers prikkelen om te klikken, ontdekken en interageren

• Een lichte, vloeiende animatie bouwen die soepel draait zonder frameworks

Ontwerpkeuzes

Ik koos bewust voor een interactieve benadering in plaats van een statische video. Interactie zorgt ervoor dat de gebruiker zelf onderdeel wordt van het moment.

Het vliegende Enorm-logo en de bokshandschoen staan symbool voor de "klap" richting een krachtiger merk Fightclub.

De animatiestijl is bewust luchtig en dynamisch, zodat het speels voelt zonder rommelig te worden.

Geluidseffecten en confetti vormen het slotmoment en geven een klein gevoel van beloning; zo voelt de overgang afgerond en feestelijk.

Elke keuze draagt bij aan het vertellen van het merkverhaal op een manier die toegankelijk en plezierig is.

Technische keuzes

Ik besloot het project volledig in pure HTML, CSS en JavaScript te bouwen.
De reden daarvoor was heel bewust: ik wilde maximale controle over de animaties, performance en timing, zonder afhankelijk te zijn van externe libraries of frameworks.

Technisch koos ik voor:

• Canvas Confetti voor het feestelijke eindmoment omdat dit lightweight is en direct reageert op interactie

• HTML5 Audio API om punch en cheers geluiden precies te timen met de bewegingen

• CSS keyframes om animaties vloeiend en consistent te houden

• Event listeners voor alle interacties, zodat elke klik direct wordt vertaald naar een reactie op het scherm

Door het "from scratch" op te bouwen, begreep ik precies hoe DOM-manipulatie, animatiecurve en audio-sync samen een overtuigende ervaring vormen.

Wat ik heb geleerd

Dit kleine project heeft me veel inzicht gegeven in hoe micro-interacties de totale gebruikerservaring kunnen versterken.
Ik leerde:

• Hoe je animaties performant houdt in verschillende browsers

• Hoe geluid subtiel emotie toevoegt aan een interactie

• Hoe je met kleine details een verhaal krachtiger maakt

• Hoe een simpel verborgen idee kan uitgroeien tot een herkenbaar, speels merk-moment

Dit soort projecten herinneren me eraan waarom ik graag digitale ervaringen bouw: ze combineren techniek, creativiteit en beleving op een manier die mensen echt raakt.`,
        logo: "enormlogovleugels.png",
        image: "enorm.png",
        tech: ["HTML", "CSS", "JavaScript", "Canvas", "Audio API", "CSS Animations"],
        liveHref: "https://easter-eggs-beta.vercel.app/",
        moreHref: "https://github.com/DoaaAltair/Easter-Eggs",
    },
    {
        slug: "yahtzee-spel",
        title: "Yahtzee Spel",
        shortDescription: "Moderne Yahtzee webapp met automatische scores, login en responsive UI in React.",
        description: `Beschrijving

Een moderne, interactieve webapplicatie van het klassieke dobbelspel Yahtzee, gebouwd met React. De app biedt een soepele spelervaring met automatische scoreberekening, gebruikerslogin en responsief design. Dit project is ideaal om mijn kennis van frontendlogica, state management en UI-design te demonstreren.

Waarom dit project?

Ik koos dit project omdat ik zowel logica als design wilde combineren. Yahtzee is een spel met veel regels, wat het ideaal maakte om state management, componentstructuur en dataopslag te oefenen.

Daarnaast wilde ik een volledige gebruikersflow maken, van login tot scorepagina, om te laten zien dat ik complete webapplicaties kan ontwikkelen met een focus op gebruiksvriendelijkheid en structuur.

Belangrijkste Features

• Volledig functioneel dobbelspel: werp, houd vast en bereken automatisch de scores

• Real-time scoreweergave: alle Yahtzee-categorieën worden live bijgewerkt

• Inloggen en gebruikersprofiel: gebruikers kunnen hun spelstatus opslaan via localStorage

• Responsive design: werkt vloeiend op desktop, tablet en mobiel

• Intuïtieve navigatie: overzichtelijke structuur met React Router

• Automatische spelopslag: voortgang blijft behouden bij herladen

Gebruikte Technologieën

• React 19.0: Component-based UI en logica

• React Router 7.6: Pagina-navigatie

• Context API: Gebruikersauthenticatie

• CSS3 / Custom Properties: Styling en animaties

• LocalStorage API: Opslag van spelstatus

• Create React App: Build en ontwikkelomgeving

Ontwerpkeuzes

Ik koos voor een minimalistische interface met zachte contrasten en speelse dobbelsteen-iconen om het thema van het spel te behouden.

De layout is bewust duidelijk en intuïtief, met hover-animaties en subtiele overgangen voor een moderne look.

De focus lag op toegankelijkheid en visuele consistentie, met een design dat aansluit bij moderne webstandaarden.

Toekomstige Verbeteringen

• Multiplayer-modus voor real-time spel met vrienden

• Geluidseffecten bij worpen en scores

• Persoonlijke statistieken en thema's

• Online opslag van gebruikersdata

Reflectie

Dit project hielp me mijn kennis van React-logica, state management en user experience design te versterken.

Het combineren van spelmechanica en visueel ontwerp gaf me inzicht in hoe frontendontwikkeling zowel technisch als creatief kan zijn.`,
        logo: "yahtzee-logo.png",
        image: "yahtzee.png",
        tech: ["React", "JavaScript", "HTML", "CSS", "React Router", "Context API", "LocalStorage"],
        liveHref: "https://yahtzee-spel.vercel.app/",
        moreHref: "https://github.com/DoaaAltair/yahtzee-spel",
    },
    {
        slug: "biljarttafel",
        title: "Biljarttafel",
        shortDescription: "Canvas biljartgame met botsingen, krachtopbouw en responsive bediening.",
        description: `Beschrijving

Dit project maakte ik tijdens mijn JavaScript-cursus. In het begin was het heel simpel, alleen met de basisfuncties en een opslaan-knop. Na de cursus wilde ik het beter maken, dus heb ik zelf meer functies toegevoegd, zoals botsingen, kracht opbouwen en animaties, zodat het echt aanvoelt als een interactieve biljarttafel. Het project was eerst niet responsief, maar ik heb dat later zelf verbeterd. Ik heb dit spel gebouwd met HTML, CSS en JavaScript, zonder frameworks. Daarmee heb ik veel geleerd over hoe beweging, botsingen en animaties werken in Canvas. Het was een leuk project om te doen, en ik ben trots dat iets wat begon als een kleine oefening is uitgegroeid tot een echt speelbaar spel.

Doel van het project

Mijn doel was om te ontdekken hoe ver ik kon gaan met alleen native webtechnologieën, zonder frameworks of game engines. Ik wilde leren hoe ik met Canvas, JavaScript en een beetje wiskunde realistische bewegingen en botsingen kon simuleren. Daarnaast wilde ik een spel maken dat gewoon lekker speelt: iets kleins, maar technisch uitdagends dat laat zien dat ik zowel logica als design begrijp.

De focus lag op:

• Realistische bewegingen met botsingen, wrijving en stuiters

• Gebruiksvriendelijke bediening, met muis én touch

• Een sfeervol ontwerp dat echt aanvoelt als een klassieke biljarttafel

Mijn ontwerpkeuzes

Voor het design wilde ik de echte sfeer van een biljartzaal oproepen: een groene tafel, houten rand en goudkleurige knoppen met subtiele schaduwen. Ik koos bewust voor een eenvoudige interface: starten, pauzeren, opslaan, laden. Alles duidelijk zichtbaar en direct bruikbaar.

Tijdens het mikken verschijnt een visuele keu met een krachtindicator, wat zorgt voor een intuïtieve ervaring. Bij het opstarten verschijnt een kort instructiepaneel dat vanzelf weer verdwijnt, zodat de speler meteen weet wat hij moet doen zonder afleiding.

De responsive versie was een belangrijk leerpunt: ik heb de canvas en UI aangepast zodat het ook soepel werkt op mobiele schermen en tablets.

Technische keuzes

Dit project draait volledig op de HTML5 Canvas API. Alle bewegingen, botsingen en animaties worden in real-time berekend met JavaScript. De game tekent zichzelf steeds opnieuw met setInterval(drawCanvas, 10), wat neerkomt op ongeveer 100 frames per seconde.

Belangrijke technieken:

• Canvas rendering voor dynamische updates

• Collision detection voor balinteractie

• Event listeners voor muis- en touch-besturing

• Data-opslag via localStorage

• Responsive layout voor verschillende schermformaten

Door alles handmatig te bouwen, kreeg ik beter inzicht in gamephysics en DOM-manipulatie, maar ook in performance-optimalisatie en het efficiënt updaten van canvas-elementen.

Wat ik heb geleerd

Dit project was een echte eye-opener. Ik leerde niet alleen hoe Canvas werkt, maar ook hoe belangrijk gevoel is bij interactieve projecten. De juiste snelheid, frictie of botsingshoek kan het verschil maken tussen een stroeve simulatie of een soepel, geloofwaardig spel.

Ik heb geleerd om:

• Fysica te combineren met design voor realistische gameplay

• Code te optimaliseren voor verschillende schermformaten

• Kleine interacties betekenis te geven via animatie en feedback

• Efficiënt te werken met native webtechnologieën

Wat begon als een kleine cursusopdracht, groeide uit tot iets waar ik trots op ben: een interactieve biljarttafel die niet alleen technisch klopt, maar ook echt speels en uitnodigend aanvoelt.`,
        logo: "Biljarttafel-logo.png",
        image: "biljardtafel.png",
        tech: ["JavaScript", "HTML", "CSS", "Canvas", "LocalStorage"],
        liveHref: "https://biljarttafel.vercel.app/",
        moreHref: "https://github.com/DoaaAltair/biljarttafel",
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return allProjects.find((project) => project.slug === slug);
}

