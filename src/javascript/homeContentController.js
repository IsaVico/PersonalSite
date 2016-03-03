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
    img.setAttribute('align','left');

    img.setAttribute('src', '../../resources/images/me.jpg');
    img.setAttribute('style','width:200px;height:200x');

    element.appendChild(img);
}


function createContent() {
    readFile(createHomeTextContent, '../../resources/texts/home.txt');
}

function createHomeTextContent () {
    var element;

    element = document.getElementById('contentElement');
    appendTextContentToElement(element, this.responseText);
}


