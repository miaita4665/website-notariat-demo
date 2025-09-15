const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Funcție pentru a seta starea inițială a navbar-ului
function checkNavbarInitial() {
    if (window.innerWidth <= 768) { // breakpoint pentru mobil
        navbar.classList.add('scrolled'); // navbar mic de la început
    } else {
        navbar.classList.remove('scrolled'); // navbar mare pe desktop
    }
}

// Apel la încărcarea paginii
checkNavbarInitial();

// Actualizare la resize-ul ferestrei
window.addEventListener('resize', checkNavbarInitial);

// Navbar shrink on scroll (desktop și mobil)
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else if (window.innerWidth > 768) {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll și închidere navbar la click pe link
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const elementPosition = targetElement.offsetTop - navbarHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }

        // Închide navbar-ul dacă este deschis (Bootstrap)
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});
document.querySelectorAll('.offcanvas .nav-link').forEach(link => {
  link.addEventListener('click', function(e){
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if(targetElement){
      e.preventDefault(); // doar dacă există elementul țintă
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const elementPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }

    // Închide offcanvas după click pe link
    const offcanvasEl = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
    if(offcanvasEl) offcanvasEl.hide();
  });
});

