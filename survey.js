const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", (a1) => {
  
  rl.question("Whats an activity you like doing?", (a2) => {
    rl.question("What do you listen to while doing that?", (a3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (a4) => {
        rl.question("What's your favourite thing to eat for that meal?", (a5) => {
          rl.question("Which sport is your absolute favourite?", (a6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (a7) => {
        
        

              console.log(`This user goes by ${a1}, likes to do ${a2}, and listens to ${a3} while doing it. Thier fav meal is ${a4}, and loves getting ${a5}. Their fav sport is${a6}. and their super power is${a7}`);

              rl.close();

            });
          });
        });
      });
    });
  });
});