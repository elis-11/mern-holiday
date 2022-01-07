# https://www.youtube.com/watch?v=8PZMP06Vap4

## killall node
## npm start

7--ATLAS
8:30--mongo-atlass
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
------------------------------

myFirstDatabase  -- change to ---  app
mongodb+srv://elis:<password>@cluster0.eoohx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

    "mongoUri": "mongodb+srv://elis:elis@cluster0.eoohx.mongodb.net/app?retryWrites=true&w=majority"


  "proxy": "http://localhost:5000/",

    "proxy": {
    "/api": {
      "target": "https://localhost:5002",
      "secure": false
    }
  },


Комментарий для тех, у кого выдавало ошибку proxy при запросе к серверу -- 1:31:33 . Скорее всего, у вас не стартовал сервер и скорее всего из-за того, что не смог подключиться к MongoDB, так как у вас динамически сменился IP и теперь вы не можете обращаться к MongoDB. Просто зайдите к себе в аккаунт MongoDB и добавьте свой текущий IP адрес в Network Access


Дошел до 1:31:40, а дальше продолжает вылезать ошибка 500 при отправке запроса
В логах:
Proxy error: Could not proxy request /api/auth/register from localhos
t:3000 to http://localhost:5000/

||

Помогло после замены в файле client/package.json  строки "proxy": "http://localhost:5000"  на "proxy": "http://localhost:5000/". То-есть просто слеш добавить в конце

||

В auth.routes.js для "/register",  в блоке catch(e) выводите именно res.status(500).json(e.message), что укажет более конкретную ошибку от которой стоит отталкиваться. 
В моём случае проблема была в невнимательности,  конкретнее, в неверном импорте схемы User.  
const { User } = require("../models/User)"; 
Когда верный вариант: const User = require("../models/User)";

Если не одно из решений на stackoverflow не сработало, скорее всего,  дело в синтаксической ошибке.


  Момент на 2:30:38. Автор решает эту проблему и у него ошибка пропадает. У меня, в свою очередь, осталась. Что в логах сказать не могу, нет доступа к проекту. Ориентируясь по комментам менял время жизни токена, условия, искал в инете костыли, но не помогло.