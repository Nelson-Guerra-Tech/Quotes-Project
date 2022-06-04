// targetting html elements
const newQuoteBtn = document.getElementById("new-quote");
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");

// get quotes from api
const url = "https://type.fit/api/quotes";
let apiQuotes = [];

// show new quote
const newQuote = () => {
  // pick a random quote from api quotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  //   check if author field is blank and replace it with quote unknown
  if (!quote.author) {
    authorText.textContent = "unknown";
  } else {
    authorText.textContent = quote.author;
  }

  // if text is too long, we will change styling
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;
};

//  fetch function
const getQuotes = async () => {
  try {
    const response = await fetch(url);
    apiQuotes = await response.json();
    console.log(apiQuotes);
    // returning
    newQuote();
  } catch (error) {
    // where we handle an error if api does not return
  }
};

// tweet quote
const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

  //   open a window using twitter url
  window.open(twitterUrl, "_blank");
};

// twitter btn event listener
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// on load
getQuotes();
