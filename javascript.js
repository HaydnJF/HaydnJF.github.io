var quotes = [ 
'Jobs fill your pockets, adventures fill your soul.',
'Remember that happiness is a way of travel, not a destination.',
'The world is a book and those who do not travel read only one page.',
'Travel is the only thing you buy that makes you richer.',
'Travel is my therapy.',
'In the end, we only regret the chances we didn\’t take',
'My goal is to run out of pages in my passport.',
'Not all those who wander are lost.',
'Travel is an investment in yourself.',
'The journey of a thousand miles begins with a single step.',
'Life is short, and the world is wide.',
'It\’s not what you look at that matters. It\’s what you see.',
'The goal is to die with memories not dreams.',
'Sandy Toes sunkissed nose.',
'Dare to live the life you’ve always wanted.',
'Travel. Your money will return. Your time won’t.',
'Some beautiful paths can\’t be discovered without getting lost.',
'Collect Moments, Not Things.',
'Live life with no excuses, travel with no regret.',
'Adventures are the best way to learn.',
'Once the Travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life.',
'We have nothing to lose and a world to see.',
'We don\’t need objects; we need adventures.',
'Once a year, go someplace you\’ve never been before.',
'I haven\’t been everywhere, but it\’s on my list.',
'Of all the books in the world. The best stories are found between the pages of a passport.',
'Work, Travel, Save, Repeat.',
'Travel opens your heart, broadens your mind, and fills your life with stories to tell.',
'I love places that make you realize how tiny you and your problems are.',
'Have stories to tell not stuff to show.',
'If we were meant to stay in one place, we\’d have roots instead of feet.',
'At the end of the day your feet should be dirty, your hair messy and your eyes sparkling.',
'Don\’t let fear get in the way of the life you are meant to live.',
'I travel because I become uncomfortable being too comfortable.',
'Leave nothing but footprints, take nothing but photos, kill nothing but time.',
'Always take the scenic road.',
'Live your life by a compass, not a clock.',
'Go where you feel most alive.',
'I want to make memories all over the world',
'Travel is the healthiest addiction',
'Doing what you like is freedom, liking what you do is happiness.',
'Happiness is planning a trip with the ones that you love.',
'I don\’t know where I\’m going but I\’m going. Are you coming with me?',
'Let\’s get lost.',
'The biggest adventure you can take is to live the life of your dreams',
'Beach please.',
'Don\’t call it a dream. Call it a plan.',
'Don\’t be that person who is too busy when you are young and then too tired when you are old.',
'Travel makes you realize that no matter how much you know, there\’s always more to learn.',
'Ocean air, salty hair.'
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function textChange(){
  view.innerHTML = 'Another One?';
}

view.addEventListener('click', textChange);





