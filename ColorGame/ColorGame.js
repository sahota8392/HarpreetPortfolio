        const COLORS_ARRAY = ['blue', 'red', 'brown','ivory','purple', 'gold', 'orange', 'yellow', 'green', 'cyan', 'magenta', 'pink'];
        COLORS_ARRAY.sort();
        
        function runGame() {
            let guess = "";
            let correct = false;
            let numTries = 0;
            const targetIndex = [Math.floor(Math.random() * (COLORS_ARRAY.length))];
            const target = COLORS_ARRAY[targetIndex];

            do {
                guess = prompt("I am thinking of one of these colors: \n\n" + COLORS_ARRAY.join(", ") + "\n\nWhat color am I thinking of?\n");
                numTries += 1;

                if (guess === null) {
                    guess = 'Cancel'
                        alert('You have QUIT the game!\n\n' + 'Total attemps: ' + numTries);
                    return;
                }
            alert("Total tries: " + numTries);
            correct = checkGuess(guess.toLowerCase(), target);
            }while(!correct);

            alert("You have selected the right color: " + target + "\nIt took " + numTries + " attempts!");
            document.body.style.background = guess;
        }

        function checkGuess(guess, target) {
            let correct = false;

            if (COLORS_ARRAY.indexOf(guess) < 0) {
                alert("You MUST choose a color from the list provided to you!");
            }else if (guess > target) {
                alert("Your guess is HIGHER alphabetically than the correct color");
            }else if (guess < target) {
                alert("Your guess is LOWER alphabetically than the correct color");
            }else{
                correct = true;
            }
                return correct;
            
        }
