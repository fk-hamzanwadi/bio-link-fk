// Ambil tombol dan body
const toggleBtn = document.getElementById('darkToggle');
const body = document.body;

// Saat tombol diklik
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    toggleBtn.textContent = '☀️ Mode Terang';
  } else {
    toggleBtn.textContent = '🌙 Mode Gelap';
  }
});
