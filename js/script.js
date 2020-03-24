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
const quote = [
  {
    //quote 1
    quote: `"Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way"` ,
    source: `"- Michael Scott, Season 5, "The Duel"`
  },
  {
    //quote 2 
    quote: `"I find your lack of faith disturbing"`,
    source: "- Darth Vader, Star Wars A New Hope"
  },
  {
    //quote 3
    quote: `"It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to."`,
    source:  "- Bilbo, The Lord of the Rings Fellowship of the Ring"
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
    source: "Master Chief, Halo 3"
   }
  ];
  
  
  /***
   * `getRandomQuote` function
  ***/
  
  function getRandomQuote (array) {
  var quoteIndex = Math.floor(Math.random() * (quote.length));
      var randomQuote = array[quoteIndex]
  return randomQuote;
  }

  
  /***
   * `printQuote` function
  ***/

  function printQuote (){
 var result = getRandomQuote();
    var message = "<p class = 'quote'>" + quote.quote + "</p>" + "<p class ='source'>" + quote.source + "</p>" + "<p class = 'year'>" + quote.year + "</p>";
    if ( quote.quote === true){
      print (quote.quote);

 document.getElementById('quote-box').innerHTML = message;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);