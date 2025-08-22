# SALFORD

**SALFORD** is a Next.js application with authentication powered by **NextAuth.js**.  
It includes **protected routes**, **login/logout functionality**, and an **Add Product form** to demonstrate secure data handling.

🔗 **Live Demo:** [SALFORD Live](https://salford-client.netlify.app/)  
*(Replace with your actual deployed link)*

---

## ⚡ Features
- 🔐 Authentication with NextAuth (Credentials/Providers supported)
- 🛡 Protected routes (redirects to login if not authenticated)
- 🔄 Login & logout with redirection
- 📝 Add Product form (name, image, price, description, product details)

---

## 🛠 Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/salford.git
```

```bash
cd salford
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure environment variables
Create a .env.local file in the root and add:

```bash

NEXTAUTH_SECRET=helloworld
DB_NAME=salford
MONGODB_URI=mongodb+srv://salford:F1aItr51aDoj5pNn@meshal10613.mbbtx0s.mongodb.net/?retryWrites=true&w=majority&appName=meshal10613
```

### 4. Run the development server

```bash
npm run dev
```

## 📌 Route Summary

| Route                    | Description                                                |
|---------------------------|------------------------------------------------------------|
| `/`                      | Home page                                                 |
| `/api/auth/[...nextauth]/route.js` | NextAuth API route (login)                 |
| `/products` | All products page                 |
| `/products/:id` | Single product page                 |
| `/register`                 | register page |
| `/dashboard/add-product`           | Add product page (form: name, image, price, description, details) |



### 📷 Example Add Product Data

```bash
    {
    "name": "Aurora Beats X1",
    "image": "https://example.com/headphone.jpg",
    "price": 149,
    "description": "Premium wireless headphones with crystal-clear sound.",
    "productDetails": ["Bluetooth 5.2", "Noise Cancelling", "30hr Battery Life"]
    }
```


### 📦 Tech Stack

- Next.js 13+ (App Router)
- NextAuth.js
- Tailwind CSS
- Daisy UI
- MongoDB
- SweetAlert2