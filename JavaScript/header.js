let categoria = document.getElementById('categoria');
let modalCategoria = document.getElementById('modal_categoria');

// Função para exibir o modal
function modalVisibleCategoria() {
    modalCategoria.style.display = 'block';
}

// Função para ocultar o modal
function modalInvisibleCategoria() {
    modalCategoria.style.display = 'none';
}

// Mostrar modal quando o mouse passar por cima de 'categoria'
categoria.addEventListener('mouseenter', modalVisibleCategoria);

// Ocultar modal quando o mouse sair de 'categoria'
categoria.addEventListener('mouseleave', modalInvisibleCategoria);

let favorito = document.getElementById('favorito');
let modalFavorito = document.getElementById('modal_favorito');

// Função para exibir o modal
function modalVisibleFavorito() {
    modalFavorito.style.display = 'block';
}

// Função para ocultar o modal
function modalInvisibleFavorito() {
    modalFavorito.style.display = 'none';
}

// Mostrar modal quando o mouse passar por cima de 'favorito'
favorito.addEventListener('mouseenter', modalVisibleFavorito);

// Ocultar modal quando o mouse sair de 'favorito'
favorito.addEventListener('mouseleave', modalInvisibleFavorito);
