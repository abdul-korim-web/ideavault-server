# 🚀 IdeaVault Backend API

![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![Status](https://img.shields.io/badge/Project-Completed-success)
![License](https://img.shields.io/badge/License-MIT-blue)

🔗 Live API: https://ideavault-server-944y.onrender.com  
🔗 GitHub Repo: https://github.com/abdul-korim-web/ideavault-server

---

## 📌 Project Overview

This is the **backend API for IdeaVault**, a startup idea sharing platform.

It provides RESTful APIs for:
- 💡 Startup ideas (CRUD)
- 💬 Comments system (CRUD)
- 👤 User-based data handling
- 🔐 Authentication protected routes
- 🧠 Aggregated home/trending data

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Middleware-based validation

---

## 📂 Project Structure
```
src/
├── config/
│ └── db.js
│
├── Controlers/
│ ├── products/
│ │ ├── createProductControler.js
│ │ ├── updateProductControler.js
│ │ ├── deleteUserProductControler.js
│ │ ├── getProductControler.js
│ │ ├── getSingleProductControler.js
│ │ ├── getHomeProductControler.js
│ │ ├── getUserProductControler.js
│ │ ├── deleteProductCommentControler.js
│ │ ├── getUserCommentControler.js
│ │
│ ├── comment/
│ │ ├── createCommentControler.js
│ │ ├── updateCommentControler.js
│ │ ├── getProductCommentControler.js
│
├── middelware/
│ ├── checkLogin.js
│ ├── validator/
│ │ ├── checkProductData.js
│ │ ├── checkCommentData.js
│
├── Routes/
│ ├── productRoute.js
│ ├── commentRoute.js
│
├── Schema/
│ ├── productSchema.js
│ ├── commentSchema.js
 ```

 
---

## 🚀 API Features

### 💡 Product APIs
- Create product
- Get all products
- Get single product
- Update product
- Delete product (user-based)
- Get user products
- Get trending/home products

### 💬 Comment APIs
- Create comment
- Update comment
- Get comments by product
- Get user comments
- Delete comment

---

## 🔐 Authentication

- JWT-based authentication
- Protected routes using `checkLogin`
- User ID stored in request payload
- Authorization header required:
```bash
Authorization: Bearer <token>


---

## 🚀 API Features
```
## 💡 Product APIs
- Create product
- Get all products
- Get single product
- Update product
- Delete product (user-based)
- Get user products
- Get trending/home products

## 💬 Comment APIs
- Create comment
- Update comment
- Get comments by product
- Get user comments
- Delete comment

---

## 🔐 Authentication

- JWT-based authentication
- Protected routes using `checkLogin`
- User ID stored in request payload
- Authorization header required:
```bash
Authorization: Bearer <token>
```

## Middleware System
- 🛡️ checkLogin → protects routes
- ✅ checkProductData → validates product input
- ✅ checkCommentData → validates comment input

## 📦 Installation & Setup
```bash
# Clone repo
git clone https://github.com/abdul-korim-web/ideavault-server

# Move into folder
cd ideavault-server

# Install dependencies
npm install

# Run development server
npm run dev
```
## ⚡ Features
- 🚀 RESTful API design
- 🧠 Clean MVC structure
- 🔐 JWT authentication
- 🧾 User-based authorization
- 💬 Full comment system
- 📊 Trending data aggregation
- ⚡ Optimized MongoDB queries
## 📜 License & Copyright

This project is **open-source and free to use** under the **MIT License**.  

You can freely:
- ✅ View, modify, and use the source code  
- ✅ Distribute or include it in your own projects  
- ✅ Use it for personal or commercial purposes  

Just make sure to keep the original author credit:

**© 2026 Abdul Korim**

## For collaboration or inquiries, contact:  
📧 Email: abdulkorimwebdeveloper@gmail.com <br> 
👉 GitHub: [abdul-korim-web](https://github.com/abdul-korim-web) <br>
👉 Facebook: [abdul-korim-web](https://www.facebook.com/abdulkorimweb) <br>
👉 LinkedIn: [abdul-korim-web](https://linkedin.com/in/abdul-korim-webdeveloper) <br>
