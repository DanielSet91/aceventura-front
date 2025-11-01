# 🐾 AceVentura Frontend

## **Project Overview**

AceVentura is a web application designed for veterinary clinics to manage animal records efficiently.  
This frontend client allows users to:

- Add and manage animals and their details
- Record and track events for each animal (visits, treatments, observations, etc.)
- Export all events for an animal as an Excel report
- Filter and search animals easily
- Enjoy a responsive and modern interface built with Material-UI

---

## 🚀 Getting Started

### ✅ Prerequisites

- Docker
- Git

### 📥 Installation (Docker)

```bash
git clone https://github.com/DanielSet91/aceventura-front
cd aceventura-frontend
docker-compose build
docker-compose up
```

> **Note:** Ensure a `.env` file exists in the project root with the necessary environment variables.

### 🌐 Environment Variables

Create a `.env` file if it doesn't exist:

```
VITE_API_BASE_URL=http://localhost:3000
```

---

## 🛠️ Tech Stack

| Layer    | Technology                |
| -------- | ------------------------- |
| Frontend | React, TypeScript, Vite   |
| UI       | Material-UI               |
| State    | Redux Toolkit + RTK Query |
| Styling  | CSS-in-JS (MUI sx)        |
| Build    | Vite                      |
| Linting  | ESLint, Prettier          |

---

## 📁 Project Structure

```
src/
 ├─ features/               # Pages and feature logic
 ├─ components/             # Common reusable components
 ├─ hooks/                  # Custom hooks (e.g., useToast)
 ├─ store/                  # Redux slices & RTK Query API
 ├─ context/                # React Contexts (ToastContext, ThemeContext)
 ├─ api/                    # API wrappers (get, post, etc.)
 └─ types/                  # TypeScript types and interfaces
```

---

## ⚠️ Known Limitations

- Excel export works but mobile download UX not fully optimized
- Search/filter is client-side only
- Pagination not implemented
- Responsive design could be further polished

---

## 📄 Scripts

| Command            | Description                                           |
| ------------------ | ----------------------------------------------------- |
| `npm run dev`      | Run dev server (for local development without Docker) |
| `npm run build`    | Build production bundle                               |
| `npm run lint`     | Check code formatting                                 |
| `npm run lint:fix` | Auto-fix formatting issues                            |

---

## 👨‍💻 Contribution

PRs and suggestions are welcome!  
Follow coding conventions, ESLint, and commit lint rules.
