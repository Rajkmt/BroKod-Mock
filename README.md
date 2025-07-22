# 🌟 BroKod Mock

Welcome to **BroKod Mock** — a beautiful, modern web project built with the latest tools in the frontend world!

This project is made using **Next.js 13 (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, and **Drizzle ORM**. It's designed to be clean, fast, and beginner-friendly — both in how it looks and how it’s built.

🌐 **Live Site**: [https://bro-kod-mock.vercel.app](https://bro-kod-mock.vercel.app)

---

## ✨ What is BroKod Mock?

BroKod Mock is a mock frontend app that demonstrates how to build a modern web interface using:

- ✅ **Next.js 13** (with App Router)
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Drizzle ORM** for database access
- ✅ Modular file structure and clean code

It’s a great project to learn from if you’re a **beginner who wants to understand how a real-world app is built**.

---

## 📁 Folder Structure (Explained Simply)

Here’s how the project is organized:

BroKod-Mock/
├── app/ ← All your pages and routes (Next.js App Router)
│ ├── api/ ← Backend API routes (like a mini server)
│ ├── layout.tsx ← Main layout (header, footer, etc.)
│ └── page.tsx ← Home page
│
├── components/
│ └── ui/ ← All reusable UI parts (buttons, cards, etc.)
│
├── lib/
│ └── db.ts ← Database config using Drizzle ORM
│
├── public/ ← Static files (images, icons, etc.)
│
├── utils/ ← Helper functions and custom hooks
│
├── drizzle.config.js ← Drizzle ORM configuration file
├── next.config.mjs ← Next.js configuration
├── tailwind.config.js ← Tailwind CSS setup
├── tsconfig.json ← TypeScript settings
├── package.json ← List of all packages and scripts


## 🛠️ How to Run This Project (Step-by-Step)

Even if you're new, follow these simple steps:

### 1️⃣ Clone the project

git clone https://github.com/Rajkmt/BroKod-Mock.git
cd BroKod-Mock
2️⃣ Install dependencies

npm install
3️⃣ Set up your environment variables
Create a .env.local file in the root folder and add the following:


DATABASE_URL="your_database_connection_url"
(If you don’t have a database yet, you can leave this for now just to try the UI.)

4️⃣ Start the development server

npm run dev

Now open your browser and go to:

http://localhost:3000

🧠 Key Concepts Behind the Project

Next.js App Router → Lets you structure pages, layouts, loading UI, etc.

Drizzle ORM → Used to connect and talk to your database with type safety.

Tailwind CSS → Allows you to write styles quickly using simple utility classes.

TypeScript → Makes your code easier to understand and less error-prone.

💡 Why This Project Is Great for Beginners

✅ Clean and simple folder structure

✅ Easy to understand

✅ Uses modern real-world tools

✅ Quick setup

✅ Great for learning and practice

❤️ Contributing

Want to contribute?

Fork the repo

Create a branch: git checkout -b your-feature-name

Make your changes

Commit and push:

git commit -m "Add your feature"
git push origin your-feature-name
Open a Pull Request

📃 License
This project is open-source and available under the MIT License.

🙌 Made by Rajkmt
Built with love 💖 — to learn, grow, and inspire others to start their own dev journey.

“Start small. Build fast. Learn forever.” 💫


