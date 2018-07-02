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
    document.getElementById(cityName + 1).style.display = "block";
    evt.currentTarget.className += " active";
}

function asideOpen() {
    var aside = document.getElementById('aside');
    var hamburger = document.getElementById('hamburger');
    
    aside.classList.toggle("active");
    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-times");
}
