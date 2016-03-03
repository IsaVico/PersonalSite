/**
 * Created by Isabel on 02/03/2016.
 */



function createContentTravels(element, header){
    createHeaderTitle(header, 'Travel');
    createContent();
}

function createContent() {
    readFile(createAboutMeTextContent, '../../resources/texts/travels.txt');
}

function createAboutMeTextContent () {
    var element;

    element = document.getElementById('contentElement');
    appendTextContentToElement(element, this.responseText);
}