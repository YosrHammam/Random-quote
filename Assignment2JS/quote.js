

var quoteList = [

    {
        quoteText: '"Be yourself; everyone else is already taken"',
        authorName: "--Oscar Wilde"
    },
    {
        quoteText:`"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."` ,
        authorName: "--Marilyn Monroe"
    },
    {
        quoteText: `"A room without books is like a body without a soul"`,
        authorName: "--Marcus Tullius Cicero"
    },

    {
        quoteText: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind"`,
        authorName: "--Bernard M. Baruch"
    },
    {
        quoteText: `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
        authorName: "-- Dr. Seuss"
    }]
    var randomQuote=document.getElementById("displayDiv1");
    var randomAuthor=document.getElementById("displayDiv2");
function generateQuote() {
    randomQuote.innerHTML=quoteList[Math.floor(Math.random()*quoteList.length)].quoteText
    randomAuthor.innerHTML=quoteList[Math.floor(Math.random()*quoteList.length)].authorName

    // randomQuote.innerHTML=Object.values(quoteList[Math.floor(Math.random()*quoteList.length)]);
    // randomAuthor.innerHTML=Object.values(quoteList[Math.floor(Math.random()*quoteList.length)]);

}