

# 🛠️ Contributing to E-Commerce Platform

Thank you for considering contributing to this project! We're building a modern, E-Commerce platform using Next.js, TailwindCSS, MongoDB, and NextAuth.

Please follow these guidelines to contribute effectively.

---

## 📦 Project Stack

- **Frontend:** Next.js + Tailwind CSS + TypeScript
- **Backend:** Next.js API routes + Mongoose (MongoDB)
- **Auth:** Firebase with Google Provider
- **Database:** MongoDB (Mongoose ODM)

---

## 🧑‍💻 Getting Started

1. **Fork the repo**
2. **Clone your fork**

   ```bash
   git clone https://github.com/akashsaha02/ecommerce-frontend.git
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Setup Environment Variables**

   Create a `.env.local` file based on `.env.example`:

   ```env
   MONGODB_URI=your_mongo_connection_string
   NEXTAUTH_SECRET=your_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

5. **Run locally**

   ```bash
   npm run dev
   ```

---

## 🧩 Contribution Guidelines

### ✅ What to Contribute

- New Features (Product listing, Cart, Wishlist, etc.)
- UI Components (Using ShadCN UI)
- Backend API improvements
- Authentication features
- Bug fixes
- Writing tests or improving documentation

### 📂 Branch Naming

Use meaningful branch names:

```
feature/checkout-flow
fix/login-error
chore/update-dependencies
```

### 🧪 Testing

Make sure your feature works locally before submitting a PR.

---

## 📝 Pull Request Process

1. Fork & clone the repo
2. Create your branch: `git checkout -b feature/awesome-feature`
3. Commit changes: `git commit -m "feat: add awesome feature"`
4. Push to your branch: `git push origin feature/awesome-feature`
5. Open a Pull Request on the `main` branch

---

## 💬 Code of Conduct

Be respectful, inclusive, and kind in your interactions. Let's build something amazing together.

---

## 🙌 Thank You!

We appreciate your interest and effort in contributing to this project. Every contribution counts!

