import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket = io('http://localhost:3000');

  joinSession(sessionId: string, user: string) {
    this.socket.emit("joinSession", { sessionId, user });
  }

  startGame(sessionId: string) {
    this.socket.emit("startGame", sessionId);
  }

  nextPhase(sessionId: string) {
    this.socket.emit("nextPhase", sessionId);
  }

  onUpdateSession(callback: (data: any) => void) {
    this.socket.on("updateSession", callback);
  }

  onGameStarted(callback: (data: any) => void) {
    this.socket.on("gameStarted", callback);
  }

  onPhaseUpdated(callback: (data: any) => void) {
    this.socket.on("phaseUpdated", callback);
  }
}
