import archiveData from '../../scripts/archive.json';
import ScrollReveal from 'scrollreveal'

let AboutUs = {
    render: async () => {
        let view = /*html*/ `
        <div class="main-content mb-5">
            <div class="main-title mb-4 mb-lg-5"><h1>За нас</h1></div>

            <div class="doma-wrapper">
              <div class="row mt-sm-5 mb-3 animated-row">
                <div class="col-lg-3 offset-lg-2 col-sm-6 about-us--left">
                  <img class="img-fluid" src="assets/images/about-us/yonko.png" />
                </div>
                <div class="col-lg-4 col-sm-6 text-left mt-4 mt-sm-0 pl-sm-5 pl-xs-0 d-flex align-items-flex-start about-us-info">
                    <h2>Йонко Димитров</h2>
                    <p>
                        Йонко е бивш кмет на село Долна Малина и основател на Dolna Malina Open Fest. Той е актьор, режисьор и продуцент и всичките му личности свирят на пиано. Обича сцената и камерата и те го обичат. Завръща се от Лондон, за да превърне Долна Малина в културно средище.
                    </p>
                </div>
              </div>
                <div class="row mt-sm-5 mb-3 pt-4 animated-row">
                    <div class="col-lg-3 col-sm-6 order-sm-2">
                      <img class="img-fluid" src="assets/images/about-us/toni.png" />
                    </div>
                      <div class="d-flex align-items-flex-start col-lg-4 offset-lg-2 col-sm-6 text-left mt-4 mt-sm-0 order-sm-1 about-us-info about-us--left">
                          <h2>Антония Любенова</h2>
                          <p>
                              Тони е една от трите основателки на продуцентска къща Кадъръ Медия. Занимава се с актьорско майсторство от 8-годишна. В момента се занимава главно с продуцентство и операторство. Свири на всичко, което има струни, полиглот е и обожава да пътува. Пише първия си роман още като ученичка. Колекционер на сродни души.
                          </p>
                      </div>
                </div>
                <div class="row mt-sm-5 mb-3 pt-4 animated-row">
                  <div class="col-lg-3 offset-lg-2 col-sm-6 about-us--left">
                    <img class="img-fluid" src="assets/images/about-us/deni.png" />
                  </div>
                  <div class="col-lg-4 col-sm-6 text-left mt-4 mt-sm-0 pl-sm-5 pl-xs-0 d-flex align-items-flex-start about-us-info">
                      <h2>Денислава Любомирова</h2>
                      <p>
                          Дени е филолог, режисьор, занимавала се е с импро театър и танци. Когато се вдъхнови - пише в унисон с постмодернистичната душа, която носи. Върл фен на книгите, високо  оценява хубавото вино, обича природата, духовните практики и джембетата. Дени е една от трите основателки на Кадъръ Медия, а към момента работи като продуцент в телевизия.
                      </p>
                  </div>
                </div>
                <div class="row mt-sm-5 mb-3 pt-4 animated-row">
                  <div class="col-lg-3 col-sm-6 order-sm-2">
                    <img class="img-fluid" src="assets/images/about-us/mila.png" />
                  </div>
                  <div class="d-flex align-items-flex-start col-lg-4 offset-lg-2 col-sm-6 text-left mt-4 mt-sm-0 order-sm-1 about-us-info about-us--left">
                      <h2>Мила Нинова</h2>
                      <p>
                        Мила е китарист на единствената женска алтърнaтив рок банда в България People Of Mahа. Много весел и спокоен (ха!) човек, който обича да слуша музика, да ходи по концерти и да организира такива. Занимава се с мениджмънт от 2018 година.
                      </p>
                  </div>
                </div>
                <div class="row mt-sm-5 mb-3 pt-4 animated-row">
                  <div class="col-lg-3 offset-lg-2 col-sm-6 about-us--left">
                    <img class="img-fluid" src="assets/images/about-us/katerina.png" />
                  </div>
                  <div class="col-lg-4 col-sm-6 text-left mt-4 mt-sm-0 pl-sm-5 pl-xs-0 d-flex align-items-flex-start about-us-info">
                      <h2>Катерина Симеонова</h2>
                      <p>
                        Катето е програмист по професия, авантюрист по душа. Винаги е имала интерес към изкуството във всеки негов израз. Сред нейните най-любими хобита намират място пътешествията, волейболът, пеенето и посещаването на събития от всякакъв характер - концерти, спортни състезания и конференции.
                      </p>
                  </div>
                </div>
                <div class="row mt-sm-5 mb-3 pt-4 animated-row">
                  <div class="col-lg-3 col-sm-6 order-sm-2">
                    <img class="img-fluid" src="assets/images/about-us/kalin.png" />
                  </div>
                  <div class="d-flex align-items-flex-start col-lg-4 offset-lg-2 col-sm-6 text-left mt-4 mt-sm-0 order-sm-1 about-us-info about-us--left">
                      <h2>Калин Пачеръзки</h2>
                      <p>
                        Калин е нашето момче със сърце на поет. Завършва актьорско в НАТФИЗ в класа на проф. Иван Добчев. Кало, както ще ни чуете да се обръщаме към него, често ни забавлява с музикалните и танцувалните си умения. Тренира традиционно и бразилско джу-джицу, айкидо и кендо.
                      </p>
                  </div>
                </div>
                <div class="row mt-sm-5 pt-4 animated-row">
                  <div class="col-lg-3 offset-lg-2 col-sm-6 about-us--left">
                    <img class="img-fluid" src="assets/images/about-us/hrisi.png" />
                  </div>
                  <div class="col-lg-4 col-sm-6 text-left mt-4 mt-sm-0 pl-sm-5 pl-xs-0 d-flex align-items-flex-start about-us-info">
                      <h2>Христина Христова</h2>
                      <p>
                        Хриси е графичен дизайнер и илюстратор, вдъхновяващ се от мечтите, музиката и света около себе си. Винаги работи по поне няколко проекта едновременно, има зад гърба си няколко такива в музикалния бранш, а в момента работи и по създаването на първата си илюстрирана книга. Ако търсите виновника за визията на фестивала - тя е вашият човек.
                      </p>
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

export default AboutUs;
