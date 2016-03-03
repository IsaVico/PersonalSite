/**
 * Created by Isabel on 03/03/2016.
 */


function createHeaderTitle(header,text ){
    header.appendChild(document.createTextNode(text));
}

function readFile(functionName, path){
    var request = new XMLHttpRequest();
    request.addEventListener('load', functionName);
    request.open('GET', path);
    request.send();
}