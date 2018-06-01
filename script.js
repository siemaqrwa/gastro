function nav() {

    var navbar = document.getElementById("top-menu");
    var scroll = navbar.offsetTop + 100;

    if (window.pageYOffset >= scroll) {
        navbar.classList.add("top-menu-scrolled");
    } else {
        navbar.classList.remove("top-menu-scrolled");
    }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
