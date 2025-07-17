# 💼 MBX Investment App (React.js)

Welcome to the official MBX Investment frontend project.  
This app is built to showcase real estate and investment plans using a clean, responsive UI — with multi-language support and scalable architecture.

> Made with ❤️ using React, Material UI, Redux, and React Router.

---

## 📌 Table of Contents

- [📦 Tech Stack](#-tech-stack)
- [🛠️ Installation & Setup](#-installation--setup)
- [🏃 Running the App](#-running-the-app)
- [📁 Folder Structure](#-folder-structure)
- [📦 Package Usage](#-package-usage)
- [🔗 Deployment to Netlify](#-deployment-to-netlify)
- [🧪 Testing](#-testing)
- [🧠 FAQ](#-faq)
- [🧰 Troubleshooting](#-troubleshooting)
- [🙋 Author & License](#-author--license)

---

## 📦 Tech Stack

| Package                      | Description                              |
|-----------------------------|------------------------------------------|
| `react`, `react-dom`        | Core framework for building the UI       |
| `@mui/material`             | Modern UI components from Material UI    |
| `@emotion/react`, `styled`  | Styling support for MUI                  |
| `redux`, `react-redux`      | Centralized state management             |
| `redux-thunk`               | Middleware for handling async logic      |
| `react-router-dom`          | Routing between multiple pages/views     |
| `@testing-library/*`        | Utilities for testing UI components      |
| `web-vitals`                | Optional: measures web performance       |

---

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/kuberjha08/mbxplatform.git
   cd mbxplatform
   ```

2. **Install all dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   🔗 App will be available at: [http://localhost:3000](http://localhost:3000)

4. **Build for production**

   ```bash
   npm run build
   ```

---

## 📁 Folder Structure

```txt
mbxplatform/
├── public/                 # Static assets (images, fonts, etc.)
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Individual route-based pages
│   ├── store/              # Redux store, actions, reducers
│   │   └── languageActions.js
│   ├── global.js           # Contains multilingual content
│   ├── App.js              # Main route configuration
│   └── index.js            # React app entry point
├── package.json
└── README.md
```

---

## 📦 Package Usage

### ✅ React + React Router DOM
Handles page navigation without full reloads.

```jsx
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

---

### ✅ Redux + Redux Thunk
Used to manage global state like language, and handle async actions (e.g. API calls).

```js
import { useSelector, useDispatch } from 'react-redux';

const lang = useSelector(state => state.language.value);
```

---

### ✅ Material UI (MUI)
Used for responsive layouts and clean components.

```jsx
import { Box, Typography, Button } from '@mui/material';

<Box>
  <Typography variant="h4">Hello</Typography>
  <Button variant="contained">Click Me</Button>
</Box>
```

---

### ✅ Emotion
Used with MUI to style components using plain CSS-in-JS.

```jsx
import styled from '@emotion/styled';

const MyBox = styled.div`
  background: lightgray;
  padding: 20px;
`;
```

---

## 🔗 Deployment to Netlify

To deploy the app on Netlify:

1. **Build the production version**

   ```bash
   npm run build
   ```

2. **Login to Netlify → Create new site → Import from GitHub**

   Git repo: `https://github.com/kuberjha08/mbxplatform.git`

3. **Set build & publish settings**

    - Build command: `npm run build`
    - Publish directory: `build`

4. **Hit "Deploy"**

   ✅ That’s it — your app is live!

---

## 🧪 Testing

To run tests (if implemented):

```bash
npm test
```

---

## 🧠 FAQ

#### ❓ How do I add a new page/route?

1. Create a new component inside `pages/`, e.g., `Team.jsx`.
2. Import and register it in `App.js` like:

```jsx
<Route path="/team" element={<Team />} />
```

---

#### ❓ How do I change the language?

The app uses Redux + `global.js` for multilingual support.

```js
dispatch(setLanguage('en'));  // or 'hi', 'ar', etc.
```

---

#### ❓ What is `web-vitals`?

It’s an optional package used to monitor performance (like LCP, CLS) for reporting.

---

#### ❓ Getting weird `node_modules` or `npm` errors?

Try resetting everything:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🧰 Troubleshooting

| Problem                        | Solution                                 |
|-------------------------------|------------------------------------------|
| `npm run build` fails         | Delete `node_modules` and reinstall      |
| MUI styles not applying       | Check if `@emotion/react` is installed   |
| Images not loading            | Double-check image paths in `/public/`   |

---

## 🙋 Author & License

👨‍💻 Developed by **Kuber**  
🔗 GitHub: [github.com/kuberjha08/mbxplatform](https://github.com/kuberjha08/mbxplatform)

📜 Licensed under the [MIT License](https://opensource.org/licenses/MIT)
