const target = document.getElementById('menu');
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById('drawer-nav');
  nav.classList.toggle('in');
});

const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const modal = document.getElementById('modal');
openButton.addEventListener('click', () => {
  modal.style.display = 'block';
});
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (!e.target.closest('.modal-content-inner') && e.target.id !== 'openButton') {
    modal.style.display = 'none';
  }
});

function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

scrollTop('button');