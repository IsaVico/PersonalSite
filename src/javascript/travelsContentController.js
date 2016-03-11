/**
 * Created by Isabel on 02/03/2016.
 */
function createContentTravels(header){
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
    createGalleryStructure(element)
}

function createGalleryStructure(element) {
    var allGalleryDiv;

    allGalleryDiv = document.createElement('div');
    allGalleryDiv.setAttribute('class', 'allGallery');

    createJaenAlbum(allGalleryDiv);

    element.appendChild(allGalleryDiv);
}

function createJaenAlbum(allGalleryDiv){
    createAlbum(allGalleryDiv,'../../resources/images/background.jpg');
    createOverlay(allGalleryDiv);
}

function createAlbum(allGaleryDiv, src){
    var img;

    img = document.createElement('img');
    img.setAttribute('onclick','overlay()');
    img.setAttribute('src', src);

    allGaleryDiv.appendChild(img);
}

function createOverlay(element) {
    var overlayDiv;

    overlayDiv = createOverlayDiv();
    createOverlayContentDiv(overlayDiv);

    element.appendChild(overlayDiv);
}

function createOverlayContentDiv(overlayDiv){
    var overlayContentDiv;

    overlayContentDiv = document.createElement('div');

    overlayContentDiv.appendChild(createClosingElement());
    createContentOverlay(overlayContentDiv);

    overlayDiv.appendChild(overlayContentDiv);
}

function createContentOverlay(contentDiv){
    var mainHTMLDiv,
        thumbnailsDiv,
        previewDiv,
        imgPreview;

    mainHTMLDiv = document.createElement('div');
    mainHTMLDiv.setAttribute('class', 'gallery');
    mainHTMLDiv.setAttribute('align', 'center');

    thumbnailsDiv= document.createElement('div');
    thumbnailsDiv.setAttribute('class', 'thumbnails');
    createImage(thumbnailsDiv, 'preview.src=img1.src', 'img1', '../../resources/images/travels/img1.jpg');
    createImage(thumbnailsDiv, 'preview.src=img2.src', 'img2', '../../resources/images/travels/img2.jpg');
    createImage(thumbnailsDiv, 'preview.src=img3.src', 'img3', '../../resources/images/travels/img3.jpg');
    createImage(thumbnailsDiv, 'preview.src=img4.src', 'img4', '../../resources/images/travels/img4.jpg');
    createImage(thumbnailsDiv, 'preview.src=img5.src', 'img5', '../../resources/images/travels/img5.jpg');

    previewDiv = document.createElement('div');
    mainHTMLDiv.setAttribute('class', 'gallery');
    mainHTMLDiv.setAttribute('align', 'center');
    imgPreview = document.createElement('img');
    imgPreview.setAttribute('name', 'preview');
    imgPreview.setAttribute('src', '../../resources/images/travels/img1.jpg');
    previewDiv.appendChild(imgPreview);

    mainHTMLDiv.appendChild(thumbnailsDiv);
    mainHTMLDiv.appendChild(previewDiv);
    contentDiv.appendChild(mainHTMLDiv);
}

function createImage(thumbnailsDiv, onMouseOverFunction, name, src){
    var img;

    img = document.createElement('img');
    img.setAttribute('onmouseover',onMouseOverFunction);
    img.setAttribute('name', name);
    img.setAttribute('src', src);

    thumbnailsDiv.appendChild(img);
}


function createOverlayDiv(){
    var div;

    div = document.createElement('div');
    div.setAttribute('class', 'overlay');
    div.setAttribute('id','overlay');
    div.setAttribute('style', 'visibility: hidden');

    return div;
}

function createClosingElement(){
    var closingElement;

    closingElement = document.createElement('a');
    closingElement.setAttribute('class', 'closingElement');
    closingElement.setAttribute('id', 'closingElement');
    closingElement.setAttribute('onclick', 'overlay()');

    return closingElement;
}

function overlay() {
    el = document.getElementById('overlay');
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}