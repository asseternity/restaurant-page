import bg1 from './bg1.jpg';
import bg2 from './bg2.jpg';
import bg3 from './bg3.jpg';
import logo from './logo.png';

function homePage() {
    // init content and clear it
    let content = document.querySelector('#content');
    while (content.firstChild) { content.removeChild(content.firstChild) }
    // init homeContent
    let homeContent = document.createElement('div');
    homeContent.classList.add('homeContent');
    content.appendChild(homeContent);
    // init bgImage
    let homeBG = document.createElement('div');
    homeBG.setAttribute('style',`background-image:url("${bg3}")`);
    homeBG.classList.add('homeBG');
    homeContent.appendChild(homeBG);
    // init logo
    let divLogo = document.createElement('img');
    divLogo.src = logo;
    homeContent.appendChild(divLogo);
    // init reservation
    let reservation = document.createElement('button');
    reservation.textContent = 'Make a reservation.'
    homeContent.appendChild(reservation);
    // header
    let nav = document.querySelector('nav');
    let header = document.querySelector('header');
    nav.classList.remove('blackNav');
    header.classList.remove('blackNav');
    // scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.scrollTop = 0;
}

export { homePage };