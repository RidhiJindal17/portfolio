# Ridhi Jindal - Professional Portfolio

A premium, interactive portfolio website showcasing projects in **Cybersecurity**, **AI/ML Engineering**, and **Full-Stack Web Development**. Built with React, Vite, Tailwind CSS, Framer Motion, and EmailJS.

---

## 🚀 Live Demos & Deployment Links
* **Vercel Deployment:** [https://ridhijindalportfolio.netlify.app/](https://ridhijindalportfolio.netlify.app/)
* **GitHub Repository:** [https://github.com/RidhiJindal17](https://github.com/RidhiJindal17/portfolio)

---

## ✨ Features

- **Dynamic Interactive UI:** Modern dark/light theme toggle, custom cursor tracking, custom parallax section dividing waves, and smooth lenis scrolling.
- **AI/ML Showcase:** Dedicated projects displaying machine learning and semantic analysis integrations (LSTM, Sentence-BERT, LangChain).
- **Verified Cybersecurity Background:** Highlights of formal training from Quick Heal Academy and industry certification tracks.
- **Asynchronous Contact System:** Secure contact form utilizing EmailJS integration with strict front-end validation and robust error/success feedback states.
- **Performance Optimized:** Component lazy-loading using React Suspense, responsive asset optimization, and zero runtime layout shifts.
- **SEO & Social Sharing Ready:** Production-configured Open Graph (OG) tags, Twitter card meta descriptions, search engine metadata index, and standard-compliant favicon mapping.
- **Accessibility (WCAG Compliant):** Descriptive alt attributes, associated labels for form inputs (`htmlFor`/`id`), distinct interactive elements, and color-contrast friendliness.

---

## 🛠️ Tech Stack

- **Core:** React 19, JavaScript (ES6+), Vite 8
- **Styling:** Tailwind CSS 4, CSS Variables, Glassmorphism
- **Animations:** Framer Motion 12
- **Integrations:** EmailJS, React Icons
- **Scrolling & Backgrounds:** Lenis Scroll, TS Particles (slim package)

---

## 💻 Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/RidhiJindal17/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   - Copy the environment template:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and fill in your EmailJS credentials:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```

4. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 📦 Build & Preview

Before deploying, build the production version of the portfolio to test locally:

1. **Compile production bundle:**
   ```bash
   npm run build
   ```
2. **Preview the built assets:**
   ```bash
   npm run preview
   ```
   This will start a local server at `http://localhost:4173` to test the exact built production bundle.

---

## 🌐 Deployment

The project is structured and fully configured for immediate deployment to major hosting providers.

### 🔺 Deploying to Vercel

1. **Via Vercel Dashboard:**
   - Go to [Vercel.com](https://vercel.com/) and log in.
   - Click **Add New** > **Project** and import your portfolio repository.
   - Expand **Environment Variables** and add:
     * `VITE_EMAILJS_SERVICE_ID`
     * `VITE_EMAILJS_TEMPLATE_ID`
     * `VITE_EMAILJS_PUBLIC_KEY`
   - Click **Deploy**. Vercel will auto-detect Vite and set the build command to `npm run build` and output directory to `dist`.

2. **Via Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```
   Follow the CLI prompts, then configure environment variables inside the Vercel project dashboard.

### 🌌 Deploying to Netlify

1. **Via Netlify Dashboard:**
   - Go to [Netlify.com](https://www.netlify.com/) and log in.
   - Select **Import from Git** and choose your repository.
   - Ensure the Build settings are:
     * **Build command:** `npm run build`
     * **Publish directory:** `dist`
   - Go to **Site Configuration** > **Environment variables** > **Add variable** and set your EmailJS credentials.
   - Trigger a deploy.

2. **Via Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   netlify login
   netlify init
   ```

---

## 🔑 Environment Variables

The application relies on the following environment variables for form handling. Ensure they are configured properly in production.

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*Note: Environment variables prefixed with `VITE_` are automatically exposed to the client by Vite via `import.meta.env`.*

---

## 📂 Folder Structure

```
portfolio/
├── public/                 # Static assets
│   ├── favicon.svg         # Favicon icon
│   ├── icons.svg           # Sprite svg icons
│   └── resume.pdf          # Resume document
├── src/
│   ├── assets/             # Media and images
│   ├── components/         # Reusable UI sections
│   │   ├── About.jsx
│   │   ├── Contact.jsx     # Contact form with validation & EmailJS
│   │   ├── Hero.jsx        # Landing page introductory header
│   │   ├── Navbar.jsx      # Navigation links
│   │   ├── Projects.jsx    # Projects grid
│   │   └── ...
│   ├── data/               # Static data structures
│   ├── pages/              # Main routing layouts
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global custom CSS styles
│   └── main.jsx            # Application entrypoint
├── .env.example            # Environment variables example file
├── .gitignore              # Git ignore rules
├── vite.config.js          # Vite configurations
└── package.json            # Scripts & project dependencies
```

---

## 📬 Contact Information

Let's connect and build something secure and intelligent together:

- **GitHub:** [https://github.com/RidhiJindal17](https://github.com/RidhiJindal17)
- **LinkedIn:** [https://www.linkedin.com/in/ridhi-jindal-4835bb30b/](https://www.linkedin.com/in/ridhi-jindal-4835bb30b/)
- **Email:** [ridhijindalgupta@gmail.com](mailto:ridhijindalgupta@gmail.com)
