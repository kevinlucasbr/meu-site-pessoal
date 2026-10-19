const btnTema = document.getElementById('btn-tema');
const body = document.body;

// 1. Carrega a preferência salva no localStorage ao abrir a página
if (localStorage.getItem('tema') === 'escuro') {
  body.classList.add('dark-mode');
}

// 2. Alterna o tema ao clicar no botão e salva no localStorage
btnTema.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('tema', 'escuro');
  } else {
    localStorage.setItem('tema', 'claro');
  }
});
