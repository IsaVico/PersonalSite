/**
 * Created by Isabel on 02/03/2016.
 */


function createContentResume(element, header){
    createHeaderTitle(header, 'Currículum');
    createContent();
}

function createContent() {
    readFile(createResumeTextContent, '../../resources/texts/resume.txt');
}


function createResumeTextContent () {
    var element;

    element = document.getElementById('contentElement');
    appendTextContentToElement(element, this.responseText);
    createResumeLink(element);
}

function createResumeLink(element) {
    var div,
        link,
        img;

    div = document.createElement('div');

    div.setAttribute('align', 'center');
    link = document.createElement('a');
    link.setAttribute('href', '../../resources/documents/IVResume.pdf');
    link.setAttribute('download', '');

    img = document.createElement('img');
    img.setAttribute('id', 'cv');
    img.setAttribute('alt', 'Isabel Vico Resume');

    img.setAttribute('src', '../../resources/images/pdfIcon.jpg');
    img.setAttribute('style','width:50px;height:50px');


    link.appendChild(img);
    div.appendChild(link);
    element.appendChild(div);
}