/**
 * Created by Isabel on 01/03/2016.
 */

function createBody(){
    var firstDiv,
        secondDiv,
        article;

    firstDiv = document.createElement('div');
    firstDiv.setAttribute('id', 'primary-content');
    secondDiv = document.createElement('div');
    secondDiv.setAttribute('class', 'wrapper');

    article = document.createElement('article');

    appendContentToArticle(article);

    secondDiv.appendChild(article);
    firstDiv.appendChild(secondDiv);
    document.body.appendChild(firstDiv);
}


function appendContentToArticle(article) {
    var h3,
        p,
        text;

    text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo a nibh dignissim tincidunt. Nam ultricies odio ac neque suscipit volutpat. Ut dictum adipiscing felis sed malesuada. Integer porta sem nec nibh hendrerit imperdiet.';
    h3 = document.createElement('h3');
    p = document.createElement('p');


    p.appendChild(document.createTextNode(text));
    h3.appendChild(document.createTextNode('Texto de prueba'));
    article.appendChild(h3);
    article.appendChild(p);
}