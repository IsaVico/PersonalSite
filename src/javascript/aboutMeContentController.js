/**
 * Created by Isabel on 02/03/2016.
 */


function createContentAboutMe(element, header){
    createHeaderTitle(header, 'Pero...¿quién es Isabel Vico?');
    createImageAboutMe(element);
    createContent();
}

function createContent() {
    readFile(createAboutMeTextContent, '../../resources/texts/aboutme.txt');
}

function createImageAboutMe(element){
    var img;

    img = document.createElement('img');
    img.setAttribute('id', 'aboutMe');
    img.setAttribute('alt', 'About Me');
    img.setAttribute('align','left');

    img.setAttribute('src', '../../resources/images/aboutme.jpg');
    img.setAttribute('style','width:300px;height:200x;border-radius: 800px');

    element.appendChild(img);
}


function createAboutMeTextContent () {
    var element;

    element = document.getElementById('contentElement');
    appendTextContentToElement(element, this.responseText);
}