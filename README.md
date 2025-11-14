# Portfolio Syntax – React Frontend

Portfolio-Seite von **Kerem Kale** auf Basis von React + Vite.  
Inhalte kommen aus einer JSON-Datei und können ohne Backend angepasst werden.

---

## 1. Voraussetzungen

- Node.js ≥ 18  
- npm (wird mit Node installiert)  
- Git (für Clone/Pull)

Versionen prüfen:

```bash
node -v
npm -v
```

---

## 2. Installation

Repository klonen und Abhängigkeiten installieren:

```bash
git clone git@github.com:caravaggio06/portfolio-syntax.git
cd portfolio-syntax

npm install
```

---

## 3. Entwicklung

### 3.1 Dev-Server (lokal)

```bash
npm run dev
```

Vite zeigt eine URL, z. B.:

```text
http://localhost:5173/
```

Im Browser öffnen.

### 3.2 Zugriff aus dem LAN (z. B. Laptop → VM)

Einmalig mit explizitem Host:

```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

Vom Laptop aus die IP der VM verwenden:

```text
http://<VM-IP>:5173/
```

Beispiel:

```text
http://192.168.0.206:5173/
```

Falls eine Firewall aktiv ist (UFW):

```bash
sudo ufw allow 5173/tcp
```

---

## 4. Projektstruktur

Wichtige Dateien und Ordner:

```text
public/
  images/                 # Bilder (Portrait, Projektbilder)
  data/
    portfolio.json        # Inhalte der Seite

src/
  App.jsx                 # Hauptkomponente, lädt JSON-Daten
  main.jsx                # Einstiegspunkt, React Root
  index.css               # Basis-Styles (Body, Hintergrund)
  portfolio.css           # Design-Styles (Cards, Orbs, Tags)

  components/
    Layout.jsx            # Grundlayout mit Hintergrund-Orbs
    Navbar.jsx            # Navigation mit Ankerlinks
    Section.jsx           # Section-Wrapper mit Headline
    Card.jsx              # Glassmorphism-Karte (nutzt .card-glass)
    Tag.jsx               # Tag/Pill-Komponente (nutzt .tag-pill)
    Button.jsx            # Button/Link mit Gold-Akzent

  sections/
    Hero.jsx              # Hero mit Portrait, Claim, Socials
    Projects.jsx          # Projektliste (Cards, Tags)
    Skills.jsx            # Skill-Chips
    Experience.jsx        # Berufserfahrung / Timeline
    Contact.jsx           # Kontaktbereich + Frontend-Form
```

`index.html` nutzt Tailwind über das CDN und bindet `src/main.jsx` ein.  
Globales CSS liegt in `src/index.css`, zusätzliche Design-Klassen in `src/portfolio.css`.

---

## 5. Inhalte anpassen (JSON-getrieben)

Alle sichtbaren Inhalte liegen in:

```text
public/data/portfolio.json
```

Beispielstruktur:

```json
{
  "name": "Kerem Kale",
  "role": "Senior Fullstack Developer / IT-Consultant",
  "tagline": "Ich baue robuste Webplattformen mit PHP, JavaScript und moderner Infrastruktur.",
  "location": "Wiesbaden, Deutschland",
  "portrait": "/images/kerem-portrait.jpg",
  "socials": [
    { "label": "GitHub", "href": "https://github.com/caravaggio06" },
    { "label": "E-Mail", "href": "mailto:kerem.kale@hotmail.de" }
  ],
  "skills": [
    "PHP 8.3+",
    "Laravel 12",
    "Symfony",
    "Drupal 6–11",
    "TYPO3 v12",
    "React",
    "React Native",
    "Vue",
    "Angular",
    "Tailwind CSS",
    "SCSS",
    "Docker",
    "DDEV",
    "Proxmox",
    "GitHub Actions",
    "GitLab CI/CD",
    "MySQL/MariaDB",
    "REST APIs",
    "OAuth2 / JWT"
  ],
  "projects": [
    {
      "title": "MyFightingStyle – Kampfsport Analyse-App",
      "desc": "React Native + Expo App mit Analyse-Engine, Radar-Charts und personalisierten Trainingstipps.",
      "tags": ["React Native", "Expo", "TypeScript"],
      "link": "#",
      "image": "/images/myfightingstyle.jpg"
    },
    {
      "title": "MatchMakingApp – Fighter/Promoter Plattform",
      "desc": "Laravel-Webplattform mit Rollenmodell, Events, Bewerbungen und Stripe-Paywall für Fighter und Promoter.",
      "tags": ["Laravel 12", "Tailwind", "Stripe Checkout"],
      "link": "#",
      "image": "/images/matchmakingapp.jpg"
    }
  ],
  "experience": [
    {
      "when": "2024 – heute",
      "title": "Systemadministrator",
      "org": "Hochschule Darmstadt",
      "desc": "TYPO3 v12, Linux-Server, Proxmox, Docker/DDEV."
    },
    {
      "when": "2020 – 2023",
      "title": "Frontend Entwickler",
      "org": "Jung, DMS & Cie. AG",
      "desc": "Enterprise-Frontend mit Symfony, Angular und GitLab CI/CD."
    }
  ],
  "contact": {
    "email": "kerem.kale@hotmail.de",
    "phone": "+49 176 72183329"
  }
}
```

### 5.1 Portrait und Projektbilder

- Dateien unter `public/images/` ablegen.
- Pfade in `portfolio.json` setzen, z. B.:

```json
"portrait": "/images/kerem-portrait.jpg"
```

oder

```json
"image": "/images/matchmakingapp.jpg"
```

Alles unter `public/` wird von Vite statisch ausgeliefert.

---

## 6. Styling

Das Projekt verwendet:

- Tailwind CSS per CDN in `index.html`
- Utility-Klassen direkt in den JSX-Komponenten
- Zusätzliche Design-Klassen in `src/portfolio.css`

Beispiele:

- `card-glass`: Glassmorphism-Karte (Box-Shadow, Border, Blur)
- `tag-pill`: Pill/Chip für Skills und Tags
- `glow-orb-top`, `glow-orb-bottom`: Hintergrund-Orbs im Layout

Diese Klassen werden in den Komponenten (`Layout`, `Card`, `Tag`) bereits genutzt und können bei Bedarf erweitert werden.

---

## 7. Build & Preview

### 7.1 Produktionsbuild erstellen

```bash
npm run build
```

Der Build liegt anschließend in:

```text
dist/
```

### 7.2 Build lokal testen

```bash
npm run preview
```

Vite startet einen Preview-Server (Standard-Port 4173):

```text
http://localhost:4173/
```

---

## 8. Deployment als statische Seite

Der Inhalt von `dist/` ist ein reines statisches Bundle (HTML, JS, CSS).  
Mögliche Hosting-Varianten:

- Nginx / Apache (VirtualHost auf `dist/`)
- GitHub Pages
- Netlify / Vercel (Static Deploy)
- Beliebiger S3-/Object-Storage mit Static Website Hosting

Beispiel für einen minimalen Nginx-Server-Block:

```nginx
server {
    listen 80;
    server_name example.com;

    root /var/www/portfolio-syntax/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
```

Nginx neu laden, `dist`-Ordner deployen, Domain auf den Server zeigen.

---

## 9. Linting / Tests

Aktuell sind keine zusätzlichen Lint- oder Test-Skripte konfiguriert.  
Die Vite-Basis kann bei Bedarf um ESLint, Vitest oder Jest erweitert werden.
