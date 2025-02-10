<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useWebSocketStore } from '@/stores/websocket';
import { useGameStore } from '@/stores/game'; // Import store Pinia

const websocketStore = useWebSocketStore();
const gameStore = useGameStore(); // Ambil instance store game
let totalQuestionAttempt = ref(0); // Total pertanyaan yang sudah dijawab
const currentQuestion = ref("");
const loading = ref(true); // Loading state

const nextQuestion = () => {
  websocketStore.nextAnswer();


  // if (totalQuestionAttempt < websocketStore.questions.length - 1) {
  //   totalQuestionAttempt.value++
  // } else {
  //   alert("Pertanyaan sudah habis! Mulai dari awal lagi.");
  //   totalQuestionAttempt.value = 0;
  // }
};

// Fungsi untuk keluar dari permainan
const exitGame = () => {
  if (confirm("Apakah Anda yakin ingin keluar dari permainan?")) {
    window.location.href = "/"; // Ganti dengan route yang sesuai
  }
};

watch(
  () => websocketStore.isGameStarted,
  (newValue) => {
    if (newValue) {
      loading.value = false;
    }
    console.log(websocketStore.questions);
  },
  { immediate: true }
);

watch(
  () => websocketStore.currentQuestionId,
  (newValue) => {
    if (newValue) {
      let question = websocketStore.questions.find(
        (question) => question.id === newValue
      );
      if (question) currentQuestion.value = question.text;
    }
    console.log({newValue});
    console.log(websocketStore.questions);
  },
  { immediate: true }
);

onMounted(() => {
  websocketStore.handshake();

  websocketStore.joinOrCreateRoom({
    name: gameStore.playerName,
    categoryId: gameStore.selectedCategory,
  });

});
</script>

<template>
  <div class="game-start">
    <header>
      <h1>KeluargaKata</h1>
      <p>Game Kartu Bicara untuk Menguatkan Relationship</p>
    </header>

    <!-- Loading Skeleton -->
    <div v-if="loading" class="skeleton-loader">
      <div class="skeleton-header"></div>
      <div class="skeleton-card"></div>
      <div class="skeleton-buttons"></div>
    </div>

    <!-- Main Content -->
    <div v-else>
      <main>
        <div class="card">
          <div class="card-content">
            <p>{{ currentQuestion }}</p>
          </div>
        </div>
      </main>

      <footer>
        <button class="btn-next" @click="nextQuestion">Selanjutnya</button>
        <button class="btn-exit" @click="exitGame">Keluar Game</button>
      </footer>
    </div>

  </div>
</template>

<style scoped>
.game-start {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fafafa;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 10px 0;
}

header p {
  font-size: 1.2rem;
  color: #666;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 90%;
  max-width: 600px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  margin-bottom: 2rem;
}

.card-content {
  font-size: 1.4rem;
  color: #333;
  line-height: 1.6;
}

footer {
  display: flex;
  gap: 1rem;
}

button {
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-next {
  background-color: #42b983;
  color: white;
}

.btn-next:hover {
  background-color: #3aa876;
}

.btn-exit {
  background-color: #ff6b6b;
  color: white;
}

.btn-exit:hover {
  background-color: #ff5252;
}

.skeleton-loader {
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #e0e0e0;
  border-radius: 8px;
}

.skeleton-header, .skeleton-card, .skeleton-buttons {
  background-color: #d0d0d0;
  margin: 10px 0;
  border-radius: 4px;
}

.skeleton-header {
  height: 30px;
  width: 70%;
}

.skeleton-card {
  height: 100px;
  width: 100%;
}

.skeleton-buttons {
  height: 40px;
  width: 100px;
}
</style>
