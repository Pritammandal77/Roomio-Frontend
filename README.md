# 🏠 Roomio — Frontend

> **Find Your Perfect Roommate Based on Lifestyle**

Roomio is a smart roommate-finder platform built for students and working professionals across India. It helps users discover compatible flatmates based on habits, lifestyle, and daily routines — with zero brokerage and direct in-app communication.

🔗 **Live at:** [roomio.living](https://www.roomio.living)

---

## ✨ Features

- **Smart Lifestyle Matching** — Match with housemates based on habits, cleanliness, sleep schedule, food preferences, and more
- **Browse & Filter Listings** — Explore rooms and flats with advanced filters (location, budget, lifestyle preferences)
- **List Your Space** — Easily post a room or flat with photos, facilities, and preferred tenant profile
- **In-App Real-Time Chat** — Communicate directly with seekers or listers via Socket.IO-powered messaging
- **Verified Profiles** — User verification for a safer, spam-free experience
- **Smooth Animations** — Fluid UI transitions powered by Framer Motion
- **Toast Notifications** — Instant feedback via Sonner
- **Vercel Analytics** — Built-in performance and traffic insights

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework (App Router) |
| **React 19** | UI library |
| **TypeScript** | Type-safe development |
| **Tailwind CSS v4** | Utility-first styling |
| **Redux Toolkit + React-Redux** | Global state management |
| **Axios** | HTTP client for API calls |
| **Socket.IO Client** | Real-time chat & notifications |
| **Framer Motion** | Animations & transitions |
| **Lucide React** | Icon library |
| **Sonner** | Toast notifications |
| **date-fns / Day.js** | Date formatting utilities |
| **@formspree/react** | Contact form handling |
| **Vercel Analytics** | Usage analytics |

---

## 📁 Project Structure

```
Roomio-Frontend/
├── public/            # Static assets
├── src/               # Application source code
├── next.config.ts     # Next.js configuration
├── tsconfig.json      # TypeScript configuration
├── eslint.config.mjs  # ESLint configuration
├── postcss.config.mjs # PostCSS / Tailwind configuration
└── package.json       # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Pritammandal77/Roomio-Frontend.git
cd Roomio-Frontend

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 🌐 Environment Variables

Create a `.env.local` file in the root directory and configure your backend API URL and any other required keys:

```env
NEXT_PUBLIC_API_URL=<your_backend_api_url>
```

> ⚠️ Never commit `.env.local` to version control.

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🔗 Related

- **Backend Repository:** *(link to Roomio backend repo if available)*
- **Live App:** [https://www.roomio.living](https://www.roomio.living)

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is private. All rights reserved © 2026 Roomio.

---

<p align="center">Made with ❤️ by <a href="https://github.com/Pritammandal77">Pritam Mandal</a></p>
