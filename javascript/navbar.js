const navbar = document.querySelector('.navbar');

// Funcție pentru a seta starea inițială a navbar-ului
function checkNavbarInitial() {
  if (window.innerWidth <= 768) { 
    navbar.classList.add('scrolled'); // navbar mic de la început
  } else {
    navbar.classList.remove('scrolled'); // navbar mare pe desktop
  }
}

// Apel la încărcarea paginii
checkNavbarInitial();

// Actualizare la resize
window.addEventListener('resize', checkNavbarInitial);

// Navbar shrink on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else if (window.innerWidth > 768) {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scroll + închidere offcanvas la click pe link
document.querySelectorAll('.offcanvas .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();
      const navbarHeight = navbar.offsetHeight;
      const elementPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }

    // Închide offcanvas după click
    const offcanvasEl = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
    if (offcanvasEl) offcanvasEl.hide();
  });
});
