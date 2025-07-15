# 👜 Bag Store

A full-stack e-commerce web application built with **Node.js**, **Express**, **MongoDB**, and **EJS** for showcasing and selling bags online. It includes user authentication, dynamic product rendering, and admin features to manage inventory.

---

## 🚀 Features

- 🔐 User registration and login using JWT
- 🛍️ Product listing with custom design
- 📷 Image upload for products using Multer
- 📦 Admin panel for adding new items
- 🎨 Tailwind CSS styling with dynamic colors
- 🧾 Cookie-based session management
- 🌐 EJS templating for dynamic frontend rendering

---

## 🗂️ Project Structure

Bag_store/

├── controllers/ # Route handling logic

├── models/ # Mongoose schemas (User, Owner, Product)

├── public/ # Static CSS/JS files

├── routes/ # Express route files

├── uploads/ # Uploaded images

├── views/ # EJS templates for UI

├── app.js # Main server file

├── .env # Environment variables

├── package.json # Node.js dependencies

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS, Tailwind CSS
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT & cookies
- **File Uploads:** Multer

---

## 🔧 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Arjunbunny1/Bag_store.git
   cd Bag_store
## Install dependencies:

npm install
Configure environment variables:
Create a .env file in the root folder and add:

MONGO_URL=your_mongo_connection_string
JWT_KEY=your_secret_key

## Run the app:
node app.js
