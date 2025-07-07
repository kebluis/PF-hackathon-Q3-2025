# PF-hackathon-Q3-2025

## Project Overview
This repo contains the starter code for the PF Q3 2025 hackathon. It uses a simple
Angular frontend with a Node/Express backend. Participants are encouraged to
extend the application however they wish, but the base structure keeps the
frontend and backend in their own directories.

- **frontend/** – Angular single page application
- **backend/** – API server

## Setup Instructions
1. Clone the repository.
2. Install Node.js and npm if they are not already available.
3. Run `npm install` inside `frontend/` to set up the Angular project.
4. Run `npm install` inside `backend/` to set up the API server.
5. Use `npm start` in each directory to run the development servers.

## Frontend ↔ Backend Communication
The Angular app interacts with the backend using HTTP requests. For example,
calling `GET /userinfo` on the backend should return user information as JSON.
Routes can be adjusted as needed, but by default the Angular app should point to
the backend's base URL (e.g. `http://localhost:3000`). Configure the Angular
services to send requests to endpoints like:

```
GET /userinfo    # retrieve details about the logged in user
POST /signin     # authenticate and receive a token
```

These endpoints should be implemented in the backend Express app and can be
expanded for additional functionality.
