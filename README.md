# 🚀 GitHub Issues Tracker

> A clean, responsive, and interactive issue tracking web application built with vanilla JavaScript, Tailwind CSS, and DaisyUI.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-555?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📌 Project Overview

**GitHub Issues Tracker** is a front-end web application that simulates a real-world issue management dashboard. It allows users to authenticate with demo credentials, view live issues fetched dynamically from a REST API, filter issues by status (All, Open, Closed), search issues by title, and inspect issue details inside an interactive modal.

---

## 🔐 Demo Credentials

To access the issues dashboard from the login page, use the following credentials:

| Field | Value |
| :--- | :--- |
| **Username** | `admin` |
| **Password** | `admin123` |

---

## ✨ Key Features

- **Authentication System:** Client-side form validation with pre-configured demo credentials.
- **Live REST API Integration:** Fetches real-time issues dynamically from the remote API endpoint.
- **Interactive Status Filtering:** Seamlessly toggle between **All**, **Open**, and **Closed** issues.
- **Instant Search:** Search issues by title or keyword dynamically.
- **Real-Time Issue Counter:** Live badge counter updating automatically according to the active filter and search result.
- **Detailed Modal View:** Click on any issue card to view full descriptions, author details, timestamps, and labels.
- **Priority Badges:** Visually clear badges indicating **High**, **Medium**, and **Low** priority issues.
- **Responsive Layout:** Beautiful modern design adapting cleanly across Mobile, Tablet, and Desktop screens.

---

## 🛠️ Technology Stack

- **Markup:** HTML5 (Semantic Structure)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI v5](https://daisyui.com/) (loaded via CDN)
- **Icons:** [Font Awesome 7](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css)
- **Logic & Interactions:** Vanilla JavaScript (ES6+)
- **Data Source:** REST API (`https://phi-lab-server.vercel.app/api/v1/lab/issues`)

---

## 📂 Project Structure

```text
├── assets/                  # Logos and image assets
├── js/
│   ├── home.js              # Issues fetching, filter, search, and modal handling
│   └── script.js            # Login validation and redirect logic
├── styles/
│   └── style.css            # Custom CSS styling and typography
├── home.html                # Main issues tracker dashboard interface
├── index.html               # Login / authentication landing page
├── tailwind.config.css      # Tailwind CSS configuration file
└── README.md                # Project documentation and assignment answers
```