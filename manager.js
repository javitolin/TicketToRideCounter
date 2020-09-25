var moves = [];

function AddMove(player, points) {
    moves.push([player, points]);
}

function Undo() {
    if (moves.length == 0)
        return;

    last_move = moves.pop()
    console.log(last_move);
    AddPointsToPlayer(last_move[0], -last_move[1]);
    PrintPoints();
}

function Reset() {
    ResetItems();
    SetNumberOfPlayers();
    PrintPlayers();
}

function PrintPlayers() {
    var number = parseInt($("#number_of_players_input").val());
    to_show = '';

    for (let index = 0; index < number; index++) {
        to_show += `<div ondrop="drop(event)" ondragover="allowDrop(event)" id="player_${index}">Player ${(index + 1)}</div>`;
    }

    $("#players").html(to_show);
    PrintPoints();
}

function PrintItems() {
    var result = '';
    for (var item in items) {
        result += `<div draggable="true" ondragstart="drag(event)" id="${item}">${item} (${items[item]} Points)</div>`;
    }

    $("#items").html(result);
}

function PrintPoints() {
    var number = parseInt($("#number_of_players_input").val());
    to_show = '';

    for (let index = 0; index < number; index++) {
        to_show += `<div>${(players[index])}</div>`;
    }

    $("#points").html(to_show);
}

function drag(ev) {
    ev.dataTransfer.setData("points_index", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    console.log(ev.dataTransfer.getData("points_index"))
    var points = GetPoints(ev.dataTransfer.getData("points_index"));
    var player_id = parseInt(ev.target.id.replace("player_", ""));
    
    AddMove(player_id, points);
    AddPointsToPlayer(player_id, points);
    PrintPoints();
}

$(document).ready(() => PrintItems());
