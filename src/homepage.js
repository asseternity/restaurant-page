import bg1 from './bg1.jpg';
import bg2 from './bg2.jpg';
import bg3 from './bg3.jpg';
import logo from './logo.png';

function initHomepage() {
    document.addEventListener('DOMContentLoaded', () => {
        let content = document.querySelector('.content');
        let divLogo = document.createElement('div');
        divLogo.classList.add('logo');
        divLogo.setAttribute('style', `background-image:url("${logo}")`);
        content.appendChild(divLogo);
        let contactUsButton = document.createElement('button');
        contactUsButton.classList.add('contactButton');
        contactUsButton.textContent = 'Make a Free Reservation';
        content.appendChild(contactUsButton);
        let backgroundImageDiv = document.createElement('div');
        backgroundImageDiv.classList.add('backgroundImageDiv');
        content.appendChild(backgroundImageDiv);
        backgroundImageDiv.setAttribute('style', `background-image:url("${bg1}")`);
    });
}

export { initHomepage };