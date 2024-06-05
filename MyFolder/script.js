

for (let i = teams.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [teams[i], teams[j]] = [teams[j], teams[i]];
}

let scrambledTeam = teams.pop();
document.getElementById('scrambled-word').textContent = scrambledTeam;
