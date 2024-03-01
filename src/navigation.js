import { aboutPage } from "./about";
import { homePage } from "./home";
import { menuPage } from "./menu";

function initNav() {
    document.addEventListener('DOMContentLoaded', () => {
        let pageNav = document.querySelector('nav');
        let homeButton = document.createElement('button');
        homeButton.textContent = 'Home';
        homeButton.classList.add('activated');
        homeButton.setAttribute('id', 'homeButton');
        let menuButton = document.createElement('button');
        menuButton.textContent = 'Menu';
        menuButton.setAttribute('id', 'menuButton');
        let aboutButton = document.createElement('button');
        aboutButton.textContent = 'About';
        aboutButton.setAttribute('id', 'aboutButton');
        pageNav.appendChild(homeButton);
        pageNav.appendChild(menuButton);
        pageNav.appendChild(aboutButton);        
        
        homeButton.addEventListener('click', () => { 
            homeButton.classList.add('activated');
            menuButton.classList.remove('activated');
            aboutButton.classList.remove('activated');
            homePage() 
        });
        menuButton.addEventListener('click', () => { 
            homeButton.classList.remove('activated');
            menuButton.classList.add('activated');
            aboutButton.classList.remove('activated');
            menuPage() 
        });
        aboutButton.addEventListener('click', () => { 
            homeButton.classList.remove('activated');
            menuButton.classList.remove('activated');
            aboutButton.classList.add('activated');
            aboutPage() 
        });    
    })
}

export { initNav }