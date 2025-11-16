# FLowTalk-2.0 🚀

[![Live Demo](https://img.shields.io/badge/Live%20Project-FLowTalk--2.0-green?style=for-the-badge&logo=vercel)](https://flowtalkv2.vercel.app)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](#license)
[![React](https://img.shields.io/badge/built%20with-React-blue?logo=react&style=for-the-badge)](https://reactjs.org)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js&style=for-the-badge)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb&style=for-the-badge)](https://www.mongodb.com/)
[![Socket.IO](https://img.shields.io/badge/Realtime-Socket.IO-black?logo=socket.io&style=for-the-badge)](https://socket.io/)

FLowTalk-2.0 is a powerful and modern conversational platform built for seamless, real-time communications. The design leverages a rich JavaScript ecosystem, best-in-class libraries, and robust backend architecture.

---

## 🔍 Table of Contents

- [📁 File Structure](#-file-structure)
- [🛠 Tech Stack & Frameworks](#-tech-stack--frameworks)
- [✨ Features](#-features)
- [🔁 API Flow Chart](#-api-flow-chart)
- [🏗 System Architecture Diagram](#-system-architecture-diagram)
- [🚀 Deployment](#-deployment)
- [🐑 Cloning & Forking](#-cloning--forking)
- [🤝 Contribution](#-contribution)
- [💡 Acknowledgement](#-acknowledgement)
- [📜 License](#-license)

---

## 📁 File Structure

> Here's the actual project structure, visualized for clarity:

```
FLOWTALK 2.0/
├── Backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   ├── env.js
│   │   │   ├── ingest.js
│   │   │   └── stream.js
│   │   ├── controllers/
│   │   │   └── chat.controller.js
│   │   ├── middleware/
│   │   │   └── auth.middleware.js
│   │   ├── models/
│   │   │   └── user.model.js
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   ├── instrument.js
│   ├── package-lock.json
│   ├── package.json
│   └── vercel.json
├── Frontend/
│   ├── node_modules/
│   ├── public/
│   │   ├── auth.png
│   │   └── logo.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── CreateChannelModal.jsx
│   │   │   ├── CustomChannelHeader.jsx
│   │   │   ├── CustomChannelPreview.jsx
│   │   │   ├── InviteModal.jsx
│   │   │   ├── MembersModal.jsx
│   │   │   ├── PageLoader.jsx
│   │   │   ├── PinnedMessagesModal.jsx
│   │   │   └── UsersList.jsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   │   └── apis/
│   │   │       └── axios.js
│   │   ├── pages/
│   │   │   ├── AuthPage.jsx
│   │   │   ├── CallPage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── providers/
│   │   └── styles/
│   │       ├── App.css
│   │       ├── App.jsx
│   │       └── index.css
│   ├── .env
│   ├── gitignore
│   ├── eslintrc.json
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
```

---

## 🛠 Tech Stack & Frameworks

### 🖥️ **Frontend**
- **React** ![React](https://img.icons8.com/color/16/000000/react-native.png) – core SPA framework
- **React Router DOM** – navigation and routing
- **Redux** (optional) – global state management
- **Axios** – HTTP requests
- **Socket.IO-client** – real-time communication
- **CSS Modules/SASS/Styled-components** – component-level styling

### 💻 **Backend**
- **Node.js** ![Node](https://img.icons8.com/fluency/16/000000/node-js.png) – JavaScript server runtime
- **Express.js** – routing & middleware
- **Socket.IO** – bidirectional real-time communication
- **Mongoose** – elegant MongoDB object modeling
- **jsonwebtoken** – authentication (JWT)
- **bcryptjs** – secure password hashing
- **dotenv** – environment configuration
- **Morgan/winston** (optional) – logging

### 🗄️ **Database**
- **MongoDB** ![MongoDB](https://img.icons8.com/color/16/000000/mongodb.png)

### ⚒️ **Dev Tooling**
- **eslint/prettier** – code linting and formatting
- **nodemon** – backend auto-reloading
- **Postman** – API testing

---

## ✨ Features

- 🔒 **Authentication:** Secure registration & login using JWT.
- 🗨️ **Real-time Chat:** Instant messaging via Socket.IO.
- 🧑‍🤝‍🧑 **Channel Management:** Create/manage channels, invitations, and memberships.
- 📌 **Pinned Messages:** Highlight important discussions.
- 📞 **Call Support:** Direct calls on supported channels.
- 👥 **User Lists & Member Modal Management.**
- 🌐 **Responsive UI:** Mobile & desktop friendly interface.
- 📝 **Modern UX:** Clean, fast, and interactive experience.
- ⚡ **Fully Deployed & Cloud-Hosted!**

**🌟 [Live Project](https://f-low-talk-2-0-front-end.vercel.app/) 🟢 – Try it now!**

---

## 🔁 API Flow Chart

```mermaid
flowchart TD
    A["Client (Frontend)"]
    -->|HTTP Request| B[Express Server]
    B -->|Authentication Middleware| C{JWT Valid?}
    C -- Yes --> D[Controllers/Business Logic]
    C -- No --> E[Error Handler]
    D -->|DB Query/Operation| F[MongoDB]
    F --> D
    D -->|Response| A
```

---

## 🏗 System Architecture Diagram

```mermaid
graph LR
    subgraph Client Side
        A1[React App]
    end
    subgraph Server Side
        B1[Express.js Server]
        B2[API Controllers]
        B3[Authentication Middleware]
        B4[Socket.IO] 
        B5[MongoDB Database]
    end

    A1 -- REST API Calls --> B1
    B1 --> B2
    B1 --> B3
    B1 <---> B4
    B2 --> B5
    B3 --> B5
    B4 -- Real-Time Events --> A1
```

---

## 🚀 Deployment

The live project is hosted on [Vercel](https://vercel.com).  
**🔗 [Try FLowTalk-2.0 Live!](https://f-low-talk-2-0-front-end.vercel.app/)**

**Deploy your own instance:**

1. Fork & clone the repository.  
   ```bash
   git clone https://github.com/Priyanshu2229140/FLowTalk-2.0.git
   cd FLowTalk-2.0
   ```
2. Inside `/Backend` and `/Frontend`, install dependencies:  
   ```bash
   cd Backend && npm install
   cd ../Frontend && npm install
   ```
3. Configure your own `.env` files for both backend and frontend environments.
4. Start backend server:  
   ```bash
   cd Backend && npm run dev
   ```
5. Start frontend app:  
   ```bash
   cd Frontend && npm start
   ```
6. For one-click deployment, use Vercel’s [Import Project](https://vercel.com/new) feature.

---

## 🐑 Cloning & Forking

- **Clone this project**  
  ```bash
  git clone https://github.com/Priyanshu2229140/FLowTalk-2.0.git
  ```
- **Fork to your account:**  
  Click the ⭐️ 'Fork' button at the top of [this repo](https://github.com/Priyanshu2229140/FLowTalk-2.0)

---

## 🤝 Contribution

1. **Fork the repo**
2. **Clone your fork**  
   `git clone https://github.com/<your-username>/FLowTalk-2.0.git`
3. **Create your branch**  
   `git checkout -b feature/YourFeature`
4. **Commit & Push your changes**  
   `git add .`  
   `git commit -m "Add your feature"`  
   `git push origin feature/YourFeature`
5. **Open a Pull Request**  
   Go to your fork’s repo on GitHub ➔ "Pull requests" ➔ "New pull request" ➔ Select your branch ➔ Submit.

---

## 💡 Acknowledgement

- 🦄 [Priyanshu2229140](https://github.com/Priyanshu2229140) – project owner
- 🙏 All contributors, testers, and tool/library authors whose work makes this project possible

---

## 📜 License

Distributed under the [MIT License](LICENSE).

---

> **Note:**  
> Update your `.env` file and relevant configurations before running the app locally.  
> For issues or ideas, open an [issue](https://github.com/Priyanshu2229140/FLowTalk-2.0/issues).

```
# Example Backend .env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

# Example Frontend .env
REACT_APP_API_URL=http://localhost:5000
```

---
