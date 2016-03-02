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
        p;

    h3 = document.createElement('h3');
    p = document.createElement('p');

    createContentPage(p, h3);

    article.appendChild(h3);
    article.appendChild(p);
}


function createContentPage(element, headerText){
    var url;

    url = document.URL;

    switch (true){
        case url.indexOf('home') > 0:
            createContentHome(element, headerText);
            break;
        case url.indexOf('aboutme') > 0:
            createContentAboutMe(element, headerText);
            break;
        case url.indexOf('resume') > 0:
            createContentResume(element, headerText);
            break;
        case url.indexOf('travels') > 0:
            createContentTravels(element, headerText);
            break;
        case url.indexOf('contactme') > 0:
            createContentContactMe(element, headerText);
            break;
    }
}

