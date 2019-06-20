# Skipedia Web Application
![alt text](https://raw.githubusercontent.com/juniardiakbar/Skippedia/master/pict/6.jpg)

## Features
- Authentication with Google
- Flash notification
- MVC project structure
- Administrator page
- CSRF protection
- Change user profile picture

## Dependency
- Node.js version 12.3
- MongoDB version 4.0
- Docker

## Spesifications
- Node.js Express Framework
- Model is located in the directory /models/ and using MongoDB NoSQL
- Controller is located in the directory /controllers/
- View is located in the directory /views/ and using pug as view engine
- Static files and assets is located in the directory /public/
- App will running at localhost:3000
- Database will running at localhost:27017 

## How To Use
### With docker
- Install docker and docker-compose
- Run Skipedia with these command
```
docker-compose up
docker-compose up --build (for the first time)
```
- App and database will running

### Without docker
- Install node.js version 12.3
- Install MongoDB version 4.0
- Run these command
```
npm install
npm start app.js
```

## Big Thanks
- Hackathon Starter from Sahat https://github.com/sahat/hackathon-starter
- Dropzone.js from https://www.dropzonejs.com/
- SweetAllert2 from https://sweetalert2.github.io/
- Tabler from https://tabler.io/
- Bootstrap 4 and JQuery
- Picture from https://www.freepik.com/
