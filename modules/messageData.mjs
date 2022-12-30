const messages = [{quote:"The best way to predict your future is to create it", author:"Abraham Lincoln"},
                  {quote:"The future belongs to those who believe in the beauty of their dreams.", author:"Eleanor Roosevelt" },
                  {quote:"You are braver than you believe, stronger than you seem and smarter than you think", author:"A.A. Milne"},
                  {quote:"The man who does not read books has no advantage over the one who cannot read them", author:"Mark Twain"},
                  {quote:"Education is the passport to the future, for tomorrow belongs to those who prepare for it today", author:"Malcolm X"},
                  {quote:"Teachers can open the door, but you must enter it yourself", author:"Chinese proverb"},
                  {quote:"The beautiful thing about learning is that no one can take it away from you.", author:"B.B. King"},
                  {quote:"Education is the most powerful weapon you can use to change the world.", author:"B.B. King"},
                  {quote:"Don’t let what you cannot do interfere with what you can do.", author:"John Wooden"},
                  {quote:"A person who never made a mistake never tried anything new", author:"Albert Einstein"},
                  {quote:"Never let the fear of striking out stop you from playing the game", author:"Babe Ruth"},
                  {quote:"You don’t have to be great to start, but you have to start to be great.", author:"Zig Ziglar"},
                  {quote:"The expert in anything was once a beginner", author:"Helen Hayes"},
                  {quote:"The way to get started is to quit talking and begin doing", author:"Walt Disney"},
                  {quote:"There are no shortcuts to any place worth going", author:"Beverly Stills"},
                  {quote:"I think it’s possible for ordinary people to choose to be extraordinary.", author:"Elon Musk"},
                  {quote:"Genius is 10% inspiration, 90% perspiration", author:"Thomas Edison"},
                  {quote:"Motivation is what gets you started. Habit is what keeps you going.", author:"Jim Ryun"},
                  {quote:"Success is the sum of small efforts, repeated", author:"R. Collier"},
                  {quote:"None of us is as smart as all of us", author:"Ken Blanchard"}                
                ]

const getQuote = function(index){
    return messages[index].quote;
}


export{messages, getQuote};


