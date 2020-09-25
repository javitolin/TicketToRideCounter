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
    ev.dataTransfer.setData("points", GetPoints(ev.target.id));
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drop(ev) {
    ev.preventDefault();
    var points = parseInt(ev.dataTransfer.getData("points"));
    var player_id = parseInt(ev.target.id.replace("player_", ""));
    AddPointsToPlayer(player_id, points);
    PrintPoints();
  }

$(document).ready(() => PrintItems());
