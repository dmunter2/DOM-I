const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navBar = document.querySelector('#container header nav a');


// Code Snippet Image


let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', siteContent['cta']['img-src']);

// Anchor Items

const anchorItems = document.querySelectorAll('a');

anchorItems[0].textContent = siteContent.nav["nav-item-1"];
anchorItems[1].textContent = siteContent.nav["nav-item-2"];
anchorItems[2].textContent = siteContent.nav["nav-item-3"];
anchorItems[3].textContent = siteContent.nav["nav-item-4"];
anchorItems[4].textContent = siteContent.nav["nav-item-5"];
anchorItems[5].textContent = siteContent.nav["nav-item-6"];



// Dom is Awesome 

const awesomeDom = document.querySelector('.cta-text h1');

awesomeDom.textContent = siteContent.cta['h1'];


// Get Started Button

const btn1 = document.querySelector('.cta-text button');

btn1.textContent = siteContent.cta['button'];



// Middle Img

const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent["main-content"]['middle-img-src']);



//Middle Content



const h4NodeList = document.querySelectorAll('h4');

h4NodeList[0].textContent = siteContent["main-content"]['features-h4'];
h4NodeList[1].textContent = siteContent["main-content"]['about-h4'];
h4NodeList[2].textContent = siteContent["main-content"]['servies-h4'];
h4NodeList[3].textContent = siteContent["main-content"]['product-h4'];
h4NodeList[4].textContent = siteContent["main-content"]['vision-h4'];



const pNodeList = document.querySelectorAll('p');
pNodeList[0].textContent = siteContent["main-content"]['features-content'];
pNodeList[1].textContent = siteContent["main-content"]['about-content']
pNodeList[2].textContent = siteContent["main-content"]['servies-content']
pNodeList[3].textContent = siteContent["main-content"]['product-content']
pNodeList[4].textContent = siteContent["main-content"]['vision-content']



// Contact Header

const contactHeader = document.querySelector('.contact h4');

contactHeader.textContent = siteContent['contact']['contact-h4'];



// Contact

const contactP = document.querySelectorAll('.contact p');

contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];



// Footer

const footer1 = document.querySelector('footer');

footer1.textContent = siteContent['footer']['copyright'];





















// const featuresContent = document.querySelector('.text-content p');
// featuresContent.textContent = siteContent["main-content"]['features-content'];


// //About

// const about1 = document.querySelectorAll('.text-content h4');
// about1.textContent = siteContent["main-content"]['about-h4'];



// const aboutContent = document.querySelector('.text-content p');
// featuresContent.textContent = siteContent["main-content"]['features-content'];