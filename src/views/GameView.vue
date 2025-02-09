<script setup lang="ts">
import { ref } from 'vue';

// Contoh data pertanyaan (bisa diganti dengan data dari API atau state management)
const questions = ref([
  "Apa momen terbaik yang pernah kalian alami bersama?",
  "Siapa yang paling suka bercanda di antara kalian?",
  "Jika bisa berlibur bersama, ke mana tujuan impian kalian?",
  "Apa hal pertama yang menarik perhatianmu dari pasanganmu?",
  "Bagaimana kalian merayakan anniversary pertama?",
]);

const currentQuestionIndex = ref(0);

// Fungsi untuk menampilkan pertanyaan berikutnya
const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
  } else {
    alert("Pertanyaan sudah habis! Mulai dari awal lagi.");
    currentQuestionIndex.value = 0;
  }
};

// Fungsi untuk keluar dari permainan
const exitGame = () => {
  if (confirm("Apakah Anda yakin ingin keluar dari permainan?")) {
    window.location.href = "/"; // Ganti dengan route yang sesuai
  }
};
</script>

<template>
  <div class="game-start">
    <header>
      <h1>KeluargaKata</h1>
      <p>Game Kartu Bicara untuk Menguatkan Relationship</p>
    </header>

    <main>
      <div class="card">
        <div class="card-content">
          <p>{{ questions[currentQuestionIndex] }}</p>
        </div>
      </div>
    </main>

    <footer>
      <button class="btn-next" @click="nextQuestion">Selanjutnya</button>
      <button class="btn-exit" @click="exitGame">Keluar Game</button>
    </footer>
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
</style>
