import { loadPage } from "./home";
import { loadMusicianPage } from "./musician";
import { eventLoad } from ".";

// const headline = document.createElement("h1");
// headline.innerHTML = "Developer";

// Create three main headings
const bodyText1 = document.createElement("h1");
bodyText1.innerHTML = "Developer";
bodyText1.id = "developer";
bodyText1.className += " clickable titles";

const bodyText2 = document.createElement("h1");
bodyText2.innerHTML = "Musician";
bodyText2.id = "musician";
bodyText2.className += " clickable inactive titles";

const bodyText3 = document.createElement("h1");
bodyText3.innerHTML = "Learner";
bodyText3.id = "learner";
bodyText3.className += " clickable inactive titles";

// Create sub heading
const subHeading = document.createElement("h3");
subHeading.innerHTML = "HTML/CSS | JavaScript | PHP | Wordpress | C++ | Windows | Linux | Networking";
subHeading.id = "subheading";

function loadDeveloperPage() {
    let block = document.getElementById("content");
    block.innerHTML = "";
    let subBlock = document.getElementById("subcontent");
    subBlock.innerHTML = "";
    let titleBlock = document.getElementById("titleRow");
    titleBlock.innerHTML = "";
    
    titleBlock.appendChild(bodyText1);
    titleBlock.appendChild(bodyText2);
    titleBlock.appendChild(bodyText3);
    block.appendChild(subHeading);
    // subblock.appendChild(subHeading); 
    eventLoad();
}

export { loadDeveloperPage };