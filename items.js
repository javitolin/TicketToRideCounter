var items = {
    "1 Rail": 1,
    "2 Rail": 2,
    "3 Rail": 4,
    "4 Rail": 7,
    "5 Rail": 10,
    "6 Rail": 15,
    "Longest Road": 10,
    "Target Road": 0
};

function ResetItems() {
    items["Longest Road"] = 10;
}

function GetSelectedItemPoints() {
    return GetPoints(selected_item);
}

function GetPoints(key) {
    var return_value = items[key];
    
    if (return_value == 0)
        return;

    if (key == "Longest Road") {
        items[key] = 0;
        AddToLog("Longest Road selected");
    }

    if (key == "Target Road")
        return_value = parseInt(prompt("How many points?", 0));

    return return_value;
}