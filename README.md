# Personal Portfolio Website

A modern, responsive, and multi-language personal portfolio website built with **React** and **Tailwind CSS**.  
This project showcases my frontend skills, design decisions, and component-based architecture.

---

Axios Demo (Technical Showcase)
This section demonstrates client-side data submission using Axios and state management.

## 🔗 Live Demo

## 📂 GitHub Repository

👉 **https://github.com/ygmrci/portfolio**

---

## 🛠 Technologies Used

- React
- Vite
- Tailwind CSS
- Context API
- LocalStorage
- Axios (demo usage)
- Responsive Design (Grid & Flexbox)

---

## ✨ Features

- Fully responsive design (mobile, tablet, desktop)
- Dark / Light mode support
- Turkish 🇹🇷 & English 🇬🇧 language support (custom implementation)
- Global state management with Context API
- Persisted user preferences using LocalStorage
- Dynamic project listing
- Clean, accessible, and semantic UI structure

---

## 🧠 State Management

- Language and theme states are managed globally using **React Context API**
- User preferences (language & theme) are stored in **LocalStorage**
- Components consume only required context values to avoid unnecessary re-renders

---

## 📱 Responsive Design Decisions

- Hero section is simplified on mobile screens for better readability
- Headline and social links are hidden on small screens to reduce visual noise
- Social links are always accessible from the footer on mobile
- Layout adapts using Tailwind breakpoints (`sm`, `md`, `lg`)
- Grid and Flexbox are used together for flexible layouts

---

## 📁 Project Structure

```txt
src/
├── assets/
│   └── images/
├── components/
│   ├── hero/
│   ├── projects/
│   ├── skills/
│   └── footer/
├── context/
│   └── LanguageContext.jsx
├── data/
│   ├── data.tr.js
│   └── data.en.js
├── App.jsx
└── main.jsx
```
