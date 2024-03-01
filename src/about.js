
import logo from './logo.png';

function aboutPage() {
    while (content.firstChild) { content.removeChild(content.firstChild) }
    let aboutContent = document.createElement('div');
    aboutContent.classList.add('aboutContent');
    content.appendChild(aboutContent);
    let divLogo = document.createElement('img');
    divLogo.src = logo;
    aboutContent.appendChild(divLogo);
    let p1 = document.createElement('p');
    p1.textContent = 'Welcome to Great Old Wines, where the eldritch meets the exquisite. Located in the heart of the Astral Plane, our bar offers a unique experience for the discerning.'
    let p2 = document.createElement('p');
    p2.textContent = `Step into a realm of rare and mysterious wines, sourced from the far corners of the earth. Each bottle tells a story, steeped in history and enigma.`;
    let p3 = document.createElement('p');
    p3.textContent = `Our ambiance is one of opulence and mystery, with decor inspired by the Great Old Ones. Lose yourself in the shadows, where whispers of bygone eras mingle with the clinking of glasses.`;
    let p4 = document.createElement('p');
    p4.textContent = `Join us at Great Old Wines for an adventure in taste and time. Cheers to wines as timeless as the Great Old Ones themselves.`;
    aboutContent.appendChild(p1);
    aboutContent.appendChild(p2);
    aboutContent.appendChild(p3);
    aboutContent.appendChild(p4);
    document.body.style.overflow = 'auto';
    let nav = document.querySelector('nav');
    let header = document.querySelector('header');
    nav.classList.add('blackNav');
    header.classList.add('blackNav');
    // scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.scrollTop = 0;
}

export { aboutPage };