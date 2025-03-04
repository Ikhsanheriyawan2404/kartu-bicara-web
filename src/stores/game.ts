import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGameStore = defineStore('game', () => {
  const selectedCategory = ref<number | null>(null);
  const playerName = ref<string>('');

  function setGameData(categoryId: number, name: string) {
    selectedCategory.value = categoryId;
    playerName.value = name;
  }

  function clearGameData() {
    selectedCategory.value = null;
    playerName.value = '';
  }

  return { selectedCategory, playerName, setGameData, clearGameData };
});
