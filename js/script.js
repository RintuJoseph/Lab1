// Project 1: Display Random Phrases / Flash Cards

// Quote array is created to store the quote objects consisting of quotes,source,citation and year
let quotes = [];
quotes = [
  {
    quote: "Enthusiasm makes up for a host of deficiencies",
    source: "Barak Obama",
    citation: "A Promise Land",
    year: 2020,
  },
  {
    quote: "I never dreamed about success I worked for it",
    source: "Estee Lauder",
  },
  {
    quote: "Believe you can, and you’re halfway there",
    source: "Theodore Roosevelt",
  },
  {
    quote:
      "I believe that the only courage anybody ever needs is the courage to follow your dreams",
    source: "Oprah Winfrey",
  },
  {
    quote: "The best way to get started is to quit talking and begin doing",
    source: "Walt Disney",
  },
];

//  `getRandomQuote` function: To generate the random number to select differebt quote objects from the quotes array
let oldrandomNumber;
const getRandomQuote = () => {
  let selectedObject;
  let randomNumber;
  console.log("old" + oldrandomNumber);
  //Generate the random number
  //To check whether the random number is repeated simultaneously
  do {
    randomNumber = Math.floor(Math.random() * quotes.length);
    console.log(randomNumber);
  } while (randomNumber == oldrandomNumber);
  //selecting the quote object based on the randomNumber generated
  selectedObject = quotes[randomNumber];
  oldrandomNumber = randomNumber;
  return selectedObject;
};

// `printQuote` function: To display the quotes in the webpage each time the 'Next Quote' button is clicked

function printQuote() {
  let randomQuote = getRandomQuote();
  console.log(randomQuote);
  //PtoHTML string contains the HTML output string
  let PtoHTML1 = `<p class='quote'>  ${randomQuote.quote} <p class='source'> ${randomQuote.source}`;
  let quoteCitation = randomQuote.citation;
  let yearOfQuote = randomQuote.year;
  // if statement to check if the citation for the quote object is empty or not.If not empty, the HTML
  // element is added to the PtoHTML string
  if (quoteCitation != null) {
    PtoHTML1 += `<span class='citation'>${quoteCitation}</span>`;
  }
  // if statement to check if the year for the quote object is empty or not.If not empty, the HTML
  // element is added to the PtoHTML string
  if (yearOfQuote != null) {
    PtoHTML1 += `<span class='year'>${yearOfQuote}</span>`;
  }
  // concatenating the  the closing </p> tag to the HTML string
  PtoHTML1 += `<\p>`;
  console.log(randomQuote.quote);
  console.log(randomQuote.source);
  console.log(quoteCitation);
  console.log(yearOfQuote);
  console.log(PtoHTML1);
  // setting the innerHTML of the quote-box div to equal the complete HTML string
  document.getElementById("quote-box").innerHTML = PtoHTML1;
}

// click event listener for the print quote button
document.getElementById("load-quote").addEventListener("click", printQuote);
