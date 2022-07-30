function collapsing() {
    x = document.getElementById("navbar");
    if (x.className === "nav navbar-nav closed")
        x.className = "nav navbar-nav opened";
    else
        x.className = "nav navbar-nav closed";
}

function closeNav() {
    x = document.getElementById("navbar");
    x.className = "nav navbar-nav closed";

}