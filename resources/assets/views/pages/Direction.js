import ScrollReveal from 'scrollreveal'

let Direction = {
    render: async () => {
        let view = /*html*/ `
        <div class="main-content mb-5">
            <div class="main-title mb-4 mb-lg-5"><h1>Как да стигна?</h1></div>

            <div class="doma-wrapper">
              <div class="row mt-sm-5 mb-3 animated-row centered-wrapper">
                <div class="col-xl-5 text-left order-2 order-xl-1 doma-location-content mt-5 mt-xl-0 p-0 p-md-3">
                <div id="accordion">
                    <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              С кола
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne">
                      <div class="card-body">
                          <p>
                              Най-лесният начин да достигнете до Главната сцена от София е идвайки по подбалканския път.
                              Свивате на отбивката за село Долна Малина и на 100 метра след нея ще забележите табела във ваше ляво,
                              която ще ви отведе до нас! От нея до фестивала са около 800 метра по полския път.
                          </p>
                      </div>
                    </div>
                    </div>
                    <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h2 class="doma-subtitle-ff">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          С автобус
                        </button>
                      </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo">
                      <div class="card-body">
                          <p>
                              Всички автобуси, пътуващи в посока село Долна Малина, тръгват от гара Подуене. Ще ви отнеме около 40 минути да се озовете в центъра на селото, а оттам
                              кметството трябва да остане от дясната ви страна, като продължавате в права линия - към село Априлово. Прекосявате моста
                              и след него, веднага свивате вляво по полския път. Оттам продължавате само направо и за около 20 минутки ще се озовете на точното място.
                              <br><br>
                              Точните часове за тръгване от гара Подуене можете да откриете <a href="https://gornamalina.eu/newsite/temp/MR4.htm" target="_blank">ТУК</a>.
                          </p>
                      </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div class="col-xl-5 doma-location animated-row order-1 order-xl-2 mt-4 mt-md-0 p-0 p-md-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.405723509002!2d23.678768599999998!3d42.695129200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa65415f95c175%3A0x47464c48a42e524f!2z0KTQtdGB0YLQuNCy0LDQu9C90LAg0LfQvtC90LA1!5e0!3m2!1sen!2sbg!4v1659207400130!5m2!1sen!2sbg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
        </div>
        <div class="sticky-buttons">
            <a class="btn btn-primary" href="https://sabitie.bg/event/kontserti-i-muzika/Dolna-Malina-Open-Fest.1121" role="button" target="_blank">купи билет</a>
            <span class="or">/</span>
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

        <br>
        `
        return view
    },
    after_render: async () => {
        // ScrollReveal animations
        ScrollReveal().reveal('.animated-row', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.3
        });
    }
}

export default Direction;
