const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

const visibleCards = 3;
let index = visibleCards;
let isMoving = false; // lock for preventing fast clicks

// Clone first and last cards for seamless looping
const firstClones = cards.slice(0, visibleCards).map(card => card.cloneNode(true));
const lastClones = cards.slice(-visibleCards).map(card => card.cloneNode(true));

firstClones.forEach(clone => track.appendChild(clone));
lastClones.forEach(clone => track.prepend(clone));

const allCards = Array.from(track.children);
const cardWidth = cards[0].offsetWidth + 20; // include gap

// Start in the "real" first card position
track.style.transform = `translateX(-${cardWidth * index}px)`;

function moveCarousel() {
  track.style.transition = 'transform 0.5s';
  track.style.transform = `translateX(-${cardWidth * index}px)`;
  isMoving = true;
}

nextBtn.addEventListener('click', () => {
  if (isMoving) return; // ignore clicks during transition
  index++;
  moveCarousel();
});

prevBtn.addEventListener('click', () => {
  if (isMoving) return;
  index--;
  moveCarousel();
});

// Handle seamless looping
track.addEventListener('transitionend', () => {
  isMoving = false; // unlock after transition

  if (index >= allCards.length - visibleCards) {
    track.style.transition = 'none';
    index = visibleCards; // reset to first real card
    track.style.transform = `translateX(-${cardWidth * index}px)`;
  }
  if (index < visibleCards) {
    track.style.transition = 'none';
    index = allCards.length - (visibleCards * 2); // reset to last real card
    track.style.transform = `translateX(-${cardWidth * index}px)`;
  }
});