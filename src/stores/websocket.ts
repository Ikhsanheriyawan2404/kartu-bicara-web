import { defineStore } from 'pinia';
import * as Colyseus from "colyseus.js";

export const useWebSocketStore = defineStore('websocket', {
  state: () => ({
    client: null,
    room: null,
    isHandshake: false,
    isGameStarted: false,
    currentQuestionId: 0,
    questions: [],
  }),
  actions: {
    handshake() {
      const client = new Colyseus.Client('ws://localhost:3001');
      this.client = client;
      this.isHandshake = true;
      // client.on('open', () => {
      //   this.isConnected = true;
      // });
      // client.on('close', () => {
      //   this.isConnected = false;
      // });
      // client.on('message', (message) => {
      //   console.log('Received message:', message);
      // });
    },
    disconnect() {
      if (this.client) {
        this.client.close();
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
        room.state.questions.onAdd((question, key) => {
          this.questions.push(question);
        });
        room.state.listen("isGameStarted", (currentValue, _) => {
          if (currentValue === true) {
            this.isGameStarted = true;
          }
        });

        room.state.listen("currentQuestionId", (currentValue, _) => {
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
