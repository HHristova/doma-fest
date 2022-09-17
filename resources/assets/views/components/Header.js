window.$ = window.jQuery = require('jquery');

let Header = {
    render: async () => {
        let view =  /*html*/`
            <header>
                <nav class="navbar navbar-expand-md navbar-light container p-0">
                  <a class="navbar-brand ml-2 ml-sm-0" href="/">
                      <h1 class="logo mb-0"></h1>
                  </a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>

                    <button type="button" data-toggle="collapse" class="close"
                      data-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  <div class="collapse navbar-collapse" id="main-nav">
                    <ul class="navbar-nav">
                    <li class="nav-item dropdown" style="display: none;">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Регламент <span class="sr-only">(current)</span>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="">Кино</a>
                        <a class="dropdown-item" href="">Музика</a>
                      </div>
                    </li>
                      <li class="nav-item">
                        <a class="nav-link" data-url="direction" href="/direction">Как да стигна?</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            За фестивала
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="/faqs">FAQs</a>
                          <a class="dropdown-item" href="/story">История</a>
                          <a class="dropdown-item" href="/archive">Архив</a>
                          <a class="dropdown-item" data-url="story" href="/about-us">За нас</a>
                        </div>
                      </li>
                      <li class="nav-item nav-item-btns-desktop">
                      </li>
                    </ul>
                  </div>
                </nav>
            </header>
        `
        return view
    },
    after_render: async () => {
        let currentNav = '.nav-item .nav-link[href^="' + window.location.hash + '"]';

        $(window).scroll(function() {
           var hT = $('header').offset().top;
               if (hT > $('header').outerHeight()) {
                   $('header').addClass('header--top');
               } else {
                   $('header').removeClass('header--top');
               }
        });
    }
}

export default Header;
