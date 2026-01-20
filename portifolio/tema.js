const botaoTema = document.querySelector('.btn-tema');

botaoTema.addEventListener('click', function () {
    document.body.classList.toggle('tema-escuro');
    document.body.classList.toggle('tema-claro');

    if (document.body.classList.contains('tema-escuro')) {
        this.textContent = 'Light';
    } else {
        this.textContent = 'Dark';
    }

 
});
