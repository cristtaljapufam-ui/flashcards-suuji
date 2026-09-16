const numbersData = [
  { num: 1, pt: "um", hiragana: "いち", romaji: "ichi", color: "#ff3b30", kanjiGif: "assets/KANJI/一-order.gif" },
  { num: 2, pt: "dois", hiragana: "に", romaji: "ni", color: "#ff9500", kanjiGif: "assets/KANJI/二-order.gif" },
  { num: 3, pt: "três", hiragana: "さん", romaji: "san", color: "#ffcc00", kanjiGif: "assets/KANJI/三-order.gif" },
  { num: 4, pt: "quatro", hiragana: "よん", romaji: "yon", color: "#34c759", kanjiGif: "assets/KANJI/四-order.gif" },
  { num: 5, pt: "cinco", hiragana: "ご", romaji: "go", color: "#00c7be", kanjiGif: "assets/KANJI/五-order.gif" },
  { num: 6, pt: "seis", hiragana: "ろく", romaji: "roku", color: "#30b0c7", kanjiGif: "assets/KANJI/六-order.gif" },
  { num: 7, pt: "sete", hiragana: "なな", romaji: "nana", color: "#32ade6", kanjiGif: "assets/KANJI/七-order.gif" },
  { num: 8, pt: "oito", hiragana: "はち", romaji: "hachi", color: "#5856d6", kanjiGif: "assets/KANJI/八-order.gif" },
  { num: 9, pt: "nove", hiragana: "きゅう", romaji: "kyuu", color: "#af52de", kanjiGif: "assets/KANJI/九-order.gif" },
  { num: 10, pt: "dez", hiragana: "じゅう", romaji: "juu", color: "#ff2d55", kanjiGif: "assets/KANJI/十-order.gif" }
];

let currentIndex = 0;

const carouselContainer = document.getElementById('carouselContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('counter');

// Função para renderizar o número atual
function renderCard(index) {
  const item = numbersData[index];

  carouselContainer.innerHTML = `
    <div class="number-pair-row">
      <!-- Card Interativo -->
      <div class="card card-interactive" style="--card-color: ${item.color}">
        <div class="card-inner">
          <div class="card-face face-number">
            <div class="num-display">${item.num}</div>
            <div class="footer-label">${item.pt}</div>
          </div>
          <div class="card-face face-japanese">
            <div class="hiragana">${item.hiragana}</div>
            <div class="romaji">${item.romaji}</div>
          </div>
        </div>
      </div>

      <!-- Card do Kanji -->
      <div class="card card-kanji">
        <img src="${item.kanjiGif}" alt="Kanji para ${item.pt}">
      </div>
    </div>
  `;

  // Evento de Virar ao Clicar
  const cardInteractive = carouselContainer.querySelector('.card-interactive');
  cardInteractive.addEventListener('click', () => {
    cardInteractive.classList.toggle('flipped');
  });

  // Atualiza contador abaixo
  counter.textContent = `${index + 1} / ${numbersData.length}`;
}

// Botão Anterior
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + numbersData.length) % numbersData.length;
  renderCard(currentIndex);
});

// Botão Próximo
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % numbersData.length;
  renderCard(currentIndex);
});

// Renderiza o primeiro card ao carregar a página
renderCard(currentIndex);