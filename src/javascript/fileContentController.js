/**
 * Created by Isabel on 03/03/2016.
 */

function appendTextContentToElement(element, text){
    var i,
        textLines;

    textLines = text.split('\n');
    for(i= 0 ; i < textLines.length ; i++) {
        element.appendChild(document.createTextNode(textLines[i]));
        element.appendChild(document.createElement('br'));
    }
}


function createTextContent () {
    var element;

    element = document.getElementById('contentElement');
    appendTextContentToElement(element, this.responseText);
}
