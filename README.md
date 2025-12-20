# DevOpzz - A Dynamic Developer & Artist Portfolio

This is a personal portfolio website for Pranav S Prasad, professionally known as "DevOpzz". It was built using Next.js, TypeScript, and Tailwind CSS, and features an interactive and engaging user interface to showcase both software development projects and digital artwork. The site is enhanced with 3D animations and generative AI capabilities.

## Live Demo

**(You can add your live Vercel/Firebase deployment link here after hosting it!)**

## Features

- **Interactive 3D Background:** A dynamic, animated starfield background that responds to mouse movement and scrolling, built with `three.js`.
- **Dual-Focus Showcase:** The layout is split into two main sections:
    - **Developer Section:** Features a profile summary, social links, an interactive 3D visualization of the tech stack, and a list of featured software projects.
    - **Artist Section:** A gallery showcasing digital art and photography with a unique floating animation effect.
- **Engaging 3D Card Effects:** Project and art cards have interactive 3D effects on hover, creating a more immersive user experience.
- **Dynamic Typewriter Effect:** The main header uses a typewriter animation to introduce the developer's name and roles.
- **Multi-Theme System:** A theme switcher in the header allows users to toggle between **light** and **dark** modes, and choose from multiple professional color palettes (`slate`, `green`, and `zinc`).
- **Contact Form:** A functional contact form that opens the user's default email client, pre-filled with the message details.
- **Responsive Design:** The entire website is fully responsive and optimized for viewing on desktops, tablets, and mobile devices.

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) 15 (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [ShadCN/UI](https://ui.shadcn.com/) for components.
- **3D Graphics:** [Three.js](https://threejs.org/) / `react-three-fiber`
- **Animations:** `framer-motion` for UI animations and custom CSS keyframes.
- **Forms:** `react-hook-form` with `zod` for validation.
- **AI & Generative Features:** [Google's Gemini model](https://ai.google.dev/) via [Genkit](https://firebase.google.com/docs/genkit).
- **Deployment:** Ready for deployment on platforms like [Vercel](https://vercel.com) or [Firebase App Hosting](https://firebase.google.com/docs/app-hosting).

## Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your Google AI Studio API key:
    ```
    GEMINI_API_KEY="YOUR_API_KEY_HERE"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.
