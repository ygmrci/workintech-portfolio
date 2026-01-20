# Personal Portfolio Website

A modern, responsive, and multi-language personal portfolio website built with **React** and **Tailwind CSS**.  
This project showcases my frontend skills, design decisions, and component-based architecture.

---

## 🔁 Axios Demo

A payload is dynamically generated based on the selected language and sent via **Axios** as a **POST request** to a remote API deployed on **Render**.  
The response returned from the API is then displayed in the UI.

> ⚠️ **Note:**  
> The API is hosted on Render’s free plan.  
> Due to service sleep behavior, the first request may take a few seconds to respond.

---

## 🔗 Live Demo

_(Add your Vercel live link here)_

---

## 📂 GitHub Repository

👉 **https://github.com/ygmrci/portfolio**

---

## 🛠 Technologies Used

- React
- Vite
- Tailwind CSS
- Context API
- LocalStorage
- Axios (remote API demo)
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
- User preferences (language & theme) are persisted in **LocalStorage**
- Components consume only the required context values to prevent unnecessary re-renders

---

## 📱 Responsive Design Decisions

- Hero section is simplified on mobile screens for better readability
- Headline and social links are hidden on small screens to reduce visual noise
- Social links remain accessible via the footer on mobile devices
- Layout adapts using Tailwind breakpoints (`sm`, `md`, `lg`)
- Grid and Flexbox are combined for flexible and scalable layouts

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
