
const words = [
    "Anaheim Ducks", "Arizona Coyotes", "Boston Bruins", "Buffalo Sabres","Calgary Flames", "Carolina Hurricanes", "Chicago Blackhawks", "Colorado Avalanche","Columbus Blue Jackets", "Dallas Stars", "Detroit Red Wings", "Edmonton Oilers","Florida Panthers", "Los Angeles Kings", "Minnesota Wild", "Montreal Canadiens","Nashville Predators", "New Jersey Devils", "New York Islanders", "New York Rangers","Ottawa Senators", "Philadelphia Flyers", "Pittsburgh Penguins", "San Jose Sharks","Seattle Kraken", "St. Louis Blues", "Tampa Bay Lightning", "Toronto Maple Leafs","Vancouver Canucks", "Vegas Golden Knights", "Washington Capitals", "Winnipeg Jets"
    ];
    // function bellow scrambles words as named
    function scrambleWord(word) {
      let letters = word.split('');
      for (let i = letters.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
      }
    return letters.join('');
    }

    function startGame() {
      const word = words[Math.floor(Math.random() * words.length)];
      const scrambledWord = scrambleWord(word);
    // this will show the scrambled word
      document.getElementById('scrambled-word').textContent = scrambledWord;
      document.getElementById('scrambled-word').dataset.originalWord = word;
    // this will get rid of the last result
      document.getElementById('result').textContent = '';
        document.getElementById('guess').value = '';
    }

    // this function checks the users guess
    function checkGuess() {
        const guess = document.getElementById('guess').value;
        const originalWord = document.getElementById('scrambled-word').dataset.originalWord;

        if (guess.toLowerCase() === originalWord.toLowerCase()) {
        document.getElementById('result').textContent = 'Correct!';
      } else {
     document.getElementById('result').textContent = 'Try again!';
    }
    }

    // this Starts a new game when the page loads
    window.onload = startGame;

    // this Adds an event listener to the submit button
    document.getElementById('submit-guess').addEventListener('click', checkGuess);

