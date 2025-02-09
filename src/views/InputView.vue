<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const categories = ref([
  { id: 1, name: "Teman" },
  { id: 2, name: "Pasangan" },
]);

const selectedCategory = ref<number | null>(null);
const playerName = ref<string>("");

// Fungsi untuk memulai permainan
const startGame = () => {
  if (!selectedCategory.value || !playerName.value.trim()) {
    alert("Harap pilih kategori dan masukkan nama!");
    return;
  }
  router.push({
    path: "/game",
    query: { category: selectedCategory.value, name: playerName.value },
  });
};
</script>

<template>
  <div class="input-page">
    <header>
      <h1>Persiapan Permainan</h1>
      <p>Isi data berikut untuk memulai permainan.</p>
    </header>

    <!-- Category Selection -->
    <main>
      <div class="category-selection">
        <h3>Pilih Kategori:</h3>
        <div class="categories">
          <button
            v-for="category in categories"
            :key="category.id"
            :class="['category-btn', { selected: selectedCategory === category.id }]"
            @click="selectedCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>
      </div>

      <!-- Name Input (Visible after category is selected) -->
      <div v-if="selectedCategory" class="form-group">
        <label for="name">Masukkan Nama:</label>
        <input
          id="name"
          type="text"
          v-model="playerName"
          placeholder="Nama Anda"
          @keyup.enter="startGame"
        />
      </div>
    </main>

    <!-- Start Game Button (Enabled when category is selected and name is entered) -->
    <footer>
      <button
        class="btn-start"
        :disabled="!selectedCategory || !playerName.trim()"
        @click="startGame"
      >
        Mulai Permainan
      </button>
    </footer>
  </div>
</template>

<style scoped>
.input-page {
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

.category-selection {
  text-align: center;
  margin-bottom: 2rem;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.category-btn {
  padding: 12px 20px;
  font-size: 1rem;
  border-radius: 8px;
  background-color: #e4e4e4;
  color: #333;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.category-btn:hover {
  background-color: #d4d4d4;
}

.category-btn.selected {
  background-color: #42b983;
  color: white;
}

.form-group {
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 400px;
}

label {
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
}

.btn-start {
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 400px;
}

.btn-start:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.btn-start:hover:enabled {
  background-color: #3aa876;
}
</style>
