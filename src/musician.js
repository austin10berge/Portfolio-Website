import { loadDeveloperPage } from "./developer";
import { loadLearnerPage } from "./learner";
import { eventLoad } from ".";

// const headline = document.createElement("h1");
// headline.innerHTML = "Musician";

// Create three main headings
const bodyText1 = document.createElement("h1");
bodyText1.innerHTML = "Developer";
bodyText1.id = "developer";
bodyText1.className += " clickable titles inactive";

const bodyText2 = document.createElement("h1");
bodyText2.innerHTML = "Musician";
bodyText2.id = "musician";
bodyText2.className += " clickable titles";

const bodyText3 = document.createElement("h1");
bodyText3.innerHTML = "Learner";
bodyText3.id = "learner";
bodyText3.className += " clickable inactive titles";

// Create sub heading
const bodyText = document.createElement("p");
bodyText.innerHTML = "I'm a musician dude.";

function loadMusicianPage() {
    let block = document.getElementById("content");
    block.innerHTML = "";
    let subblock = document.getElementById("subcontent");
    subblock.innerHTML = "";
    let titleBlock = document.getElementById("titleRow");
    titleBlock.innerHTML = "";
    
    titleBlock.appendChild(bodyText1);
    titleBlock.appendChild(bodyText2);
    titleBlock.appendChild(bodyText3);
    
    block.appendChild(bodyText);

    eventLoad();
}

export { loadMusicianPage };