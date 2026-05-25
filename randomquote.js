const quote=[
"The only way to do great work is to love what you do.",

"In three words I can sum up everything I've learned about life: it goes on.",

"The future belongs to those who believe in the beauty of their dreams.",

"You miss 100% of the shots you don't take.",

"Life is what happens when you're busy making other plans.",

"Get busy living or get busy dying.",

"The purpose of our lives is to be happy.",

"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",

"Not all those who wander are lost.",

"It is never too late to be what you might have been.",

"Everything you can imagine is real.",

"Do one thing every day that scares you.",

"The only impossible journey is the one you never begin.",

"What lies behind us and what lies before us are tiny matters compared to what lies within us.",

"It does not matter how slowly you go as long as you do not stop.",

"Be the change that you wish to see in the world.",

"The best way to predict the future is to create it.",

"If you want to lift yourself up, lift up someone else.",

"Strive not to be a success, but rather to be of value.",

"Act as if what you do makes a difference. It does."
];


const button = document.querySelector('button');
const heading =document.querySelector('h1');

button.addEventListener('click',()=>{
    const random = Math.floor(Math.random()*20); // get the random number 0 to 19
    heading.textContent=quote[random];           // put the random quote[0 to 19] and push in heading text content so quote arr generate random quote
})