# elogbooks-interview

## Info:

Test client is currently deployed on a Netlify box [here](https://main--comforting-sprite-89851f.netlify.app/) the api is deployed on my personal server [here](https://api.joshuacattaruzza.com/api/jobs/all)

## Stack:

- React (react-bootstrap)
- Node (express.js)
- MySQL 

### Endpoints:

- /api/jobs
  - /create -> creates a job
  - /all -> returns all jobs
  - /one/:id -> returns one specific job 
  - /update/:id -> updates job status 

- /api/properties
  - /create
  - /all
  
## client
### inside client directory:

- npm install
- npm start
- to try with server running locally, inside utils directory change baseUrl from "https://api.joshuacattaruzza.com" to "http://localhost:4200"

## server
### inside the server directory:

- npm install
- npm start
- node v16.15.1
## database
### inside db directory:

- sql file with db creation
- mysql  Ver 15.1 Distrib 10.1.38-MariaDB, for Win64 (AMD64)
