const abrir = document.getElementById('abrir');
const fechar = document.getElementById('fechar');
const modal = document.getElementById('modal');

abrir.addEventListener('click', () => {
    modal.hidden = false;
});

fechar.addEventListener('click', () => {
    modal.hidden = true;
});

modal.addEventListener('click', (e) =>{
    if(e.target === modal){
        modal.hidden = true;
    }
});
