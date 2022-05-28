let About = {
    render: async () => {
        let view = /*html*/ `
            <div class="main-header">
                <div class="hero-img hero-img--about">
                    <p class="hero-img__subtitle text-center">
                        <img src="assets/images/doma.svg" />
                    </p>
                    <div class="hero-coming-soon">
                        <p>
                            21 - 28 <span>август</span>
                        </p>
                    </div>
                    <div class="hero-buttons-wrapper mt-5" style="display: none;">
                        <button type="button" class="btn btn-primary">бъди доброволец</button>
                        <span class="or">или</span>
                        <div class="dropdown d-inline-block">
                          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            запиши се за участие
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Кино</a>
                            <a class="dropdown-item" href="#">Музика</a>
                            <a class="dropdown-item" href="#">Фолклор</a>
                            <a class="dropdown-item" href="#">Танци</a>
                            <a class="dropdown-item" href="#">Фотография</a>
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

            <div class="sticky-buttons" style="display: none;">
                <button type="button" class="btn btn-primary">бъди доброволец</button>
                <span class="or">/</span>
                <div class="dropdown d-inline-block">
                  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    запиши се за участие
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Кино</a>
                    <a class="dropdown-item" href="#">Музика</a>
                    <a class="dropdown-item" href="#">Фолклор</a>
                    <a class="dropdown-item" href="#">Танци</a>
                    <a class="dropdown-item" href="#">Фотография</a>
                  </div>
                </div>
            </div>

            <br>
        `
        return view
    }
}

export default About;
