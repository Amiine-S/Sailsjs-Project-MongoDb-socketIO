
# Basic Project SailsJs with (Debian8-MongoDb-socketIO-Passport)


###I) Preliminary

Install Nodejs : (https://nodejs.org/en/download/package-manager/)

Install MongoDb : (https://docs.mongodb.com/manual/installation)

Install SailsJs:
```
npm install sails -g
```
###II) Create a basic project (Login/signup/logout/Page)

a) Start in folder where you want to create your sails project (For exemple we designate this project "tuto") and run :
```
sails new tuto
cd tuto
```
b) Add the files from the folder ("AddFiles/AddFilesProjectBasic") to your sails project.
 
- *package.json :* **Add dependencies**

- *api/controller/AuthController.js :* **Functions Login/Logout/Signup**

- *api/controller/UserController.js :* **Controller User**
  
- *api/model/User :* **Model User**

- *api/policies/isAuthenticated :* **Policies** 

- *config/http:* **Personalize middleware**

- *config/passport:* **Passeport Configuration**

- *config/policies :* **Configuration of policies**

- *config/routes :* **Routes**

- *views/login :*  **View login**

- *config/signup :*  **View signup**

###III) Configuration MongoDB

a) Install MongoDB adapter :
```
npm install sails-mongo
```

b) Add the files from the folder ("AddFiles/AddFilesMongoDB") to your sails project:

- *config/models :* **Name of Database**

- *config/connection.js :* **Configuration of database. (Host, port, database, user, password)**

###IV) Use Websocket

Install socket.io-client & sails.io.js adapter :
```
npm install socket.io-client --save
npm install sails.io.js --save
```
c) Add the files from the folder ("AddFiles/AddFilesWebSocket") to your sails project:

- *api/controller/HomeController.js :* **Function poke**

- *assets/js/socket.io.js :* **Socket.IO.js**

- *assets/js/function.js :* **Function socket**

- *views/home :* **All views of home**

###V) Finish

To complete, install package.json modules :
```
npm install
sails lift
```
