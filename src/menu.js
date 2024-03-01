import logo from './logo.png';

function menuPage() {
    // find the container
    let content = document.querySelector('#content');
    // clear the container
    while (content.firstChild) { content.removeChild(content.firstChild) }
    // allow scrolling down
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
    // color the nav bar black
    let nav = document.querySelector('nav');
    let header = document.querySelector('header');
    nav.classList.add('blackNav');
    header.classList.add('blackNav');
   // init menuContent
    let menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');
    content.appendChild(menuContent);
    // init logo
    let menuLogo = document.createElement('img');
    menuLogo.src = logo;
    let menuLogoDiv = document.createElement('div');
    menuLogoDiv.classList.add('menuLogo');
    menuContent.appendChild(menuLogoDiv);
    menuLogoDiv.appendChild(menuLogo);
    // create section for menu items
    let menuSection = document.createElement('div');
    menuSection.classList.add('menuSection');
    menuContent.appendChild(menuSection);
    // menu items
    let div1 = document.createElement('div');
    div1.classList.add('menuItem');
    menuSection.appendChild(div1);
    let h1 = document.createElement('h2');
    h1.textContent = 'The Dunwich Pinot Noir'
    div1.appendChild(h1);
    let p1 = document.createElement('p');
    p1.textContent = 'A medium-bodied wine with notes of raspberry, cherry, and a touch of vanilla, named after the mysterious town where the Old Ones are said to dwell.'
    div1.appendChild(p1);

    let div2 = document.createElement('div');
    div2.classList.add('menuItem');
    menuSection.appendChild(div2);
    let h2 = document.createElement('h2');
    h2.textContent = 'The Shadow over Innsmouth Chardonnay'
    div2.appendChild(h2);
    let p2 = document.createElement('p');
    p2.textContent = 'A crisp and refreshing white wine with flavors of green apple, citrus, and a subtle hint of sea salt, inspired by the coastal town of Innsmouth.'
    div2.appendChild(p2);

    let div3 = document.createElement('div');
    div3.classList.add('menuItem');
    menuSection.appendChild(div3);
    let h3 = document.createElement('h2');
    h3.textContent = 'The Mountains of Madness Merlot'
    div3.appendChild(h3);
    let p3 = document.createElement('p');
    p3.textContent = 'A smooth and velvety wine with flavors of plum, blackberry, and a hint of chocolate, named after the treacherous peaks of Antarctica.'
    div3.appendChild(p3);

    let div4 = document.createElement('div');
    div4.classList.add('menuItem');
    menuSection.appendChild(div4);
    let h4 = document.createElement('h2');
    h4.textContent = 'The Whisperer in Darkness Riesling'
    div4.appendChild(h4);
    let p4 = document.createElement('p');
    p4.textContent = 'A light and aromatic wine with notes of peach, apricot, and a hint of honey, perfect for sipping on a warm summer evening.'
    div4.appendChild(p4);

    let div5 = document.createElement('div');
    div5.classList.add('menuItem');
    menuSection.appendChild(div5);
    let h5 = document.createElement('h2');
    h5.textContent = 'The Whisperer in Darkness Riesling'
    div5.appendChild(h5);
    let p5 = document.createElement('p');
    p5.textContent = 'A light and aromatic wine with notes of peach, apricot, and a hint of honey, perfect for sipping on a warm summer evening.'
    div5.appendChild(p5);

    let div6 = document.createElement('div');
    div6.classList.add('menuItem');
    menuSection.appendChild(div6);
    let h6 = document.createElement('h2');
    h6.textContent = 'The Whisperer in Darkness Riesling'
    div6.appendChild(h6);
    let p6 = document.createElement('p');
    p6.textContent = 'A light and aromatic wine with notes of peach, apricot, and a hint of honey, perfect for sipping on a warm summer evening.'
    div6.appendChild(p6);

    let div7 = document.createElement('div');
    div7.classList.add('menuItem');
    menuSection.appendChild(div7);
    let h7 = document.createElement('h2');
    h7.textContent = 'The Dreams in the Witch House Shiraz'
    div7.appendChild(h7);
    let p7 = document.createElement('p');
    p7.textContent = 'A spicy and robust wine with flavors of black pepper, dark cherry, and a hint of smoky oak, named after the eerie tale of the Witch House in Arkham.'
    div7.appendChild(p7);

    let div8 = document.createElement('div');
    div8.classList.add('menuItem');
    menuSection.appendChild(div8);
    let h8 = document.createElement('h2');
    h8.textContent = 'The Nameless City Zinfandel'
    div8.appendChild(h8);
    let p8 = document.createElement('p');
    p8.textContent = 'A bold and fruity wine with flavors of blackberry, raspberry, and a hint of spice, inspired by the ancient and forgotten city in the desert.'
    div8.appendChild(p8);

    let div9 = document.createElement('div');
    div9.classList.add('menuItem');
    menuSection.appendChild(div9);
    let h9 = document.createElement('h2');
    h9.textContent = 'The Festival Cabernet Franc'
    div9.appendChild(h9);
    let p9 = document.createElement('p');
    p9.textContent = 'A smooth and elegant wine with flavors of raspberry, red currant, and a hint of violet, named after the chilling festival in Kingsport.'
    div9.appendChild(p9);

}

export { menuPage };






