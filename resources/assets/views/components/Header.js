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
                    <li class="nav-item dropdown">
                      <a class="nav-link" data-url="direction" href="/schedule">Програма</a>
                    </li>
                      <li class="nav-item">
                        <a class="nav-link" data-url="direction" href="/direction">Как да стигна?</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link volunteer-btn" href="https://forms.gle/4vxstVtR33BqjwWQ9" role="button" target="_blank">Бъди доброволец</a>
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
                      <div class="hero-buttons-wrapper">
                          <a class="btn btn-primary" href="https://sabitie.bg/event/kontserti-i-muzika/Dolna-Malina-Open-Fest.1121" role="button" target="_blank">купи билет</a>
                          <span class="or">или</span>
                          <div class="dropdown d-inline-block">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              запиши се за участие
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a class="dropdown-item" href="https://forms.gle/7pZjWcYkZnvccogf8" target="_blank">Музика</a>
                              <a class="dropdown-item" href="https://forms.gle/j7rq6bkkLxusu7826" target="_blank">Кино</a>
                              <a class="dropdown-item" href="https://forms.gle/JzS22BDe2fZ2MhTs7" target="_blank">Фолклор</a>
                              <a class="dropdown-item" href="https://forms.gle/xm6uN7zLeaRwczcr6" target="_blank">Танцово изкуство</a>
                              <a class="dropdown-item" href="https://forms.gle/PKnbgAqCSXetHGVXA" target="_blank">Детски състави</a>
                              <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSdAMRyy19KKnWV0EzQ_MgVAi51ZCBDtKhR2bDa233U9U-3abQ/viewform" target="_blank">Фотография</a>
                              <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSdbOzP1l_6uFB48MNfgk20MV6K_mT8AE6LzQjkGKlwWgkEeQQ/viewform" target="_blank">Електронни спортове</a>
                            </div>
                          </div>
                      </div>
                      </li>

                      <li class="nav-item nav-item-btns-mobile">
                      <div class="hero-buttons-mobile">
                          <a class="btn btn-primary" href="https://sabitie.bg/event/kontserti-i-muzika/Dolna-Malina-Open-Fest.1121" role="button" target="_blank">купи билет</a>
                          <div class="dropup">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              запиши се за участие
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a class="dropdown-item" href="https://forms.gle/7pZjWcYkZnvccogf8" target="_blank">Музика</a>
                              <a class="dropdown-item" href="https://forms.gle/j7rq6bkkLxusu7826" target="_blank">Кино</a>
                              <a class="dropdown-item" href="https://forms.gle/JzS22BDe2fZ2MhTs7" target="_blank">Фолклор</a>
                              <a class="dropdown-item" href="https://forms.gle/xm6uN7zLeaRwczcr6" target="_blank">Танцово изкуство</a>
                              <a class="dropdown-item" href="https://forms.gle/PKnbgAqCSXetHGVXA" target="_blank">Детски състави</a>
                              <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSdAMRyy19KKnWV0EzQ_MgVAi51ZCBDtKhR2bDa233U9U-3abQ/viewform" target="_blank">Фотография</a>
                              <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSdbOzP1l_6uFB48MNfgk20MV6K_mT8AE6LzQjkGKlwWgkEeQQ/viewform" target="_blank">Електронни спортове</a>
                            </div>
                          </div>
                      </div>
                      <div>
                          <div class="row">
                              <div class="col-12 order-md-1">
                                <p>Последвайте ни:</p>
                                <a class="social-links" href="https://www.instagram.com/doma_fest/" target="_blank">
                                  <i class="fab fa-instagram social-icons__inst" aria-hidden="true"></i>
                                </a><a class="social-links" href="https://www.facebook.com/domafest" target="_blank">
                                  <i class="fab fa-facebook social-icons__inst" aria-hidden="true"></i>
                                </a>
                              </div>
                              <div class="col-12 order-md-3">
                                <p>Връзка с нас:</p>
                                <a class="email-link" href="mailto:contact@doma-fest.com">contact@doma-fest.com</a>
                              </div>
                          </div>
                      </div>
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
