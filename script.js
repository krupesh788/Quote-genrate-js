const quotes = [
  "Some people die at 25 and arenot buried until 75. \n -Benjamin Franklin",
  "If your only goal is to become rich, you will never achieve it.  -John D Rockfeller Sr",
  "When people talk, listen completely.Most people never listen.  -Ernest Hemingway",
  "Better to jump and make a mistake than sit there too frightened to make a move.  -Richard Templar",

  "If you are comfortable dancing in public without alcohol or drugs, you are at peace with who you are.  -Ankur Warikoo",
  "People do not decide their futures, they decide their habits and their habits decide their futures.  -F.M. Alexander",
  "Never put too much trust in friends, learn how to use enemies.  -Robert Greene",
  "Only staying active will make you want to livea hundred years.  -Japanese Proverb",
  "You are what you eat and read.-Maya Corrigan Fall in love with taking care of yourself.Fall in love with becoming the best version of yourself but with patience, with compassion andrespect to your own journey.  - S. Mcnutt",
  "The first step toward getting somewhere is to decide that you are not going to stay where you are.  -J.P. Morgan",
  "The single most powerful asset we all have is our mind. If it is trained well, it can create enormous wealth.  -Robert T Kiyosak",
];

//const generateButton = document.getElementById("#generate-button");

//const quoteText = document.getElementById("#quote-text");

//generateButton.addEventListener("click", quoteGenerate());

function quoteGenerate() {

  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-text").innerHTML = '"' + quotes[randomIndex]  + '"';

}
