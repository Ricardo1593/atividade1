// Dark Mode Toggle
function initThemeToggle() {
  const darkModeToggle = document.querySelector('.theme-toggle');
  const htmlElement = document.documentElement;
  
  // Verificar preferência salva ou preferência do sistema
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
  }
  
  // Atualizar texto do botão
  updateThemeButtonText();
  
  // Listener para mudanças no tema
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleTheme);
  }
  
  // Listener para mudança de preferência do sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      updateThemeButtonText();
    }
  });
}

function toggleTheme() {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  updateThemeButtonText();
}

function updateThemeButtonText() {
  const darkModeToggle = document.querySelector('.theme-toggle');
  if (darkModeToggle) {
    const isDark = document.body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDark ? '☀️ Claro' : '🌙 Escuro';
  }
}

// Inicializar ao carregar o DOM
document.addEventListener('DOMContentLoaded', initThemeToggle);
