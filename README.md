README.md

# React E-Commerce Frontend

A **production-ready e-commerce frontend** built with React, Redux Toolkit, React Router, and styled-components. This project demonstrates a **real-world frontend workflow** including product listing, product details, cart management, and a checkout flow with mock payment. The cart state persists using `localStorage`.

---

## Live Preview

_(Optional: Add your deployed URL if hosted on Netlify, Vercel, or GitHub Pages)_

---

## Tech Stack

- **React** (Functional Components, Hooks)
- **Redux Toolkit** (Global state management, slices, async thunks)
- **React Router** (Routing between pages)
- **styled-components** (CSS-in-JS styling)
- **localStorage** (Cart persistence)
- **Fake Store API** (Mock product data)

---

## 📁 Folder Structure

```
ecommerce-frontend/
├─ public/
├─ src/
│ ├─ app/
│ │ └─ store.js
│ ├─ features/
│ │ ├─ products/
│ │ │ └─ productsSlice.js
│ │ └─ cart/
│ │ └─ cartSlice.js
│ ├─ components/
│ │ ├─ CategoryFilter.jsx
│ │ ├─ Layout.jsx
│ │ ├─ Navbar.jsx
│ │ ├─ ProductCard.jsx
│ │ └─ SkeletonGrid.jsx
│ ├─ pages/
│ │ ├─ ProductList.jsx
│ │ ├─ ProductDetails.jsx
│ │ ├─ Cart.jsx
│ │ └─ Checkout.jsx
│ ├─ styles/
│ │ └─ theme.js
│ ├─ utils/
│ │ └─ localStorage.js
│ ├─ App.jsx
│ ├─ App.css
│ ├─ index.css
│ └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
├─ eslint.config.js
└─ README.md
```

---

## Features

- **Product Listing** – Grid display of all products from Fake Store API with add-to-cart buttons
- **Product Details** – Dedicated page for viewing product information with styled layout
- **Shopping Cart** – Manage cart items, update quantities, remove items, and view total
- **Checkout** – Mock payment flow with confirmation modal
- **Redux State Management** – Global cart and products state with Redux Toolkit
- **Cart Persistence** – localStorage integration for persistent cart data
- **Styled Components** – Modern CSS-in-JS styling with theme support
- **Responsive Design** – Works seamlessly on mobile, tablet, and desktop
- **Error Handling** – Proper fetch error handling with user-friendly messages
- **Vite Build Tool** – Fast development and optimized production builds

---

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/my-ecommerce-app.git
cd my-ecommerce-app


Install dependencies

npm install


Run the app locally

npm run dev


The app will run at http://localhost:5173 (if using Vite) or http://localhost:3000 (if using Create React App).

Build for production

npm run build

🔧 Available Scripts

npm run dev – Start development server

npm run build – Build production bundle

npm run preview – Preview production build (Vite)

📌 Optional Improvements

Add user authentication & login

Implement real payment gateway (Stripe/PayPal)

Add product categories dynamically from API

Integrate backend for orders and inventory management

Add unit and integration tests (React Testing Library, Jest)

📝 Author

Oladapo Ajayi – GitHub @oladapo1986

📄 License

This project is MIT licensed.

```
