/**
 * Created by Isabel on 02/03/2016.
 */

function createContentContactMe(header){
    createHeaderTitle(header, 'Contact Me');
    createContent();
}

function createContent() {
    readFile(createAboutMeTextContent, '../../resources/texts/contactme.txt');
}

function createAboutMeTextContent () {
    var element;

    element = document.getElementById('contentElement');
    appendTextContentToElement(element, this.responseText);
    element.appendChild(document.createElement('br'));
    element.appendChild(document.createElement('br'));
    createForm(element);
}

function createForm(element) {
    var form,
        buttonDiv,
        submitButton;

    form = document.createElement('form');
    form.setAttribute('id', 'contactForm');

    createFormInput(form, 'Nombre: ', 'text', 'Por favor introduzca su nombre');
    createFormInput(form, 'Email: ', 'email', 'Por favor introduzca su e-mail');

    createFormTextAreaMessage(form, 'Mensaje: ', '', 'Por favor introduzca su el mensaje que desee');
    createFormButton(form,'Enviar');

    element.appendChild(form);
}

function createFormInput(form, labelText, type, defaultText) {
    var div,
        label,
        span,
        input;

    div = document.createElement('div');
    label = document.createElement('label');
    span = document.createElement('span');
    input = document.createElement('input');

    span.appendChild(document.createTextNode(labelText));
    input.setAttribute('type', type);
    input.setAttribute('placeholder', defaultText);

    div.appendChild(label);
    label.appendChild(span);
    label.appendChild(input);
    form.appendChild(div);

}

function createFormTextAreaMessage(form, labelText, type, defaultText) {
    var div,
        label,
        span,
        input;

    div = document.createElement('div');
    label = document.createElement('label');
    span = document.createElement('span');
    input = document.createElement('textarea');

    span.appendChild(document.createTextNode(labelText));
    input.setAttribute('type', type);
    input.setAttribute('placeholder', defaultText);

    div.appendChild(label);
    label.appendChild(span);
    label.appendChild(input);
    form.appendChild(div);

}

function createFormButton (form, innerText){
    var buttonDiv,
        submitButton;

    buttonDiv = document.createElement('div');

    submitButton = document.createElement('button');
    submitButton.setAttribute('name', 'submit');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'contact-submit');
    submitButton.innerHTML = innerText;

    buttonDiv.appendChild(submitButton);
    form.appendChild(buttonDiv);
}
