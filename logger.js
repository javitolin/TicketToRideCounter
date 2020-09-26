log_content = []

function PrintLogContent() {
    var to_print = '';
    for (index = 0; index < log_content.length; index++) {
        to_print += log_content[index];
    }
    
    $("#log").html(to_print);
}

function AddToLog(message) {
    log_content.push(`<div>${message}</div>`);
    console.log(`Pushing [${message}] to log_content`);
    PrintLogContent();
}

function ClearLog() {
    log_content = [];
    PrintLogContent();
}