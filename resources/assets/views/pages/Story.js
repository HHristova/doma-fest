import ScrollReveal from 'scrollreveal'

let Story = {
    render: async () => {
        let view = /*html*/ `
            <div class="main-content">
                <div class="main-title mb-4 mb-lg-5">История</div>

                <div class="doma-story">
                  <div class="row mt-sm-5">
                    <div class="d-flex align-items-center col-lg-5 offset-lg-1 col-sm-6 text-left mb-3">
                        <p>
                            Dolna Malina Open Fest е фестивал за изкуства, който дава възможност на спортисти, музиканти, кино- и други творци и артисти да обменят опит и да представят своя талант, включвайки се в турнири, състезания, работилници и концерти. Главният организатор е бившият кмет на село Долна Малина - Йонко Димитров, който има дългогодишен опит като актьор, продуцент и режисьор.
                        </p>
                    </div>
                    <div class="col-lg-5 col-sm-6">
                      <img class="img-fluid" src="assets/images/story/04.png" />
                    </div>
                  </div>
                  <div class="row mt-sm-5 mt-4">
                      <div class="col-lg-5 offset-lg-1 col-sm-6">
                        <img class="img-fluid" src="assets/images/story/02.png" />
                      </div>
                      <div class="d-flex align-items-center col-lg-5 col-sm-6 text-left mt-4 mt-sm-0">
                          <p>
                              Фестивалът стартира успешно през 2017 година с 1 200 участници в първото си издание в Долна Малина - китно селце, което се намира на 28.6 км югоизточно от центъра на град София. За петото юбилейно издание на фестивала в организацията се присъединява и екипът на продуцентска къща „Кадъръ Медия“.
                          </p>
                      </div>
                  </div>
                  <div class="row mt-sm-5">
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


            <br>
        `
        return view
    },
    after_render: async () => {
        // ScrollReveal animations
        ScrollReveal().reveal('.row.mt-sm-5', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.4
        });
    }
}

export default Story;
