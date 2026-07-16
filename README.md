# 🧠 StudyAim AI

**An AI-Powered SaaS Platform for Smarter Exam Preparation**

StudyAim AI is a full-stack AI SaaS platform that helps students prepare for exams efficiently by generating AI-powered notes, revision material, diagrams, and important questions.
It combines the power of Google's Gemini AI with a modern MERN stack to provide a personalized and interactive learning experience.

🔗 **Repository:** [RahulMahawar310/StudyAim_AI](https://github.com/RahulMahawar310/StudyAim_AI)
🚀 **Live Demo:** [Try the app](https://studyaim-aiclient.onrender.com)

> ⚠️ **Note:** Hosted on Render's free tier. Initial loading may take **30–60 seconds** if the application has been idle.
---

## ✨ Features

- ✅ **AI-Generated Exam Notes** — Generate well-structured, exam-focused notes on any topic using Gemini AI
- ✅ **Auto-Created Diagrams, Graphs & Charts** — Visual learning aids generated automatically alongside notes
- ✅ **Revision Mode** — Short, crisp, last-minute revision notes for quick recall
- ✅ **Class-wise & Subject-wise Important Questions** — Targeted question banks tailored to specific classes and subjects
- ✅ **Credit-Based Usage System** — Fair, scalable usage model for a SaaS product
- ✅ **Stripe Payment Integration** — Multiple pricing plans with secure, real payment processing
- ✅ **Secure Authentication** — JWT-based auth, with Google OAuth support
- ✅ **Fully Deployed** — Live backend and frontend, production-ready

---

## 🧠 Why This Project Stands Out

This isn't a basic CRUD app or a dummy project — it's a **real AI SaaS product**.

| ❌ Not This | ✅ Actually This |
|---|---|
| Basic CRUD project | Real AI-powered SaaS product |
| Dummy college assignment | Used for actual exams, revision & concept clarity |

Built to solve a genuine problem — helping students turn scattered study material into structured, exam-ready content in minutes.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **AI Engine** | Google Gemini API |
| **Payments** | Stripe |
| **Authentication** | JWT (+ Google OAuth) |
| **Deployment** | Render |

---

## 🏗 Architecture Overview

```
┌─────────────┐      ┌──────────────────┐      ┌───────────────┐
│   React.js   │ ───▶ │  Node.js /        │ ───▶ │   MongoDB      │
│   Frontend   │ ◀─── │  Express Backend  │ ◀─── │   Atlas        │
└─────────────┘      └──────────────────┘      └───────────────┘
                             │        │
                             ▼        ▼
                      ┌───────────┐ ┌───────────┐
                      │ Gemini API │ │  Stripe   │
                      │ (AI Notes) │ │ (Payments)│
                      └───────────┘ └───────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB Atlas account (or local MongoDB instance)
- Google Gemini API key
- Stripe account (API keys for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RahulMahawar310/StudyAim_AI.git
   cd StudyAim_AI
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables**
   
This project requires certain configuration values to run, which are not included in this repository for security reasons
Please set up the required configuration before running the app. Reach out to me if you are an authorized collaborator and need access to setup details.
   ```

6. **Run the app**

   Backend:
   ```bash
   cd backend
   npm run dev
   ```

   Frontend:
   ```bash
   cd frontend
   npm run dev
   ```

7. Visit `http://localhost:3000` to see the app running locally.

---

## 💳 Credit & Pricing System

StudyAim AI uses a **credit-based model**:
- Every AI generation (notes, diagrams, revision content) consumes credits
- Users can purchase credit packs / subscription plans via Stripe
- Plans and pricing are configurable from the backend

---

## 🔐 Authentication

- Email/password login secured with **JWT**
- **Google OAuth** login for quick sign-in
- Protected routes and role-based access on the backend

---

## 📦 Deployment

- **Backend & Frontend** are deployed on **Render**
- Environment variables are configured directly on the Render dashboard for production
- Stripe webhooks are configured to point to the deployed backend endpoint

---

## 🗺 Roadmap / Ideas for Future Enhancements

- [ ] Mobile app (React Native)
- [ ] Collaborative study rooms
- [ ] AI Voice Assistant
- [ ] Personalized Study Planner
- [ ] Flashcard-based spaced repetition mode
- [ ] Multi-language notes generation
- [ ] Analytics dashboard for study progress

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/RahulMahawar310/StudyAim_AI/issues).

---

## 👨‍💻 Author

**Rahul Mahawar**
- GitHub: [@RahulMahawar310](https://github.com/RahulMahawar310)
- Portfolio: [rahulmahawar310.github.io/Portfolio](https://rahulmahawar310.github.io/Portfolio/)

---

## 📄 License

This project is available for educational and portfolio purposes. Please reach out before using it commercially.

---
## ⭐ Support

⭐ **If you find this project useful, consider giving it a star on GitHub!**
