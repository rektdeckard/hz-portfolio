// Add single-quoted phrases or quotations here, separated
// by commas, to be randomly shown on page load
const quotes = [
// Ideal length ~= 30 characters OR 1 emoji + 27 characters
  '👩🏻‍💻 Beep boop boop',
  '📖 Reading: Atomic Habits',
  '📖 Reading: Good Strategy/Bad Strategy',
  '🎶 Listening: Blood Orange',
  '🎵 Listening: 90s grunge',
  '📺 Watching: Succession',
  '📺 Watching: Schitt\'s Creek',
  '🎮 Playing: Age of Empires II',
  '🎮 Playing: Overcooked',
];

const quoteSpan = document.getElementById("quote");
if (quoteSpan) {
  quoteSpan.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
};
