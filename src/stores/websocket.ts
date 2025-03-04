import { defineStore } from 'pinia';
import * as Colyseus from "colyseus.js";

interface WebSocketState {
  client: Colyseus.Client | null;
  room: Colyseus.Room | null;
  state: Colyseus.Room["state"] | null;
  isHandshake: boolean;
  isGameStarted: boolean;
  isGameEnded: boolean;
  currentQuestionId: number;
  questions: Array<{ id: number; text: string; category: string; asked: boolean }>;
}

export const useWebSocketStore = defineStore('websocket', {
  state: (): WebSocketState => ({
    client: null,
    room: null,
    state: null,
    isHandshake: false,
    isGameStarted: false,
    isGameEnded: false,
    currentQuestionId: 0,
    questions: [],
  }),
  actions: {
    handshake() {
      const client = new Colyseus.Client('ws://api-kata.brogrammer.id');
      this.client = client;
      this.isHandshake = true;
    },
    disconnect() {
      if (this.client) {
        // this.client.close();
        this.client = null;
        this.isHandshake = false;
      }
    },
    joinRoom(roomName: string) {
      if (this.client) {
        this.client.join(roomName).then((room) => {
          this.room = room;
        });
      }
    },
    joinOrCreateRoom(roomOptions: any) {
      if (!this.client) return;

      this.client.joinOrCreate("word_card_room", roomOptions).then(room => {
        console.log(room.sessionId, "joined", room.name);
        this.room = room;
        this.state = room.state;
        this.state.questions.onAdd((question: any, _: any) => {
          this.questions.push(question);
        });
        this.state.listen("isGameStarted", (currentValue: boolean, _: any) => {
          if (currentValue === true) {
            this.isGameStarted = true;
          }
        });
        this.state.listen("isGameEnded", (currentValue: boolean, _: any) => {
          if (currentValue === true) {
            this.isGameEnded = true;
          }
        });

        this.state.listen("currentQuestionId", (currentValue: number, _: any) => {
          console.log("currentQuestionId", currentValue);
          this.currentQuestionId = currentValue;
        });

      }).catch(e => {
        console.log("JOIN ERROR", e);
      });
    },
    nextAnswer() {
      if (this.room) {
        this.room.send("answer");
      }
    }
  },
});
