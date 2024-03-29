'use strict';

window.$ = window.jQuery = require('jquery');
require('bootstrap');

import About from '../views/pages/About.js'
import Story from '../views/pages/Story.js'
import Archive from '../views/pages/Archive.js'
import AboutUs from '../views/pages/AboutUs.js'
import Direction from '../views/pages/Direction.js'
import Schedule from '../views/pages/Schedule.js'
import Faqs from '../views/pages/Faqs.js'
import Error404 from '../views/pages/Error404.js'
//
import Header from '../views/components/Header.js'
import Footer from '../views/components/Footer.js'
//
import Utils from './services/Utils.js'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/' : About,
    '/story' : Story,
    '/archive' : Archive,
    '/about-us' : AboutUs,
    '/direction' : Direction,
    '/schedule' : Schedule,
    '/faqs' : Faqs
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

    // get current URL path and assign 'active' class
    var pathname = location.pathname.split('/')[1];
    var selected = $('.navbar-nav').find("[data-url='" + pathname + "']");
    selected.addClass('active');
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
