"use strict";

$(document).ready(function () {
    console.log("ONLOAD");
    setActive('home-link', true);
});

var activeTabId = 'about-link';

$('.btn').click(function () {
    setActive(this.id, true);
});

function setActive(newActiveId, move) {
    console.log("Click on " + newActiveId);
    if (newActiveId != 'home-link') {
        activeTabId = newActiveId;
    }

    var active = document.querySelector(".active");
    active.classList.remove("active");

    var pActive = document.querySelector(".panel-active");
    pActive.classList.remove("panel-active");

    var nBtn = document.getElementById(newActiveId);
    nBtn.classList.add('active');

    console.log("Last Active: " + active.id + "\nPressed:" + newActiveId);

    var aTab = "";

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
        var active = document.querySelector(".langActive");
        active.classList.remove("langActive");

        $(this).toggleClass("langActive")

        updateLanguage(data, this.id);
    });
}

function updateLanguage(data, langId) {
    console.log("New Language: " + langId);

    var actIdioma = data.es;

    if (langId == "EN") {
        console.log("Updating to English...");
        actIdioma = data.en;
    }

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