let allCards = document.querySelectorAll(".produtos-carrinho .card");

function quantidadeProduto() {
  allCards.forEach(function (card) {
    let spanQtd = card.querySelector(".quantidade");
    let btnSubtrair = card.querySelector(".subtrair");
    let btnAdicionar = card.querySelector(".adicionar");

    let qtdAtual = parseInt(spanQtd.innerText);

    btnSubtrair.addEventListener("click", function () {
      if (qtdAtual > 1) {
        qtdAtual--;
        spanQtd.innerText = qtdAtual;
        atualizarQuantidadeTotal();
        atualizarValorTotal();
      }
    });

    btnAdicionar.addEventListener("click", function () {
      qtdAtual++;
      spanQtd.innerText = qtdAtual;
      atualizarQuantidadeTotal();
      atualizarValorTotal();
    });
  });
}

function atualizarQuantidadeTotal() {
  let quantidadeTotal = 0;

  allCards.forEach(function (card) {
    let qtd = card.querySelector(".quantidade");
    let qtdAtual = parseInt(qtd.innerText);

    quantidadeTotal += qtdAtual;
  });

  let quantTotal = document.getElementById("quant");
  quantTotal.innerHTML = quantidadeTotal;
}

function atualizarValorTotal() {
  let valorTotal = 0;

  allCards.forEach(function (card) {
    let spanQtd = card.querySelector(".quantidade");
    let qtdAtual = parseInt(spanQtd.innerText);

    let preco = card.querySelector(".preco");
    let precoUnitario = parseFloat(
      preco.innerText.replace("R$", "").replace(".", "").replace(",", ".")
    );

    valorTotal += precoUnitario * qtdAtual;
  });

  let soma = document.getElementById("valor");
  soma.innerText = ` ${valorTotal.toFixed(2).replace(".", ",")}`;

  let valorTotalCompra = document.getElementById("valor-total");
  valorTotalCompra.innerText = `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
}

quantidadeProduto();
atualizarQuantidadeTotal();
atualizarValorTotal();

let slider = document.querySelector(".slider-carousel");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("previous");

let currentPosition = 0;
let card = document.querySelector(".slider-carousel .card");
let propriedadesCard = card.getBoundingClientRect();

let cardWidth = propriedadesCard.width + 76;

nextButton.addEventListener("click", () => {
  if (currentPosition < 1815) {
    currentPosition += cardWidth;
    slider.style.transform = `translateX(-${currentPosition}px)`;
    console.log(currentPosition);
  } else {
    currentPosition = 0 - cardWidth;
  }
});

prevButton.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition -= cardWidth;
    slider.style.transform = `translateX(-${currentPosition}px)`;
  }
});
