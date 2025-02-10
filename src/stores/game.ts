import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    selectedCategory: null,
    playerName: '',
  }),
  actions: {
    setGameData(categoryId: number, name: string) {
      this.selectedCategory = categoryId;
      this.playerName = name;
    },
    clearGameData() {
      this.selectedCategory = null;
      this.playerName = '';
    },
  },
});
