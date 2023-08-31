const happies = (
    ["You're doing so well :D -C&B", 
    "Don't give up, you got this! -C&B",
    "You're a bright shining star! -C&B", 
    "Coding is so hard, you're doing amazing! -C&B",
    "You showed up today, and you're giving it your all! -C&B", 
    "You've come so far, think about how far you've come! -C&B",
    "You're the GOAT, no one can stop you! -Tarik",
    "It always seems impossible until it's done. -N.M -Lis" ,  
    "I like the way you do the thing -Aaron",
    "I believe you can fly, I believe you can touch the sky -Aaron",
    "You know so much more than you think -Sohum", 
    "Sohum believes in you -Aaron", 
    "You've got more seconds than you think! -Aaron",
    "Just make sure to have some fun with it :) -Jerry",
    "Success occurs when your dreams get bigger than your excuses -Jordan",
    "Just keep on goin! -Chris W", 
    "Hang in there kitty, you can do it! -Jeff L",
    "Rome wasn't built in a day -Rob",
    "You're a beautiful -Rob",
    "Dreams are where the heart takes flight -Jeff L",
    "You got it, for sure! Are you kidding me? -Katya",
    "I can't wait to see it, it's like really great. -Katya",
    "Today is a beautiful day -Katya",
    "You are alive today -Sohum",
    "Carpe that diem -Sohum&Charlie",
    "You are not here by accident -Charlie",
    "You deserve success -Cristina",
    "You're amazing and today's going to be a good day! -Mateo",
    "you got this!! think about how far you've come already <3 -Julia",
    "What we do in life echoes in eternity- Marcus Aurelius",
    "It's just a bad day, not a bad life -Jerry P",
    "Woooooooooooo -Ric Flair",
    "I'm sure you're CRUSHING it! -Tim",
    "Be proud of yourself! -Tim",
    "Take it easy on yourself, enjoy what you're doing! -Tommy",
    "Just keep going, it'll be worth the effort when you're finished! -Mike",
    "You're great! -Herman"
]); 

function displayHappy() {
    const newMessage = document.createElement("h1");
    const index = Math.floor(Math.random()*happies.length);
    const newText = happies[index];

    newMessage.textContent = newText;

    const happyDiv = document.querySelector('body');
    happyDiv.appendChild(newMessage);

}

displayHappy(); 


//<h1>You're doing so well :D</h1>
