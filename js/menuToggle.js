const botao = document.querySelector('.button-menu-toggle');
const menu = document.querySelector('.menu-toggle');
const overlay = document.querySelector('.overlay');

botao.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  overlay.classList.toggle('ativo');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('ativo');
  overlay.classList.remove('ativo');
});