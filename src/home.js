const headline = document.createElement("h1");
headline.innerHTML = "Austin TenBerge";

const bodyText1 = document.createElement("h3");
bodyText1.innerHTML = "Developer";
const bodyText2 = document.createElement("h3");
bodyText2.innerHTML = "Musician";
const bodyText3 = document.createElement("h3");
bodyText3.innerHTML = "Learner" ;

function loadPage() {
    let block = document.getElementById("content");
    let subblock = document.getElementById("subcontent");
    block.innerHTML = "";
    subblock.innerHTML = "";
    block.appendChild(headline);
    subblock.appendChild(bodyText1);
    subblock.appendChild(bodyText2);
    subblock.appendChild(bodyText3);
}

export { loadPage };