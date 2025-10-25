

document.addEventListener('DOMContentLoaded', function () {
 
  var form = document.querySelector('form[aria-label="Formulário de cadastro"]');
  if (form) {
    form.addEventListener('submit', function (e) {
      var senha = form.querySelector('#senha');
      var confirma = form.querySelector('#confirma');
      if (senha && confirma) {
        if (senha.value !== confirma.value) {
          e.preventDefault();
          confirma.setCustomValidity('As senhas não coincidem.');
          
          confirma.reportValidity();
          confirma.focus();
          return false;
        } else {
          confirma.setCustomValidity('');
        }
      }
   
    });

   
    ['#senha', '#confirma'].forEach(function (sel) {
      var el = form.querySelector(sel);
      if (el) {
        el.addEventListener('input', function () { el.setCustomValidity(''); });
      }
    });
  }

  
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      var href = a.getAttribute('href');
      if (href && href.length > 1) {
        var target = document.querySelector(href);
        if (target) {
          ev.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
         
          try { target.focus({ preventScroll: true }); } catch (e) { target.setAttribute('tabindex', '-1'); target.focus(); }
        }
      }
    });
  });

  
  document.querySelectorAll('button').forEach(function (b) {
    if (!b.hasAttribute('type')) b.setAttribute('type', 'button');
  });

  
  var hero = document.getElementById('hero-photo');
  if (hero) {
    
    if (!hero.hasAttribute('tabindex')) hero.setAttribute('tabindex', '0');

    hero.addEventListener('mouseenter', function () { hero.classList.add('enlarged'); });
    hero.addEventListener('mouseleave', function () { hero.classList.remove('enlarged'); });
    hero.addEventListener('focus', function () { hero.classList.add('enlarged'); });
    hero.addEventListener('blur', function () { hero.classList.remove('enlarged'); });


    hero.addEventListener('click', function () { hero.classList.toggle('enlarged'); });
  }

});
