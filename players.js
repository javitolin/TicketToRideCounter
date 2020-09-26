var players = []

function SetNumberOfPlayers() {
    var number = parseInt($("#number_of_players_input").val());
    if (number > 5 || number < 0)
    {
        alert("Invalid number of players");
        return;
    }

    AddToLog(`Selected [${number}] players`);

    players = []
    for (let index = 0; index < number; index++) {
        players.push(0);
    }
}

function AddPointsToPlayer(player, points) {
    if (points > 0)
        AddToLog(`Add [${points}] points to player [${player + 1}]`);
    else if (points < 0) 
        AddToLog(`Remove [${-points}] points from player [${player + 1}]`);
    else
        return;
        
    players[player] += points;
}

function GetPlayerPoints(player) {
    return players[player];
}