// Menu Hamburguer
class MobileMenu {
  constructor() {
    this.hamburger = null;
    this.nav = null;
    this.isOpen = false;
    this.init();
  }

  init() {
    this.createHamburgerButton();
    this.setupEventListeners();
    this.setupMediaQuery();
  }

  createHamburgerButton() {
    // Verificar se já existe
    if (document.querySelector('.hamburger')) {
      this.hamburger = document.querySelector('.hamburger');
      this.nav = document.querySelector('nav');
      return;
    }

    // Criar botão hamburguer
    this.hamburger = document.createElement('button');
    this.hamburger.className = 'hamburger';
    this.hamburger.setAttribute('aria-label', 'Abrir menu');
    this.hamburger.setAttribute('aria-expanded', 'false');
    this.hamburger.innerHTML = `
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    `;

    // Inserir depois do logo e antes do botão de tema
    const branding = document.querySelector('.site-branding');
    const themeToggle = document.querySelector('.theme-toggle');
    const nav = document.querySelector('nav');

    if (branding && themeToggle) {
      themeToggle.parentNode.insertBefore(this.hamburger, themeToggle);
    }

    this.nav = nav;
  }

  setupEventListeners() {
    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this.toggleMenu());
    }

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
      if (!e.target.closest('header') && this.isOpen) {
        this.closeMenu();
      }
    });

    // Fechar menu ao redimensionar
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.isOpen) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.isOpen = true;
    this.nav.classList.add('active');
    this.hamburger.classList.add('active');
    this.hamburger.setAttribute('aria-expanded', 'true');
  }

  closeMenu() {
    this.isOpen = false;
    this.nav.classList.remove('active');
    this.hamburger.classList.remove('active');
    this.hamburger.setAttribute('aria-expanded', 'false');
  }

  setupMediaQuery() {
    // Resetar estado em media query
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.addEventListener('change', (e) => {
      if (!e.matches && this.isOpen) {
        this.closeMenu();
      }
    });
  }
}

// Inicializar ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  new MobileMenu();
});
