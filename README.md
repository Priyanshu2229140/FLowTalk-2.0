# 🚀 FLowTalk 2.0

FLowTalk 2.0 is a modern, real-time chat and video-calling platform for teams. It provides secure messaging, video calls, and channel management to enhance collaboration.

---

## ✨ Features

| Icon | Feature              | Description                                   |
|------|----------------------|-----------------------------------------------|
| 💬   | Real-time Messaging  | Secure text, emoji, and file sharing.         |
| 🎥   | Video Calls          | Start or join calls directly within channels. |
| 🔐   | Authentication       | Managed via Clerk.                            |
| 🏷️   | Channel Management   | Public/private channels with pinned messages. |
| 🛠️   | Error Monitoring     | Sentry integration ensures app stability.     |
| 🌙   | Theming              | Switch between light and dark modes.          |

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ React + Vite
- 🎨 Tailwind CSS
- 📊 React Query
- 🔐 Clerk React (Authentication)
- 💬 Stream Chat React & 🎥 Stream Video React SDK
- 🧭 React Router
- 🖼️ Lucide React (Icons)
- 🔔 React Hot Toast (Notifications)

### **Backend**
- 🟢 Express.js
- 🔐 Clerk Express
- 🗄️ MongoDB via Mongoose
- 💬 Stream Chat
- ⏱️ Inngest (Background Jobs)
- 🛡️ Sentry (Error Monitoring)

---

## 📂 Project Structure

```
/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   └── package.json
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── providers/
│   │   └── styles/
│   ├── .env
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## ⚡ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/priyanshu2229140/flowtalk-2.0.git
cd flowtalk-2.0
```

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

**Create `.env` with:**
```
PORT=5000
MONGO_URI=<Your MongoDB URI>
CLERK_SECRET_KEY=<Your Clerk Secret Key>
STREAM_API_KEY=<Your Stream API Key>
STREAM_API_SECRET=<Your Stream API Secret>
SENTRY_DSN=<Your Sentry DSN>
INNGEST_EVENT_KEY=<Your Inngest Event Key>
INNGEST_SIGNING_KEY=<Your Inngest Signing Key>
CLIENT_URL=<Your Frontend URL>
```

**Start backend:**
```bash
npm run dev
```
Server runs at [http://localhost:5000](http://localhost:5000).

### 3️⃣ Frontend Setup

```bash
cd ../Frontend
npm install
```

**Create `.env` with:**
```
VITE_CLERK_PUBLISHABLE_KEY=<Your Clerk Publishable Key>
VITE_STREAM_API_KEY=<Your Stream API Key>
VITE_BACKEND_URL=http://localhost:5000
```

**Start frontend:**
```bash
npm run dev
```
Frontend runs at [http://localhost:5173](http://localhost:5173).

---

## 🌐 Deployment

**Vercel Deployment:**

### Frontend:
- Push Frontend to GitHub
- Connect repo on Vercel
- Add environment variables in Vercel
- Deploy

### Backend:
- Push Backend to GitHub
- Configure as a serverless function using `@vercel/node`
- Add environment variables in Vercel
- Deploy

> ⚠️ **Update frontend `VITE_BACKEND_URL` to the deployed backend URL.**

---

## 📝 Usage

- Register/Login via Clerk
- Join/Create Channels
- Send messages and files
- Start Video Calls
- Manage Profile & Settings
- Toggle between light/dark themes

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m "Add feature"`
4. Push branch: `git push origin feature/YourFeature`
5. Open a Pull Request

Refer to `CONTRIBUTING.md` if available.

---

## 📬 Contact

Open issues on GitHub or contact [Priyanshu2229140](https://github.com/Priyanshu2229140).

---

## ⭐ Acknowledgements

Thanks to all contributors and open-source projects powering FLowTalk 2.0.
