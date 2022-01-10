import { loadPage } from './home.js';
import { loadLearnerPage } from './learner.js';
import { loadMusicianPage } from './musician.js';
import { loadDeveloperPage } from './developer.js';

function eventLoad() {
    // document.getElementById("home").addEventListener("click", loadPage); 
    // document.getElementById("about").addEventListener("click", loadAboutPage);
    // document.getElementById("contact").addEventListener("click", loadContactPage);

    document.getElementById("home").addEventListener("click", loadPage); 
    document.getElementById("developer").addEventListener("click", loadDeveloperPage);
    document.getElementById("musician").addEventListener("click", loadMusicianPage);
    document.getElementById("learner").addEventListener("click", loadLearnerPage); 
} 

window.onload = function() {
    loadPage();
    eventLoad();
}

export { eventLoad };