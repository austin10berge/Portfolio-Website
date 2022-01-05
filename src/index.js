import { loadPage } from './home.js';
import { loadAboutPage } from './about.js';
import { loadContactPage } from './contact.js';

function eventLoad() {
    document.getElementById("home").addEventListener("click", loadPage); 
    document.getElementById("about").addEventListener("click", loadAboutPage);
    document.getElementById("contact").addEventListener("click", loadContactPage);
} 

window.onload = function() {
    loadPage();
    eventLoad();
}
