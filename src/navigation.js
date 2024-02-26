function initNav() {
    document.addEventListener('DOMContentLoaded', () => {
        let pageHeader = document.createElement('header');
        let pageNav = document.createElement('nav');
        let homeButton = document.createElement('button');
        homeButton.textContent = 'Home';
        let menuButton = document.createElement('button');
        menuButton.textContent = 'Menu';
        let aboutButton = document.createElement('button');
        aboutButton.textContent = 'About';
        document.body.appendChild(pageHeader);
        pageHeader.appendChild(pageNav);
        pageNav.appendChild(homeButton);
        pageNav.appendChild(menuButton);
        pageNav.appendChild(aboutButton);        
    })
}

export { initNav }