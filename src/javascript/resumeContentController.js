/**
 * Created by Isabel on 02/03/2016.
 */


function createContentResume(element, header){
    createHeaderTitle(header, 'Currículum');
    createContent();
}

function createContent() {
    readFile(createAboutMeTextContent, '../../resources/texts/resume.txt');
}

function createAboutMeTextContent () {
    var element;

    element = document.getElementById('contentElement');
    appendTextContentToElement(element, this.responseText);
}