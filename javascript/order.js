function ShowError(id, message) {
    document.getElementById(id).innerHTML = message;
}

function ValidateForm() {
    var isValid = true;
    var cakeName = document.getElementById("cake-name");
    var name = document.getElementById("name");
    var message = document.getElementById("message");
    var deliverDate = document.getElementById("deliver-date");
    var deliverTo = document.getElementById("deliver-to");

    // cacke name

    if (cakeName.firstElementChild.selected) {
        ShowError(cakeName.id + "-error", "Please select our product");
        isValid = false;
    } else {
        ShowError(cakeName.id + "-error", "");
    }

    // name
    if (name.value == "") {
        ShowError(name.id + "-error", "Please fill out your name.")
        isValid = false;
    } else if (name.value.length > 100) {
        ShowError(name.id + "-error", "Your name should not exceed 100 characters.”");
        isValid = false;
    } else {
        ShowError(name.id + "-error", "");
    }

    // message
    if (message.value.length > 30) {
        ShowError(message.id + "-error", "Message should not exceed 30 characters.")
        isValid = false;
    } else {
        ShowError(message.id + "-error", "");
    }

    // deliver date


    if (deliverDate.value == "") {
        ShowError(deliverDate.id + "-error", "Please fill out the deliver date.");
        isValid = false;
    } else {
        var date_deliver = new Date(deliverDate.value).getTime();
        var date_current = Date.now();
        if (date_deliver <= date_current) {
            ShowError(deliverDate.id + "-error", "You have selected a date in the past, please choose again.");
            isValid = false;
        } else {
            ShowError(deliverDate.id + "-error", "");
        }
    }

    // deliver to

    if (deliverTo.value == "") {
        ShowError(deliverTo.id + "-error", "Please fill out the address.");
        isValid = false;
    } else if (deliverTo.value.length > 500) {
        ShowError(deliverTo.id + "-error", "Address should not exceed 500 characters.");
        isValid = false;
    } else {
        ShowError(deliverTo.id + "-error", "");
    }


    return isValid;
}