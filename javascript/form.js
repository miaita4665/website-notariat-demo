(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()



// Gestionare trimitere formular
document.getElementById('contactForm').addEventListener('submit', (event) => {
  if (!event.target.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    event.preventDefault();

    // Construim obiectul FormData
    const formData = new FormData(event.target);
    selectedFiles.forEach(file => formData.append('attachments[]', file));

    // trimitem la backend (exemplu cu fetch)
    fetch('upload.php', {
      method: 'POST',
      body: formData
    }).then(res => {
      alert("Mesaj trimis cu succes!");
      selectedFiles = [];
      renderFileList();
      event.target.reset();
    }).catch(err => {
      alert("Eroare la trimitere!");
    });
  }
  event.target.classList.add('was-validated');
});
