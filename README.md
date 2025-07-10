
# MockMentor

MockMentor is an AI-powered mock interview platform that helps users improve their communication and problem-solving skills through real-time voice interviews. Powered by Vapi AI and Firebase, it delivers personalized questions, tracks progress, and provides instant feedback—perfect for job seekers and developers preparing for tech interviews.

## Tech Stack
MockMentor is built using a modern full-stack web development stack:

### 🧑‍💻 Frontend
- **Next.js (App Router)** – Framework for server-side rendering and routing
- **React** – UI library for component-based structure
- **Tailwind CSS** – Utility-first styling for fast UI development
- **ShadCN UI** – Beautifully designed accessible UI components
- **Zod** – Type-safe schema validation for forms
- **React Hook Form** – Easy and performant form management

### 🔐 Authentication & Database
- **Firebase Auth** – Secure authentication using email/password
- **Firebase Firestore** – Real-time NoSQL cloud database

### 🎙️ Voice AI Integration
- **Vapi.ai** – AI voice agent for conducting interactive mock interviews

### 🛠️ Tooling & Deployment
- **TypeScript** – Static typing for scalable code
- **Vercel** – Hosting and CI/CD for seamless deployments
- **ESLint & Prettier** – Code linting and formatting
- **.env.local** – Environment-based configuration
## Features

🎤 **AI-Powered Voice Interviews**  
  Simulate real interviews with AI agents using Vapi for realistic back-and-forth voice interaction.

🧠 **Dynamic Question Generation**  
  Generates personalized technical and behavioral questions based on selected role, stack, and experience level.

🔐 **Secure Firebase Authentication**  
  Sign up and log in using email/password, secured via Firebase Auth.

📋 **Real-Time Feedback**  
  Get actionable insights after each mock interview to help you improve your answers and communication.

📊 **Interview History & Progress Tracking**  
  View past interviews and track your improvement over time.

🎨 **Responsive & Accessible UI**  
  Built with Tailwind CSS and ShadCN UI for a clean, modern, mobile-friendly design.

🌗 **Light & Dark Mode Toggle**  
  Switch themes seamlessly based on your system preferences or manually.

🚀 **Deployed & Scalable**  
  Easily scalable and deployed using modern tools like Vercel and Firebase.


## Demo

Insert gif or link to demo


## Installation

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)
### Cloning the Repository
``` bash
git clone https://github.com/Shreyxx75/mockmentor.git
cd mockmentor
```
### Installation

Install the project dependencies using npm:
``` bash
npm install
```
### Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:
```bash
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```
Replace the placeholder values with your actual Firebase, Vapi credentials.

### Running the Project
``` bash
npm run dev
```
Open http://localhost:3000 in your browser to view the project.
## Acknowledgements
- [JS Mastery](https://www.youtube.com/@jsmastery) – For the original inspiration and project walkthrough that helped kickstart MockMentor.
- [Vapi AI](https://vapi.ai) – For providing the cutting-edge voice AI technology that powers the interactive interview experience.
- [Firebase](https://firebase.google.com/) – For handling authentication and real-time database services with simplicity and scalability.
- [ShadCN UI](https://ui.shadcn.com) – For beautifully styled and accessible UI components.
- [Tailwind CSS](https://tailwindcss.com/) – For making it easy to build responsive and modern UIs quickly.
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) – For powerful form handling and validation.
- [Vercel](https://vercel.com/) – For effortless deployment and preview environments.

Special thanks to the open-source community and the countless developers whose tools, tutorials, and insights made this project possible.
## FAQs

### ❓ What is MockMentor?

MockMentor is an AI-powered mock interview platform that simulates real-time interviews using voice AI. It helps users improve both technical and behavioral responses by offering instant feedback and performance tracking.

---

### ❓ Is MockMentor free to use?

Yes, MockMentor is currently open-source and free for personal use and educational purposes. You can deploy it locally or fork the repo to customize it.

---

### ❓ How does the voice interview work?

MockMentor uses [Vapi.ai](https://vapi.ai) to power real-time conversations. When you start a mock interview, a voice agent asks AI-generated questions and listens to your spoken responses via your microphone.

---

### ❓ Do I need an account to use it?

Yes, authentication is required. You can sign up securely using Firebase Auth (email/password). Your interview history and performance data are saved to your personal dashboard.

---

### ❓ How are the interview questions generated?

Questions are dynamically created using prompt engineering techniques and passed to the voice AI. They’re tailored based on your selected role (e.g., frontend, backend), experience level, and domain.

---

### ❓ Can I customize the interview topics?

Currently, MockMentor lets you choose broad categories (like technical or behavioral). More granular customization (specific frameworks, soft skills, etc.) is part of the upcoming roadmap.

---

### ❓ Does MockMentor store or share my voice data?

No. Voice conversations happen in real-time via Vapi and are not stored by default. You are in control of your data. For extra security, review your browser's microphone permissions and Firebase rules.

---

### ❓ Can I deploy this app myself?

Absolutely. Just clone the repo, set your Firebase and Vapi credentials in a `.env.local` file, and run `npm run dev`. Check the Installation section for full setup instructions.

---

### ❓ Who is this app for?

- Developers preparing for technical interviews  
- Bootcamp students and CS grads practicing soft skills  
- Career switchers looking to improve communication  
- Anyone who wants to practice with voice-based mock interviews
