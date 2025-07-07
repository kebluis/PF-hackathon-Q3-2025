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
    return this.http.post('/chat', { message });
  }
}
