<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="home">
    <!-- Header Section -->
    <header style="text-align: center;">
      <img alt="KeluargaKata Logo" class="logo text-center" src="@/assets/logo.svg" width="150" height="150" />
      <h1>KeluargaKata</h1>
      <p>Game Kartu Bicara untuk Menguatkan Relationship</p>
    </header>

    <!-- Main Content -->
    <main>
      <div class="actions">
        <RouterLink to="/input" class="btn-start">
          Mulai Permainan
        </RouterLink>
        <RouterLink to="/tentang" class="btn-secondary">
          Tentang Game
        </RouterLink>
      </div>
    </main>

    <!-- Footer Section -->
    <footer>
      <p>© 2023 KeluargaKata. Dibuat dengan ❤️ oleh Brogrammer.id</p>
    </footer>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
}

header {
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

.actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn-start, .btn-secondary {
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-start {
  background-color: #42b983;
  color: white;
}

.btn-start:hover {
  background-color: #3aa876;
}

.btn-secondary {
  background-color: #e4e4e4;
  color: #2c3e50;
}

.btn-secondary:hover {
  background-color: #d4d4d4;
}

footer {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #888;
}
</style>
