
const elementos = document.querySelectorAll('.home,.projetos, .tecnologias, .aboutMe,.comoPenso ,.contato ');


function animarScroll() {
  const alturaTela = window.innerHeight * 0.80; 
  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;

    if (posicao < alturaTela) {
      el.classList.add('active'); 
    } 
  });
}

window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);
