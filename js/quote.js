const quotes = [
  '“When one teaches, two learn.” — Robert Heinlein',
  '“Design is thinking made visual.” — Saul Bass',
  '“Do not seek praise, seek criticism.” — Paul Arden',
  '“Design is a solution to a problem; art is a question to a problem.” — John Maeda',
  '“I think designers who aren’t selfish do really awful work.” — Paul Sahre',
  '“Good design is obvious. Great design is transparent.” — Joe Sparano',
  '“Have no fear of perfection — you’ll never reach it.” — Salvador Dali',
  '“The function of design is letting design function.” — Micha Commeren',
  // '“Good design is all about making other designers feel like idiots because that idea wasn’t theirs.” — Frank Chimero',
];

const quoteSpan = document.getElementById("quote");
if (quoteSpan) {
  quoteSpan.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
};
