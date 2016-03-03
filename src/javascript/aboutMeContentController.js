/**
 * Created by Isabel on 02/03/2016.
 */


function createContentAboutMe(element, header){
    createHeaderTitle(header, 'About Me');
    createContent();
}

function createContent() {
    readFile(createAboutMeTextContent, '../../resources/texts/aboutme.txt');
}

function createAboutMeTextContent () {
    var element;

    element = document.getElementById('contentElement');
    appendTextContentToElement(element, this.responseText);
}