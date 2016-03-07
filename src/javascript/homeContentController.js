/**
 * Created by Isabel on 02/03/2016.
 */

function createContentHome(element, header){
    createHeaderTitle(header, '¡Bienvenido!');
    createImageHome(element);
    createContent();
}

function createImageHome(element){
    var img;

    img = document.createElement('img');
    img.setAttribute('id', 'profile');
    img.setAttribute('alt', 'Me');
    img.setAttribute('align','right');

    img.setAttribute('src', '../../resources/images/me.jpg');
    img.setAttribute('style','width:200px;height:200px; border-radius: 800px');

    element.appendChild(img);
}


function createContent() {
    readFile(createTextContent, '../../resources/texts/home.txt');
}



