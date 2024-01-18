const frog = document.getElementById('frog');
const quoteText = document.getElementById('quote-text');

const quotes = [
    "ты уверена?",
    "делай что должно, и будь что будет.",
    "хочется чипсиков, девочки.",
    "шоколадка сама себя не съест.",
    "ты королева пятерочки, бейба.",
    "если проблему можно решить деньгами, то это не проблема — это расходы.",
    "ЖО - жизнь одна!",
    "как любил тебя Валера, больше никто не полюбит!",
    "я прошла аффганскую войну, и всем мужчинам советую.",
    "будет ли тебе это важно через пять лет, вспомнит ли кто об этом?",
    "нормально делай - нормально будет.",
    "безвыходных ситуаций не бывает, бывают ситуации, выход из которых нам не нравится.",
    "запомни, одна ошибка и ты ошибся.",
    "чувствуется запах бедности.",
    "страшно, очень страшно...",
    "...если бы мы знали, что это такое, но мы не знаем, что это такое.",
    "вдыхаем розовый дым из земли.",
    "безделие - игрушка дьявола.",
    "курлык-курлык.",
    "твое рождение - подарок миру!",
    "кайфуйте! живите здесь и сейчас! жизнь одна!11 ааааааАААААА!!!!!111",
    "как насчет старого доброго кутежа?",
    "может поугараем?",
    "лучше быть последним — первым, чем первым — последним.",
    "иногда жизнь - это жизнь, а ты в ней иногда.",
    "сначала потом, затем, снова опять.",
    "даже если нет шансов, всегда есть шанс",
    "мало кто поймет, но кто поймет тот мало кто.",

];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayRandomQuote() {
    quoteText.innerText = getRandomQuote();
}

frog.addEventListener('click', displayRandomQuote);

document.getElementById('frog').addEventListener('click', function() {
  var audio = new Audio('public/a.mp3');
  audio.play();
});

document.getElementById('frog').addEventListener('click', function() {
  confetti();
});

logo.addEventListener('click', displayRandomQuote);

document.getElementById('logo').addEventListener('click', function() {
  var audio = new Audio('public/logo.mp3');
  audio.play();
});