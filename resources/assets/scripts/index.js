'use strict';

window.$ = window.jQuery = require('jquery');
require('bootstrap');

import About from '../views/pages/About.js'
import Story from '../views/pages/Story.js'
import Error404 from '../views/pages/Story.js'
//
import Header from '../views/components/Header.js'
import Footer from '../views/components/Footer.js'
//
import Utils from './services/Utils.js'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/' : About,
    '/about' : Story
};

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');

    // Render the Header and footer of the page
    header.innerHTML = await Header.render();
    await Header.after_render();
    footer.innerHTML = await Footer.render();
    await Footer.after_render();

    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL();

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404;
    content.innerHTML = await page.render();
    await page.after_render();

    // Change header colour on the case study page
    // if (parsedURL == '/project/:id') {
    //     document.getElementsByTagName('header')[0].style.background = await page.headerBg();
    // }

    // Go on top of the page
    window.scrollTo(0,0);

    // get current URL path and assign 'active' class
    var pathname = location.pathname.split('/')[1];
    var selected = $('.navbar-nav').find("[data-url='" + pathname + "']");
    selected.addClass('active');

    // {{ Set and get cookie for website seasons
    function getCookie(name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    }

    function setCookie(name, value, days) {
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000*36000;
        now.setTime(expireTime);
        document.cookie = 'expires='+now.toUTCString()+';path=/';
    }

    // Detect if there is already a cookie set to the browser on page load
    function checkIfCookie(cookieName) {
        var detectCookie = getCookie(cookieName);
        if (detectCookie) {
            document.body.className = '';
            document.body.classList.add('--' + detectCookie);
        }
    };

    checkIfCookie('season');
    // }}


    // {{ Close cookie modal

    var closeButton = document.getElementById('cookie-close');
    var agreeButton = document.getElementById('cookieAgree');
    var cookieModal = document.getElementById('cookie-consent');

    function closeCookieModal(){
        cookieModal.style.display = 'none';
        var expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
        document.cookie = ("closeCookieModal=true; expires=" + expires + 86400) + ";path=/;";
    };

    function checkIfCookieModal(cookieName) {
        var detectCookie = getCookie(cookieName);
        return detectCookie;
    };

    if(checkIfCookieModal('closeCookieModal') == 'true') {
        cookieModal.style.display = 'none';
    }

    closeButton.addEventListener('click', closeCookieModal);
    agreeButton.addEventListener('click', closeCookieModal);

    // }}
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);