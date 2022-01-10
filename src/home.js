import { loadDeveloperPage } from "./developer";
import { eventLoad } from "./index.js";

const headline = document.createElement("h1");
headline.innerHTML = "Austin TenBerge";

const bodyText1 = document.createElement("h3");
bodyText1.innerHTML = "Developer";
bodyText1.id = "developer";
bodyText1.className += " clickable";

const bodyText2 = document.createElement("h3");
bodyText2.innerHTML = "Musician";
bodyText2.id = "musician";
bodyText2.className += " clickable";

const bodyText3 = document.createElement("h3");
bodyText3.innerHTML = "Learner";
bodyText3.id = "learner";
bodyText3.className += " clickable";

function loadPage() {
    let block = document.getElementById("content");
    let subblock = document.getElementById("subcontent");
    let titleBlock = document.getElementById("titleRow");
    titleBlock.innerHTML = "";
    subblock.innerHTML = "";
    block.innerHTML = "";
    block.appendChild(headline);
    subblock.appendChild(bodyText1);
    subblock.appendChild(bodyText2);
    subblock.appendChild(bodyText3);
    eventLoad();
}

export { loadPage };