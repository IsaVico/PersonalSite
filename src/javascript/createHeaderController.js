/**
 * @author Isabel Vico Peinado <isabel.vico.peinado@gmail.com>
 */
function createHeader() {
    var div,
        header,
        h1,
        nav,
        ul;

    div = document.createElement('div');
    header = document.createElement('header');
    h1 = document.createElement('h1');
    nav = document.createElement('nav');
    ul = document.createElement('ul');

    div.setAttribute("class", "wrapper");

    h1.appendChild(document.createTextNode('Isabel Vico personal site'));

    createNavElements(ul);

    nav.appendChild(ul);
    div.appendChild(h1);
    div.appendChild(nav);
    header.appendChild(div);
    document.body.appendChild(header);
}

function createNavElements (ul) {
    createLink(ul, 'home', 'home');
    createLink(ul, 'aboutme', 'about me');
    createLink(ul, 'resume', 'resume');
    createLink(ul, 'travels', 'travels');
    createLink(ul, 'contactme', 'contact me');
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
