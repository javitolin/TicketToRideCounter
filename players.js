var players = []

function SetNumberOfPlayers() {
    var number = parseInt($("#number_of_players_input").val());
    players = []
    to_show = '';
    for (let index = 0; index < number; index++) {
        players.push(0);
        to_show += `<p>Player ${(index + 1)}</p>`;
    }
}

function AddPointsToPlayer(player, points) {
    players[player] += points;
}

function GetPlayerPoints(player) {
    return players[player];
}