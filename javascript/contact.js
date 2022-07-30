function ShowMessageErr(id, message) {
    document.getElementById(id).innerHTML = message;
}

function ValidateForm() {
    var isValid = true;
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");

    //name

    if (name.value == "") {
        ShowMessageErr(name.id + "-error", "Please fill out your name");
        isValid = false;
    } else if (name.value.length > 100) {
        ShowMessageErr(name.id + "-error", "Your name should not exceed 100 characters.");
        isValid = false;
    } else
        ShowMessageErr(name.id + "-error", "");

    // email

    if (email.value == "") {
        ShowMessageErr(email.id + "-error", "Please fill out your email");
        isValid = false;
    } else if (email.value.length > 100) {
        ShowMessageErr(email.id + "-error", "Your email should not exceed 100 characters")
        isValid = false;
    } else
        ShowMessageErr(email.id + "-error", "");


    // subject

    if (subject.value == "") {
        ShowMessageErr(subject.id + "-error", "Please fill out the subject");
        isValid = false;
    } else if (subject.value.length < 50) {
        ShowMessageErr(subject.id + "-error", "Subject should not shorter than 50 characters.")
        isValid = false;
    } else if (subject.value.length > 250) {
        ShowMessageErr(subject.id + "-error", "Subject should not exceed 250 characters.")
        isValid = false;
    } else
        ShowMessageErr(subject.id + "-error", "");
    // message

    if (message.value == "") {
        ShowMessageErr(message.id + "-error", "Please fill out the message");
        isValid = false;
    } else if (message.value.length > 500) {
        ShowMessageErr(message.id + "-error", "Message should not exceed 500 characters");
        isValid = false;
    } else
        ShowMessageErr(message.id + "-error", "");

    return isValid;

}