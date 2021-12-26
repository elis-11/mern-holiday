# https://www.youtube.com/watch?v=8PZMP06Vap4


7--ATLAS
24:42---AuthPage
32:45---BACK--model--database
36:15--Logik--routes
43:17--Settings AuthPage.jsx
46:57--HOOKS to AuthPage.jsx
50.26--send-data
56:50--ATLAS
58:05--express-validator
1:05:50--BCRYPT
1:09:50--LOGIN
1:18--SETTINGS-routes & MainPage
1:23--create-CONTEXT-(tokin from back)
1:36--TESTING
1:38--useContext(AuthContext)
1:40--LOGOUT
1:44--MainPage-styling
1:53--BACKEND--todo.routes.js(create todo)
2:05:55--does not working update 
2:10:25-- get new TODOS
2:17:33--realize deleting
2:23:30--realize function done tasks
2:32--realize function done tasks
2:33:40--realize function important tasks
2:38-- useHistory



Если при отправкe форм будет ошибка cors:
npm install cors
index.js (nodejs)

const cors = require('cors')

app.use(cors())
app.use(express.json({extended: true}))
--------------------------------
  "proxy": "http://localhost:5000",
  "proxy": "http://127.0.0:5000",

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
