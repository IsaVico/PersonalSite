/**
 * Created by Isabel on 02/03/2016.
 */

function createContentHome(element, header){
    createHeaderTitle(header);
    createImageHome(element);
    createContent(element);
}

function createImageHome(element){
    var divImg,
        img;

    divImg = document.createElement('div');
    divImg.setAttribute('class','profile');

    img = document.createElement('img');
    img.setAttribute('alt', 'Me');

    img.setAttribute('src', '../../resources/images/me.jpg');
    img.setAttribute('style','width:200px;height:200x');

    divImg.appendChild(img);

    element.appendChild(divImg);
}

function createHeaderTitle(header){
    header.appendChild(document.createTextNode('Texto de prueba'));
}

function createContent(element){

    element.appendChild(document.createTextNode('This is the home page'));
}