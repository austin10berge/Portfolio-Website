const headline = document.createElement("h1");
headline.innerHTML = "About Us";

const bodyText = document.createElement("p");
bodyText.innerHTML = "I'm a righteous dude.";

function loadAboutPage() {
    let block = document.getElementById("content");
    block.innerHTML = "";
    block.appendChild(headline);
    block.appendChild(bodyText);
}

export { loadAboutPage };