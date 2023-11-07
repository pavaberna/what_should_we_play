let games = document.getElementById("textarea").value;

document.getElementById('start').addEventListener('click', function() {
    let allGames = textarea.value.split("\n");

    let result = allGames[Math.floor(Math.random() * allGames.length)]
    chosen.innerHTML = result;
});