const headline = document.createElement("h1");
headline.innerHTML = "Contact Us";

const bodyText = document.createElement("p");
bodyText.innerHTML = "In order to contact us, please head to your local supermarket, purchase a bag of peach rings, and shove em up your butt.";

function loadContactPage() {
    let block = document.getElementById("content");
    block.innerHTML = "";
    block.appendChild(headline);
    block.appendChild(bodyText);
}

export { loadContactPage };