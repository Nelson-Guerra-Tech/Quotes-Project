// get quotes from api
const url = "https://type.fit/api/quotes";
let apiQuotes = [];
//  fetch function
const getQuotes = async () => {
  try {
    const response = await fetch(url);
    apiQuotes = await response.json();
    console.log(apiQuotes);
  } catch (error) {
    // where we handle an error if api does not return
  }
};

// on load
getQuotes();
