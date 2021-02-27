// Add single-quoted phrases or quotations here, separated
// by commas, to be randomly shown on page load
const quotes = [
// Ideal length ~= 30 characters OR 1 emoji + 27 characters
  '👩🏻‍💻 Beep boop boop',
  '🎶 Listening: Summer Walker',
  '🎵 Listening: SZA',
  '🎶 Listening: Lúnasa',
  '📺 Watching: Halt and Catch Fire',
  '📺 Watching: Disenchantment',
  '🎮 Playing: Hades',
];

const quoteSpan = document.getElementById("quote");
if (quoteSpan) {
  quoteSpan.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
};
