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

## Building a Chatbot with a Custom GPT
A custom GPT can be used to power a chatbot in the Angular app. The GPT should be configured with the backend's OpenAPI definition so that it can call endpoints such as `/userinfo` to fetch data. The basic flow is:
1. User interacts with the chatbot UI in the Angular app.
2. The Angular service sends the user message to the custom GPT endpoint.
3. The GPT decides whether to call any backend action, for example by fetching `/userinfo`.
4. The response from the backend is incorporated into the GPT's reply, which is then displayed to the user.

### Sample `/userinfo` Route
Below is an example Express route that returns dummy user information. In a real application this would query a database.
```javascript
// backend/server.js
const express = require('express');
const app = express();

app.get('/userinfo', (req, res) => {
  // Example static user data
  res.json({ id: 1, username: 'demo', email: 'demo@example.com' });
});

app.listen(3000, () => {
  console.log('API server listening on port 3000');
});
```

### Angular Chat Service (simplified)
```ts
// frontend/src/app/chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor(private http: HttpClient) {}

  getUserInfo() {
    return this.http.get('/userinfo');
  }

  sendMessage(message: string) {
    // Send message to your custom GPT endpoint
    // and return the observable response
    return this.http.post('/chat', { message });
  }
}
```
