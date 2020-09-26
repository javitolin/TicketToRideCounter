var moves = [];
var selected_item = "";
var last_selected_item = null;

function SelectPlayer(player) {
    var player_id = parseInt(player.id.replace("player_", ""));
    var points = GetSelectedItemPoints();
    MakeMove(player_id, points);
}

function AddMove(player, points) {
    moves.push([player, points]);
}

function Undo() {
    if (moves.length == 0)
        return;

    last_move = moves.pop()
    AddPointsToPlayer(last_move[0], -last_move[1]);
    PrintPoints();
}

function Reset() {
    ClearLog();
    ResetItems();
    SetNumberOfPlayers();
    PrintPlayers();
    selected_item = "";
    moves = [];
}

function SelectItem(item) {
    if (last_selected_item)
        last_selected_item.classList.toggle("item_selected")

    selected_item = item.id;
    item.classList.toggle("item_selected");
    last_selected_item = item;
}


function PrintPlayers() {
    var number = parseInt($("#number_of_players_input").val());
    to_show = '';

    for (let index = 0; index < number; index++) {
        to_show += `<div class="player" onclick="SelectPlayer(this)" ondrop="drop(event)" ondragover="allowDrop(event)" id="player_${index}">Player ${(index + 1)}</div>`;
    }

    $("#players").html(to_show);
    PrintPoints();
}

function PrintItems() {
    var result = '';
    for (var item in items) {
        result += `<div class="item" onclick="SelectItem(this)" draggable="true" ondragstart="drag(event)" id="${item}">${item} (${items[item]} Points)</div>`;
    }

    $("#items").html(result);
}

function PrintPoints() {
    var number = parseInt($("#number_of_players_input").val());
    to_show = '';

    for (let index = 0; index < number; index++) {
        to_show += `<div class="points">${(players[index])}</div>`;
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
    var points = GetPoints(ev.dataTransfer.getData("points_index"));
    var player_id = parseInt(ev.target.id.replace("player_", ""));
    MakeMove(player_id, points);
}

function MakeMove(player_id, points) {
    AddMove(player_id, points);
    AddPointsToPlayer(player_id, points);
    PrintPoints();
}

$(document).ready(() => PrintItems());
