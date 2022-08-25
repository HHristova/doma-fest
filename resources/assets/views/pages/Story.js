import ScrollReveal from 'scrollreveal'

let Story = {
    render: async () => {
        let view = /*html*/ `
            <div class="main-content">
                <div class="main-title mb-4 mb-lg-5"><h1>История</h1></div>

                <div class="doma-wrapper">
                  <div class="row mt-sm-5 animated-row">
                    <div class="d-flex align-items-center col-lg-5 offset-lg-1 col-sm-6 text-left mb-3">
                        <p>
                            Dolna Malina Open Fest е фестивал за изкуства, който дава възможност на спортисти, музиканти, танцьори, кино- и други творци и артисти да обменят опит и да представят своя талант, включвайки се в турнири, състезания, работилници и концерти. Главният организатор е бившият кмет на село Долна Малина - Йонко Димитров, който има дългогодишен опит като актьор, продуцент и режисьор.
                        </p>
                    </div>
                    <div class="col-lg-5 col-sm-6">
                      <img class="img-fluid" src="assets/images/story/04.png" />
                    </div>
                  </div>
                  <div class="row mt-sm-5 mt-4 animated-row">
                      <div class="col-lg-5 offset-lg-1 col-sm-6">
                        <img class="img-fluid" src="assets/images/story/02.png" />
                      </div>
                      <div class="d-flex align-items-center col-lg-5 col-sm-6 text-left mt-4 mt-sm-0">
                          <p>
                              Фестивалът стартира успешно през 2017 година с 1 200 участници в първото си издание в Долна Малина - китно селце, което се намира на 28.6 км югоизточно от центъра на град София. За петото издание на фестивала в организацията се присъединява и екипът на продуцентска къща „Кадъръ Медия“.
                          </p>
                      </div>
                  </div>
                  <div class="row mt-sm-5 animated-row">
                        <div class="d-flex align-items-center col-lg-5 offset-lg-1 col-sm-6 text-left mb-3">
                            <p>
                                Всяка година в рамките на фестивала участниците и гостите могат да се включат в спортни състезания, отворена сцена или да се насладят на кино вечери с подбрана селекция от късометражни филми.
                            </p>
                        </div>
                      <div class="col-lg-5 col-sm-6">
                        <img class="img-fluid" src="assets/images/story/05.png" />
                      </div>
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
            viewFactor: 0.4
        });
    }
}

export default Story;
