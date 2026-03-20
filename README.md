# nextjs-project-template-basic

This project was bootstrapped with a custom "Bleeding Edge" template.

## ⚡ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19 (RC)
- **Styling:** Tailwind CSS v4.0 (CSS-first configuration)
- **Language:** TypeScript
- **Icons:** Lucide React

## 📂 Project Structure

- `src/middleware.ts`: Handles Basic Auth for `/admin` routes.
- `src/api/client.ts`: Generic fetch wrappers (`get`, `post`, `patch`, `put`, `remove`) with centralized error handling.
- `src/components/ui/`: Contains reusable UI components like `Button` and `Input`.
- `src/lib/types.ts`: Shared TypeScript interfaces.
- `src/lib/utils/`: Contains generic utility functions like `cn`.

## 🚀 Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Link Git

To link this project to your git repository follow these steps:

1. **Link to Remote Repository:**
   *(Create a new empty repo on GitHub first, then replace URL below)*
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/nextjs-project-template-basic.git
   ```

2. **Push:**
   ```bash
   git push -u origin main
   ```
