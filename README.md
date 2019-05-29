# Skipedia Web Application
![alt text](https://raw.githubusercontent.com/juniardiakbar/Skippedia/master/pict/1.jpg)

![alt text](https://raw.githubusercontent.com/juniardiakbar/Skippedia/master/pict/6.jpg)

## Features
- Authentication with Google
- Flash notification
- MVC project structure
- Administrator page
- CSRF protection
- Change user profile picture
- Eslint airbnb configuration 

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
- Install docker and docker-compose
- Run Skipedia with these command
```
docker-compose up
- App and database will running```
```

## Project Structure
| Name                    | Description                                                |
| ----------------------- |:----------------------------------------------------------:|
| config/passport.js      | Passport Local and OAuth strategies, plus login middleware.|
| config/index.js         | Configuration for upload file directory.                   |
| controllers/apiFile.js  | Controller for /api route (uploadFile).                    |
| controllers/dashboard.js| Controller for administrator page.                         |
| controllers/home.js     | Controller for home page.                                  |
| controllers/mahasiswa.js| Controller for /mahasiswa route.                           |
| controllers/rating.js   | Controller for rating page.                                |
| controllers/user.js     | Controller for user page.                                  |

## Big Thanks
- Hackathon Starter from Sahat https://github.com/sahat/hackathon-starter
- Dropzone.js from https://www.dropzonejs.com/
- SweetAllert2 from https://sweetalert2.github.io/
- Tabler from https://tabler.io/
- Bootstrap 4 and JQuery
- Picture from https://www.freepik.com/
