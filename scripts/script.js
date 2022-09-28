// JavaScript Document

console.log (" HELLOOO");


var WorkLink = document.querySelector ('header nav li:nth-of-type(2) img');
var AboutLink = document.querySelector ('header nav li:last-of-type img');
var LinkdInLink = document.querySelector ('#aboutme a img');
// var LinkAboutLink = document.querySelector ('#aboutlink');

function HoverOverWork () {

    this.src = "images/Work_gevuld.png";

    console.log("heen");
}

function NotHoverOverWork () {
    this.src = "images/Work_leeg.png";

    console.log("terug");
}

function HoverOverAbout () {

    this.src = "images/About_gevuld.png";

    console.log("heen");
}

function NotHoverOverAbout () {
    this.src = "images/About_leeg.png";

    console.log("terug");
}


function HoverOverLinkdIn () {

    this.src = "images/LinkdIn_gevuld.png";

    console.log("heen");
}

function NotHoverOverLinkdIn () {
    this.src = "images/LinkdIn_leeg.png";

    console.log("terug");
}


// function HoverOverAboutLink () {

//     this.src = "images/About_gevuld.png";

//     console.log("heen");
// }

// function NotHoverOverAboutLink () {
//     this.src = "images/About_leeg.png";

//     console.log("terug");
// }



WorkLink.addEventListener("mouseover", HoverOverWork);
WorkLink.addEventListener("mouseout", NotHoverOverWork);

AboutLink.addEventListener("mouseover", HoverOverAbout);
AboutLink.addEventListener("mouseout", NotHoverOverAbout);

LinkdInLink.addEventListener("mouseover", HoverOverLinkdIn);
LinkdInLink.addEventListener("mouseout", NotHoverOverLinkdIn);

// LinkAboutLink.addEventListener("mouseover", HoverOverAboutLink);
// LinkAboutLink.addEventListener("mouseout", NotHoverOverAboutLink);



var OnePageLink = document.querySelector ('main section a:first-of-type img');
var SalonTafelLink = document.querySelector ('main section a:nth-of-type(2) img');
var MarshallLink = document.querySelector ('main section a:nth-of-type(3) img');
var DakineLink = document.querySelector ('main section a:nth-of-type(4) img');

////////  ONE PAGE WEBSITE  /////////////////////
function HoverOverOnePage () {

    this.src = "images/one_page_Website_Hover.png";
        // plus korte samenvatting over project

    console.log("heen");
}

function NotHoverOverOnePage () {
    this.src = "images/one_page_Website_Teken.png";

    console.log("terug");
}

////////  SALON TAFEL  ///////////////////
function HoverOverSalon () {

    this.src = "images/gerecyclede_salontafel_Hover.png";
        // plus korte samenvatting over project

    console.log("heen");
}

function NotHoverOverSalon () {
    this.src = "images/gerecyclede_salontafel_Teken.png";

    console.log("terug");
}

////////  MARSHALL WEBSITE  ///////////////////
function HoverOverMarshall () {

    this.src = "images/marshall_website_Hover.png";
        // plus korte samenvatting over project

    console.log("heen");
}

function NotHoverOverMarshall () {
    this.src = "images/marshall_website_Teken.png";

    console.log("terug");
}

////////  DAKINE BACKPACKS  ///////////////////
function HoverOverDakine () {

    this.src = "images/dakine_backpacks_Hover.png";
        // plus korte samenvatting over project

    console.log("heen");
}

function NotHoverOverDakine () {
    this.src = "images/dakine_backpacks_Teken.png";

    console.log("terug");
}


OnePageLink.addEventListener("mouseover", HoverOverOnePage);
OnePageLink.addEventListener("mouseout", NotHoverOverOnePage);

SalonTafelLink.addEventListener("mouseover", HoverOverSalon);
SalonTafelLink.addEventListener("mouseout", NotHoverOverSalon);

MarshallLink.addEventListener("mouseover", HoverOverMarshall);
MarshallLink.addEventListener("mouseout", NotHoverOverMarshall);

DakineLink.addEventListener("mouseover", HoverOverDakine);
DakineLink.addEventListener("mouseout", NotHoverOverDakine);





// var HoverHeader = document.querySelector ('.normal');

// function HoverOverHeader () {
//     console.log("HELLOO0");
// };


// HoverHeader.addEventListener("mouseover", HoverOverHeader);



// var vorigeButton = document.querySelector ('.vorige');
// var vorigeTekst = document.querySelector ('.vorige h3');

// function HoverOverVorige () {

//     console.log("HELLOO0");
// }




// vorigeButton.addEventListener("mouseover", HoverOverVorige);
// vorigeButton.addEventListener("mouseout", NotHoverOverDakine);



