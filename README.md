# 🦸‍♂️ HERO App Store

🌐 **Live Site:** https://hero-app-store-mr.vercel.app
🗄️ **GitHub Repository:** https://github.com/SMDpHeroB12/Hero-App-Store-MR.git

---

## 📖 Project Overview

**HERO App Store** is a modern and responsive web application where users can explore, search, and install various applications.
It provides a clean UI, real-time search functionality, installation system with local storage, and detailed app insights including charts.

---

## 🚀 Features

### 🔹 Core Features

- Responsive design for all devices 📱💻
- Dynamic navigation with active route indication
- Home page with banner and trending apps
- App listing page with live search functionality
- App details page with full information

### 🔹 App Functionalities

- Install apps with localStorage support
- Prevent duplicate installations
- Uninstall apps with instant UI update
- Toast notifications for user actions

### 🔹 Advanced Features

- 📊 Interactive chart using Recharts
- 🔍 Live search (case-insensitive)
- ⏳ Loading animation (data & navigation)
- 📂 My Installation page
- 🔽 Sort apps by downloads (Low → High / High → Low)

---

## 🧱 Technologies Used

### 🎯 Frontend

- React (Vite)
- React Router
- Tailwind CSS v4
- DaisyUI

### 📊 Libraries

- Recharts (for charts)
- React Hot Toast (for notifications)
- React Icons

---

## 📂 Project Structure

```
src/
 ├── Components/
 ├── Pages/
 ├── Layouts/
 ├── Hooks/
 ├── Utils/
 ├── assets/
 ├── routes/
```

---

## 📊 Data Structure

Each app follows this structure:

```json
{
  "id": number,
  "title": "string",
  "image": "string",
  "companyName": "string",
  "description": "string",
  "size": number,
  "reviews": number,
  "ratingAvg": number,
  "downloads": number,
  "ratings": [
    { "name": "1 star", "count": number },
    { "name": "2 star", "count": number },
    { "name": "3 star", "count": number },
    { "name": "4 star", "count": number },
    { "name": "5 star", "count": number }
  ]
}
```

---

## 🎯 Challenges Implemented

- LocalStorage-based installation system
- Dynamic sorting by downloads
- Responsive chart visualization
- Smooth loading experience

---

## 👨‍💻 Author

**SHEKH MD NAYEM YOUSUF**
Junior Frontend Developer 🚀
