      const score = JSON.parse(localStorage.getItem('score')) || { player: 0, computer: 0, Ties: 0 };
      document.getElementById('score').textContent = `Player: ${score.player} | Computer: ${score.computer} | Ties: ${score.Ties}`;
      function play(playerChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        let result = '';
        if (playerChoice === computerChoice) {
          result = "It's a tie!";
          score.Ties++;
        } else if (
          (playerChoice === 'rock' && computerChoice === 'scissors') ||
          (playerChoice === 'paper' && computerChoice === 'rock') ||
          (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
          result = "You win!";
          score.player++;
        } else {
          result = "Computer wins!";
          score.computer++;
        }
        document.getElementById('result').innerHTML = `Result: <strong>${result}</strong>`;
        document.getElementById('move').innerHTML = `You <img src="images/${playerChoice}-emoji.png" class="emoji" /><img src="images/${computerChoice}-emoji.png" class="emoji" /> computer`;
        document.getElementById('score').textContent = `Player: ${score.player} | Computer: ${score.computer} | Ties: ${score.Ties}`;
        localStorage.setItem('score', JSON.stringify(score));
      }
      function reset() {
        score.player = 0;
        score.computer = 0;
        score.Ties = 0;
        document.getElementById('move').textContent = '';
        document.getElementById('score').textContent = `Player: ${score.player} | Computer: ${score.computer} | Ties: ${score.Ties}`;
        document.getElementById('result').textContent = '';
        alert('Game reset! Scores are now zero.');   
      }