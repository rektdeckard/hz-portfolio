// Add single-quoted phrases or quotations here, separated
// by commas, to be randomly shown on page load
const quotes = [
  // Ideal length ~= 30 characters OR 1 emoji + 27 characters
  "👩🏻‍💻 Beep boop boop",
  "🎶 Listening: Summer Walker",
  "🎵 Listening: SZA",
  "🎶 Listening: Early aughts alt metal",
  "📖 Reading: What Technology Wants",
  "📚 Reading: WOLFPACK",
  "📺 Watching: Halt and Catch Fire",
  "🎮 Playing: Hades",
  "🎮 Playing: Stardew Valley",
];

function randomQuote() {
  const quoteSpan = document.getElementById("quote");
  if (quoteSpan) {
    quoteSpan.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
  }
}

randomQuote();
window.setInterval(randomQuote, 5000);
