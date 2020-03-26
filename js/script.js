/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//Variable that has multiple properties that stores the actual quote, source, year and citation.

const quotes = [
  {
    //quote 1
    quote: `"Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way"` ,
    source: `Michael Scott, Season 5, "The Duel"`
  },
  {
    //quote 2 
    quote: `"I find your lack of faith disturbing"`,
    source: "Darth Vader, Star Wars A New Hope"
  },
  {
    //quote 3
    quote: `"It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to."`,
    source:  "Bilbo, The Lord of the Rings Fellowship of the Ring"
  },
  {
    //quote 4
    quote:  `"Yesterday, December 7th, 1941 -- a date which will live in infamy."`,
    source:  "President Franklin Roosevelt",
    year: "December 8, 1941"
  },
  {
    //quote 5
    quote:  `"Wake me...when you need me"`,
    source: "Master Chief",
    citation: "Halo 3"
   }
  ];
  
  //This Function makes a random number that is assigned to the quote variable.

  function getRandomQuote (array) {
    var quoteIndex = Math.floor(Math.random() * (quote.length));
      var randomQuote = array[quoteIndex]
    return randomQuote;
  }

  
  /***
   * `printQuote` function
  ***/
//This is the function that takes the getRandomQuote Function and prints it to the page based on the number
// and the properties available in each quote

  function printQuote (){
    var result = getRandomQuote(quote);
      if (result.year){   
        var message = "<p class = 'quote'>" + result.quote + "</p>" + "<p class ='source'>" + result.source 
  +     "</p>"+"<p class = 'year'>" + result.year + "</p>";
 }    else{   
        var message = "<p class = 'quote'>" + result.quote + "</p>" + "<p class ='source'>" + result.source + "</p>";
 }

  document.getElementById('quote-box').innerHTML = message;
    }

//This variable puts the webpage on a timer that changes the quote every 10 seconds, as measured in milliseconds

var quoteTimer = setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);