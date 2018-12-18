var quotes = [
    {
        quote: 'A champion is defined not by their wins but by how they can recover when they fall.', 
        source: 'Serena Williams'
    },
    {
        quote: 'Each person must live their life as a model for others. ', 
        source: 'Rosa Parks'
    },
    {
        quote: 'Motivation comes from working on things we care about. ', 
        source: 'Sheryl Sandberg'
    },
    {
        quote: 'No matter what people tell you, words and ideas can change the world.', 
        source: 'Robin Williams'
    },
    {
        quote: 'With the right kind of coaching and determination you can accomplish anything.', 
        source: 'Reese Witherspoon'
    },
    {
        quote: 'When something is important enough, you do it even if the odds are not in your favor.', 
        source: 'Elon Musk'
    },
    {
        quote: "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.", 
        source: 'Elon Musk'
    },
    {
        quote: "There have to be reasons that you get up in the morning and you want to live. Why do you want to live? What's the point? What inspires you? What do you love about the future? If the future does not include being out there among the stars and being a multi-planet species, I find that incredibly depressing", 
        source: 'Elon Musk'
    },
    {
        quote: "When Henry Ford made cheap, reliable cars, people said, 'Nah, what's wrong with a horse?' That was a huge bet he made, and it worked.", 
        source: 'Elon Musk'
    },
    {
        quote: "Persistence is very important. You should not give up unless you are forced to give up.", 
        source: 'Elon Musk'
    },
    {
        quote: "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.",
        source: 'Bill Gates'
    },
    {
        quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
        source: 'Bill Gates'
    },
    {
        quote: "It's fine to celebrate success but it is more important to heed the lessons of failure.",
        source: 'Bill Gates'
    },
    {
        quote: "Software is a great combination between artistry and engineering",
        source: 'Bill Gates'
    },
    
];

// My get random quote function that will randomly select an index in the array and I will grab the object of that index
function getRandomQuote(array){

var random = (Math.floor( Math.random() * (array.length)));


var combinedQuote = quotes[random];
//console.log();
return combinedQuote;
}


// My print quote function. Inside the print quote function the get random quote function. 
function printQuote () {
    var randomQuote = getRandomQuote(quotes);
    var HTML="";
    HTML += '<p class="quote">' + randomQuote.quote + '</p>';
    HTML += '<p class="source">' + randomQuote.source + '</p>';
    
    document.getElementById("quote-box").innerHTML = HTML;
    document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  
  }
  
  

  printQuote();

 
 