// Add single-quoted phrases or quotations here, separated
// by commas, to be randomly shown on page load
const quotes = [
  // Ideal length ~= 30 characters OR 1 emoji + 27 characters
  "👩🏻‍💻 Beep boop boop",
  "🎵 Listening: Stone Temple Pilots",
  "🎶 Listening: Charli xcx",
  "🎵 Listening: Portishead",
  "🎶 Listening: SZA",
  "📖 Reading: Shift Happens",
  "📺 Watching: The Bear",
  "📺 Watching: X-Files",
  "📺 Watching: Killing Eve",
  "🎮 Playing: AoE II",
];

function randomQuote() {
  const quoteSpan = document.getElementById("quote");
  if (quoteSpan) {
    quoteSpan.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
  }
}

randomQuote();
window.setInterval(randomQuote, 5000);
