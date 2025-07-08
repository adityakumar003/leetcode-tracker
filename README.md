# 💻 LeetCode Tracker

A visually appealing, real-time web app to track your **LeetCode profile stats**. Enter any valid LeetCode username to see solved problem counts by difficulty, progress visualizations, and submission insights — all powered by the LeetCode GraphQL API and a custom Node.js proxy backend.

---

## 🚀 Live Demo

> Coming soon — deploy using GitHub Pages, Vercel, or Netlify for frontend + Render or Railway for backend.

---

## ✨ Features

- 🔍 **Search** for any LeetCode username
- 🟢 **Progress circles** for Easy, Medium, Hard problems (color-coded)
- 📊 **Submission stats cards** with clean layout
- ⚙️ **Node.js proxy server** to safely fetch restricted LeetCode data
- 🎨 Responsive and minimalist UI (built with HTML, CSS, JS)

---

## 🛠 Tech Stack

| Layer       | Tools                          |
|-------------|---------------------------------|
| Frontend    | HTML, CSS, JavaScript          |
| Backend     | Node.js, Express               |
| API         | [LeetCode GraphQL](https://leetcode.com/graphql/) |
| Hosting     | Local (can be deployed later)  |

---

## 📂 Project Structure
📁 leetcode-tracker/
├── 📄 index.html # Main UI
├── 📄 style.css # Styling (progress circles, layout)
├── 📄 script.js # DOM + fetch + render logic
├── 📄 server.js # Express backend (proxy for LeetCode API)
├── 📄 .gitignore # node_modules and system files excluded
├── 📄 package.json # Node.js dependencies

---

## ⚙️ Getting Started (Local Setup)
### 1. Clone the repository
```bash
git clone https://github.com/adityakumar003/leetcode-tracker.git
cd leetcode-tracker
```
### 2. Install backend dependencies
```bash
npm install
```
### 3. Start the backend server
```bash
node server.js
```
### 4. Open frontend
Open index.html in your browser (you can use Live Server in VS Code for ease).

##🤝 Contributing

1. Fork the repo
2. Create your feature branch: git checkout -b feature/YourFeature
3. Commit your changes: git commit -m 'Add your feature'
4. Push to the branch: git push origin feature/YourFeature
5. Open a Pull Request

##🙌 Acknowledgements

->LeetCode — for the public GraphQL API

->CSS Tricks — for conic gradient progress circle reference
