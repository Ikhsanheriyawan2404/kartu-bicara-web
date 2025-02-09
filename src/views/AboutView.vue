<template>
  <div class="about">
    <header>
      <h1>Tentang KeluargaKata</h1>
      <p>Mengenal Lebih Dekat Game Kartu Bicara yang Menguatkan Hubungan</p>
    </header>

    <main>
      <div class="about-content">
        <section>
          <h2>Apa Itu KeluargaKata?</h2>
          <p>
            KeluargaKata adalah sebuah permainan kartu bicara yang dirancang untuk mempererat hubungan antara keluarga, teman, dan pasangan. Dengan pertanyaan-pertanyaan yang mendalam dan menyenangkan, kami membantu Anda membangun komunikasi yang lebih baik dan menciptakan momen berharga bersama orang terkasih.
          </p>
        </section>

        <section>
          <h2>Mengapa Memilih KeluargaKata?</h2>
          <ul>
            <li>🎯 <strong>Pertanyaan Beragam</strong>: Tersedia berbagai kategori pertanyaan untuk setiap jenis hubungan.</li>
            <li>💡 <strong>Meningkatkan Komunikasi</strong>: Membuka percakapan yang bermakna dan mendalam.</li>
            <li>😊 <strong>Menyenangkan</strong>: Didesain untuk membuat Anda tertawa dan terhubung.</li>
            <li>📱 <strong>Mudah Digunakan</strong>: Cukup buka aplikasi, pilih kategori, dan mulai bermain!</li>
          </ul>
        </section>

        <section>
          <h2>Tim Kami</h2>
          <p>
            KeluargaKata dibuat oleh tim yang peduli akan pentingnya komunikasi dalam hubungan. Kami percaya bahwa setiap kata yang diucapkan dapat membawa kebahagiaan dan kedekatan yang lebih besar.
          </p>
        </section>
      </div>
    </main>

    <footer>
      <RouterLink to="/" class="btn-home">Kembali ke Home</RouterLink>
    </footer>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fafafa;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  text-align: center;
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

.about-content {
  max-width: 800px;
  text-align: left;
  margin: 0 auto;
}

h2 {
  font-size: 1.8rem;
  color: #42b983;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

ul li strong {
  margin-left: 0.5rem;
}

.btn-home {
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
}

.btn-home:hover {
  background-color: #3aa876;
}

@media (max-width: 768px) {
  .about-content {
    padding: 0 20px;
  }

  h2 {
    font-size: 1.5rem;
  }

  p, ul li {
    font-size: 1rem;
  }
}
</style>
