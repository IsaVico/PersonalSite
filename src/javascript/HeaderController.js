/**
 * @author Isabel Vico Peinado <isabel.vico.peinado@gmail.com>
 */
function createHeader() {
    var div,
        header,
        nav,
        ul;

    div = document.createElement('div');
    header = document.createElement('header');
    nav = document.createElement('nav');
    ul = document.createElement('ul');

    div.setAttribute("class", "wrapper");

    createNavElements(ul);

    nav.appendChild(ul);
    div.appendChild(nav);
    header.appendChild(div);
    document.body.appendChild(header);
}

function createNavElements (ul) {
    createLink(ul, 'home', 'inicio');
    createLink(ul, 'aboutme', 'sobre mi');
    createLink(ul, 'resume', 'currículum');
    createLink(ul, 'travels', 'viajes');
    createLink(ul, 'contactme', 'escríbeme');
}

function createLink(ul, href, titleSection){
    var li;

    li = document.createElement('li');
    link = document.createElement('a');
    link.setAttribute('href', href.concat('.html'));
    link.appendChild(document.createTextNode(titleSection));
    li.appendChild(link);
    ul.appendChild(li);
}
