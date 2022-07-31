import ScrollReveal from 'scrollreveal'

let About = {
    render: async () => {
        let view = /*html*/ `
            <div class="main-header">
                <div class="hero-img hero-img--about">
                    <p class="hero-img__subtitle text-center">
                        <img src="assets/images/doma.svg" />
                    </p>
                    <div class="hero-dates">
                        21 - 28 <span>август</span>
                    </div>
                    <div class="hero-accent hero-accent-purple">
                        <h1>
                            Cool den
                        </h1>
                    </div>
                    <div class="hero-accent hero-accent">
                        <h1>
                            DJ Martin Nox
                        </h1>
                    </div>
                    <div class="hero-accent hero-accent-blue">
                        <h1>
                            People of Maha
                        </h1>
                    </div>
                    <div class="hero-accent hero-accent">
                        <h1>
                            DJ 89
                        </h1>
                    </div>
                    <div class="hero-buttons-wrapper mt-5">
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
                            <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSeOgB1KpWH_SdDOcs8bHfDobPdeYNSyye3WOUCQ9CffUeK4OA/viewform" target="_blank">Плажен волейбол</a>
                            <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSctdOhRbnMkibLQzXurlIDWg1s-nPnda_ID-_OsqlGiSWUgCA/viewform" target="_blank">Мини футбол</a>
                          </div>
                        </div>
                    </div>
                    <img class="hero-img-top" src="assets/images/hammock.png" />
                    <img class="hero-img-bottom-left" src="assets/images/tree.png" />
                    <img class="hero-img-bottom-right" src="assets/images/singer.png" />
                </div>
                <div class="scroll-down d-none d-sm-block">
                    <div class="arrow"></div>
                </div>
            </div>

            <div class="sticky-buttons">
                <a class="btn btn-primary" href="https://forms.gle/4vxstVtR33BqjwWQ9" target="_blank">бъди доброволец</a>
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
                    <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSeOgB1KpWH_SdDOcs8bHfDobPdeYNSyye3WOUCQ9CffUeK4OA/viewform" target="_blank">Плажен волейбол</a>
                    <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSctdOhRbnMkibLQzXurlIDWg1s-nPnda_ID-_OsqlGiSWUgCA/viewform" target="_blank">Мини футбол</a>
                  </div>
                </div>
            </div>

            <br>
        `
        return view
    },
    after_render: async () => {
        // ScrollReveal animations
        ScrollReveal().reveal('.partners-logos img-fluid', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.3
        });
    }
}

export default About;
