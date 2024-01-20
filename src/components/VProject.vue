<script setup>
import {ref} from 'vue';
import confetti from 'canvas-confetti';


const frog = document.getElementById('frog')
const quoteText = document.getElementById('quote-text')
const audio = new Audio('/a.mp3')

const quote = ref('')
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

]

function getRandomQuote() {
  quote.value = quotes[Math.floor(Math.random() * quotes.length)]
}

function handleClick(event) {
  getRandomQuote();
  audio.play();
  confetti();
}

</script>

<template>
  <v-content class="content">
    <div class="container">
      <h1 class="container">сними стресс, зайка</h1>
      <div @click="handleClick">
        <img src="/pic1.png" alt="frog" style="display: block; margin: auto">
      </div>
      <h2 class="container" id="quote-text">{{ quote }}</h2>
    </div>
  </v-content>
</template>

<style scoped>

</style>