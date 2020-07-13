// Add single-quoted phrases or quotations here, separated
// by commas, to be randomly shown on page load
const quotes = [
// Ideal length ~= 30 characters OR 1 emoji + 28 characters
//'‍😜<-------------------------->'
  '👩🏻‍💻 Did somebody say icons??',
  '🐈 Everything I do is for Bub',
  '💎 Sharp as all heck',
  '🥔 Look, I made potatoes!'
];

const quoteSpan = document.getElementById("quote");
if (quoteSpan) {
  quoteSpan.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
};
