/**
 * Created by Isabel on 01/03/2016.
 */

function createFooter(){
    var footer,
        firstDiv,
        secondDiv,
        thirdDiv;

    footer = document.createElement('footer');
    firstDiv = document.createElement('div');
    firstDiv.setAttribute('class', 'wrapper');

    secondDiv = document.createElement('div');
    secondDiv.setAttribute('id', 'footer-info');

    thirdDiv = document.createElement('div');
    thirdDiv.setAttribute('id', 'footer-links');

    createFooterInfo(secondDiv);
    createFooterLinks(thirdDiv);

    firstDiv.appendChild(secondDiv);
    firstDiv.appendChild(thirdDiv);

    footer.appendChild(firstDiv);
    document.body.appendChild(footer);
}


function createFooterInfo(secondDiv) {
    var firstP;

    firstP = document.createElement('p');

    firstP.appendChild(document.createTextNode('Updated on March 2016 by Isabel Vico'));
    secondDiv.appendChild(firstP);
}

function createFooterLinks(div) {
    createSocialLink(div, 'https://au.linkedin.com/in/isabelvico/en', 'LinkedIn', '../../resources/images/LinkedIn.svg');
    createSocialLink(div, 'https://github.com/IsaVico', 'GitHub', '../../resources/images/Github.svg');
    createSocialLink(div, 'http://www.twitter.com/IsaVico', 'Twitter', '../../resources/images/Twitter.svg');
    createSocialLink(div, 'https://www.pinterest.com/isavico86/', 'Pinterest', '../../resources/images/Pinterest.svg');
    createSocialLink(div, 'https://web.facebook.com/isavico', 'Facebook', '../../resources/images/Facebook.svg');
    createSocialLink(div, 'https://www.instagram.com/isavico86/', 'Instagram', '../../resources/images/Instagram.svg');
    createSocialLink(div, 'https://plus.google.com/u/0/112833290541885433861', 'GooglePlus', '../../resources/images/GooglePlus.svg');

}

function createSocialLink(list, href, socialMediaText, imgSrc){
    var img;

    link = document.createElement('a');
    link.setAttribute('href', href);

    img = document.createElement('img');
    img.setAttribute('alt', socialMediaText);
    img.setAttribute('src', imgSrc);
    img.setAttribute('style','width:25px;height:25x;');
    link.appendChild(img);
    list.appendChild(link);
}

