# Grace Shopper E-Commerce Project

Hosted Here: <https://graceecommerce.netlify.app/> 

## Tech Stack

- React v18.2
- Reduk Toolkit/Query v2.0.1
- MUI: v5.15.5,
- Express: v4.18.2
- Prisma/client: v5.9.1,

## Getting Started With The Package

### Getting Project Dependencies

- Run the npm command: `npm install`

### Environment Variables Needed

- create a `.env` file in the root directory of the project
- create these env variables
  - ***DATABASE_URL***=`postgresql://YOUR_POSTGRES_USERNAME:YOUR_POSTGRES_PASSWORD@YOUR_POSTGRES_IP_PORT_COMBINATION/YOUR_POSTGRES_TABLE_NAME?schema=public`
  - ***VITE_PORT***=`YOUR_PORT_NUMBER_FOR_BACKEND_SERVER`
  - ***VITE_DEVELOPMENT_BACKEND_BASE_URL***=`http://localhost:$VITE_PORT`
  - ***VITE_PRODUCTION_BACKEND_BASE_URL***=`https://REPLACE.ME.WITH.YOUR.PRODUCTION.URL.com`

## Frontend

- All the work for the frontend portion of the application is located inside of the `client` directory
- `npm run client`: This will start the frontend React Application on usually on `http://localhost:5173/`, but check your terminal after running the command to verify

## Backend

- To setup the backend follow the directions below
- To setup the local database and populate it with data run these commands
  - `npx prisma migrate dev --name init`
  - `npx prisma generate`
  - `npm run seed`
- `npm run server`: This will start the backend Express Server on whatever port you specified in the .env file for the `VITE_PORT` environment variable. If you have something actively running on that port, change this port to another port number or close the other actively running application
