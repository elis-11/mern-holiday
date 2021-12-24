24:42---AuthPage
32:45---BACK--model--database
36:15--Logik--routes
43:17--Settings AuthPage.jsx
46:57--HOOKS to AuthPage.jsx
50.26--send-data
58:05--express-validator
1:05:50--BCRYPT
1:09:50--LOGIN



Если при отправки форм будет ошибка cors:
npm install cors
index.js (nodejs)

const cors = require('cors')

app.use(cors())
app.use(express.json({extended: true}))
--------------------------------
  "proxy": "http://localhost:5000",
-------------------------
  "scripts": {
    "server": "nodemon index.js",
    "client": "npm run start --ignore client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
-------------------------
  "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js --ignore client"
    },
