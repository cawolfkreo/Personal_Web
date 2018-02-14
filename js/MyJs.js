"use strict";

$(document).ready(function () {
    console.log("ONLOAD");
    setActive('home-link', true);
});
/*seria buena idea que variables globales como esta las crees justo 
debajo del 'use strict'. De esta forma puedes facilitar la lectura de 
tu JS y sepas el Scope de tus variables*/
var activeTabId = 'about-link';

$('.btn').click(function () {
    setActive(this.id, true);
});

function setActive(newActiveId, move) {
    console.log("Click on " + newActiveId);
    if (newActiveId != 'home-link') {
        activeTabId = newActiveId;
    }

    /* Similar al comentario anterior podrías iniciar estas variables justo debajo de
    del "function ...(){" para saber bien el Scope que tienen*/
    var active = document.querySelector(".active");
    active.classList.remove("active");

    var pActive = document.querySelector(".panel-active");
    pActive.classList.remove("panel-active");

    var nBtn = document.getElementById(newActiveId);
    nBtn.classList.add('active');

    console.log("Last Active: " + active.id + "\nPressed:" + newActiveId);

    var aTab = "";
    
    /*
    Para facilitar ver tu código, te recomiendo realices comentarios que expliquen un poco
    las cosas que haces en estructuras como las de abajo. En este caso no es tan complicado
    darse cuenta que estas activando los páneles conforme el usuario usa tu navbar, pero no
    esta demás comentar sobre esto.
    */
    if (newActiveId == "home-link") {
        $("#Home").toggleClass("panel-active");
        aTab = "Home";
    } else if (newActiveId == "portfolio-link") {
        $("#Portfolio").toggleClass("panel-active"); 
        aTab = "Portfolio";
    } else if (newActiveId == "about-link") {
        $("#About").toggleClass("panel-active");
        aTab = "About";
    } else if (newActiveId == "contact-link") {
        $("#Contact").toggleClass("panel-active");
        aTab = "Contact";
    }

    if (move) {
        $('html, body').animate({
            scrollTop: $("#" + aTab).offset().top
        }, 1000);
    }
}

function callback(data) {
    updateLanguage(data, "EN");

    $('.btnLang').click(function () {
        var active = document.querySelector(".langActive"); //esta es la forma en que es mejor, bien hecho :D
        active.classList.remove("langActive");

        $(this).toggleClass("langActive")

        updateLanguage(data, this.id);
    });
}

function updateLanguage(data, langId) {
    /*
    "var actIdioma" o "var actIdioma = data.es;"
    */
    console.log("New Language: " + langId);
    /*
    si arriba tomas la primera opcion entonces aca pondrías:
    actIdioma = data.es;
    */
    var actIdioma = data.es;

    if (langId == "EN") {
        console.log("Updating to English...");
        actIdioma = data.en;
    }

    /*
    de nuevo, no es dificil darse cuenta de que haces, pero es mejor si explicas
    que es lo que ocurre acá.
    */
    document.getElementById("title-main").innerText = actIdioma.title_main;
    document.getElementById("txt-home").innerText = actIdioma.Home;
    document.getElementById("txt-about").innerHTML = actIdioma.About;
    document.getElementById("txt-portfolio").innerHTML = actIdioma.Portfolio;
    document.getElementById("txt-contact").innerHTML = actIdioma.Contact;
    document.getElementById("title-about").innerHTML = actIdioma.title_about;
    document.getElementById("title-contact").innerHTML = actIdioma.Contact;
    document.getElementById("txt-resume").innerHTML = actIdioma.Resume;
    document.getElementById("title-portfolio").innerHTML = actIdioma.Portfolio;
    document.getElementById("txt-portfolio1-title").innerText = actIdioma.Portfolio1_title;
    document.getElementById("txt-portfolio1-content").innerText = actIdioma.Portfolio1_content;
    document.getElementById("txt-portfolio2-title").innerText = actIdioma.Portfolio2_title;
    document.getElementById("txt-portfolio2-content").innerText = actIdioma.Portfolio2_content;
    document.getElementById("txt-portfolio1-comment").innerText = actIdioma.Portfolio2_comment;
    document.getElementById("txt-portfolio2-comment").innerText = actIdioma.Portfolio2_comment;
    document.getElementById("txt-attribution").innerHTML = actIdioma.IconAttribution;
}

$.getJSON("./data/lenguaje.json", callback);

window.onscroll = function () { myFunction() };
/*
si quieres puedes poner:
"var navbar = document.getElementById("navbar"),sticky = navbar.offsetTop;"
o
"var navbar,sticky;
navbar = document.getElementById("navbar");
sticky = navbar.offsetTop;"
para mejorar la lectura de tu codigo, pero esta bien como lo tienes
*/
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed-top")
        setActive(activeTabId, false);
    } else {
        navbar.classList.remove("fixed-top");
        setActive('home-link', false);
    }
}
