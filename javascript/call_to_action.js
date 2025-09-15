const callBtn = document.querySelector('.call-btn');
const footer = document.querySelector('footer');

function updateCallBtnPosition() {
  const footerRect = footer.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // If footer is in view, place button above it
  if (footerRect.top < viewportHeight) {
    const overlap = viewportHeight - footerRect.top;
    callBtn.style.bottom = `${overlap + 20}px`; // 20px gap
  } else {
    callBtn.style.bottom = `20px`; // default distance from bottom
  }
}

window.addEventListener('scroll', updateCallBtnPosition);
window.addEventListener('resize', updateCallBtnPosition);
window.addEventListener('load', updateCallBtnPosition);