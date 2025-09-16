# GSG ReactPro Ecommerce UI

> This project was built as part of the **[Gaza Sky Geeks](https://gazaskygeeks.com/) React Pro Training** program.

A modern, responsive e-commerce user interface built with React, TypeScript, and Vite. This project demonstrates best practices in UI/UX, component.
<!-- structure, and state management for online store frontends -->
## Features

- ⚡️ Fast development with Vite, React, and TypeScript
- 🛒 Product grid and list views with dynamic switching
- 📱 Fully responsive layout and sidebar (mobile drawer)
- 🎨 Styled with Tailwind CSS for easy customization
- 🧩 Modular, reusable components (Header, Sidebar, Product, etc.)
- 🔍 Filter sidebar with range sliders, categories, and more
- 🗂 Organized folder structure for scalability

## Tech Stack

- React 18+
- TypeScript
- Vite
- Tailwind CSS
- Heroicons

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173)

## Project Structure

```
src/
  assets/         # Images and static assets
  component/      # UI components (Product, Sidebar, Header, etc.)
    sidebar/      # Sidebar and filter components
    header/       # Header and navigation
    layout/       # Layout helpers
    ui/           # Typography and UI primitives
  constents/      # Static data (products, filters)
  lib/            # Utilities
  types/          # TypeScript types
  App.tsx         # Main app component
  main.tsx        # Entry point
```

## Customization

- Edit `src/constents/products.ts` to change product data.
- Edit `src/constents/filtersData.ts` to customize sidebar filters.
- Update Tailwind config for your branding.

## License

This project is for educational/demo purposes as part of the GSG React Pro training.  
Feel free to use and modify for your own learning or portfolio.
