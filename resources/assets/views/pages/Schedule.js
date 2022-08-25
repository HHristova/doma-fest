import archiveData from '../../scripts/archive.json';
import ScrollReveal from 'scrollreveal'

let Schedule = {
    render: async () => {
        let view = /*html*/ `
        <div class="main-content main-content-pb-sm mb-5">
            <div class="main-title mb-4 mb-lg-5">
                <h1>Програма</h1>
            </div>

            <div class="doma-wrapper doma-wrapper-schedule">
                <div class="doma-schedule-content-box doma-schedule-content-box--green-bg">
                    <ul class="nav nav-tabs mt-4">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">26-ти август<span>(петък)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">27-ми август<span>(събота)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">28-ми август<span>(неделя)</span></a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="schedule-date-nav">

                                <div id="accordion" class="d-sm-block d-md-none mt-5">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="doma-subtitle-ff">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#day1" aria-expanded="false" aria-controls="day1">
                                                    Всички зони
                                                </button>
                                            </h2>
                                        </div>

                                        <div id="day1" class="collapse" aria-labelledby="headingOne">
                                            <div class="card-body">
                                                <ul class="nav nav-pills nav-fill flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="zone-1-tab" data-toggle="tab" href="#zone1" role="tab" aria-controls="zone1" aria-selected="true">Зона 1<span>Танц, фолклор</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="zone-3-tab" data-toggle="tab" href="#zone3" role="tab" aria-controls="zone3" aria-selected="true">Зона 3<span>Спорт, театър</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="zone-4-tab" data-toggle="tab" href="#zone4" role="tab" aria-controls="zone4" aria-selected="true">Зона 4<span>Театър</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link active" id="zone-5-tab" data-toggle="tab" href="#zone5" role="tab" aria-controls="zone5" aria-selected="true">Зона 5<span>Главна сцена</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="zone-6-tab" data-toggle="tab" href="#zone6" role="tab" aria-controls="zone6" aria-selected="true">Зона 6<span>филмово студио БУФО</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="zone-7-tab" data-toggle="tab" href="#zone7" role="tab" aria-controls="zone7" aria-selected="true">Зона 7<span>Литературно четене</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <ul class="nav nav-pills nav-fill flex-column nav-hidden-sm">
                                    <li class="nav-item">
                                        <a class="nav-link" id="zone-1-tab" data-toggle="tab" href="#zone1" role="tab" aria-controls="zone1" aria-selected="true">Зона 1<span>Танц, фолклор</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="zone-3-tab" data-toggle="tab" href="#zone3" role="tab" aria-controls="zone3" aria-selected="true">Зона 3<span>Спорт, театър</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="zone-4-tab" data-toggle="tab" href="#zone4" role="tab" aria-controls="zone4" aria-selected="true">Зона 4<span>Театър</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" id="zone-5-tab" data-toggle="tab" href="#zone5" role="tab" aria-controls="zone5" aria-selected="true">Зона 5<span>Главна сцена</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="zone-6-tab" data-toggle="tab" href="#zone6" role="tab" aria-controls="zone6" aria-selected="true">Зона 6<span>филмово студио БУФО</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="zone-7-tab" data-toggle="tab" href="#zone7" role="tab" aria-controls="zone7" aria-selected="true">Зона 7<span>Литературно четене</span></a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade" id="zone1" role="tabpanel" aria-labelledby="zone-1-tab">
                                        <h3 class="pt-3">Зона 1</h3>
                                        <p class="pt-3">
                                            Aко искате да се насладите на танцови и фолклорни изпълнения - центърът на село Горна Малина е вашето място.
                                            <br><br>
                                            Подробна информация за програмата очаквайте скоро.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="zone3" role="tabpanel" aria-labelledby="zone-3-tab">
                                        <h3 class="pt-3">Зона 3</h3>
                                        <p class="pt-3">
                                            В Народно читалище „Васил Левски - 1943” с. Долна Малина ще може да се насладите на:
                                        </p>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">
                                                <p class="schedule-time">19:30 - 20:30</p>
                                                <p class="schedule-activity">Комедията "Хамелеонът" - авторска пиеса на сдружение Артикус</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tab-pane fade" id="zone4" role="tabpanel" aria-labelledby="zone-4-tab">
                                        <h3 class="pt-3">Зона 4</h3>
                                        <p class="pt-3">
                                            В Народно читалище “Васил Левски - 1929”, село Горна Малина в рамките на фестивала ще се проведат
                                            серия от театрални постановки.
                                            <br><br>
                                            Подробна информация за програмата очаквайте скоро.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade show active" id="zone5" role="tabpanel" aria-labelledby="zone-5-tab">
                                        <h3 class="pt-3">Зона 5</h3>
                                        <p class="pt-3">
                                            В тази зона се намират къмпингът и главната музикална сцена, където ще се проведат музикалните състезания, отворената сцена за танцьори и музиканти,
                                            филмовите прожекции, концертите и DJ партитата, а през целия ден ще има разнообразни работилници, храни и напитки.
                                        </p>
                                        <ul class="nav nav-pills nav-pills-horizontal">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="scene" data-toggle="tab" href="#scene-tab" role="tab" aria-controls="scene-tab" aria-selected="true">Главна сцена<span>(по часове)</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="art" data-toggle="tab" href="#art-tab" role="tab" aria-controls="art-tab" aria-selected="true">Работилници<span>(целодневно)</span></a>
                                            </li>
                                        </ul>
                                        <div class="tab-content tab-content-horizontal" id="third-level">
                                            <div class="tab-pane fade show active" id="scene-tab" role="tabpanel" aria-labelledby="scene">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">14:00</p>
                                                        <p class="schedule-activity">Open Stage</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">20:00</p>
                                                        <p class="schedule-activity">Откриване</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">20:15 - 21:45</p>
                                                        <a class="modal-link" data-toggle="modal" data-target="#cool-den">
                                                            Cool Den
                                                        </a>

                                                        <div class="modal info-modal fade" id="cool-den" tabindex="-1" role="dialog" aria-labelledby="cool-denLabel" aria-hidden="true">
                                                          <div class="modal-dialog modal-dialog-centered" role="document">
                                                            <div class="modal-content">
                                                              <div class="modal-header">
                                                                <h5 class="modal-title" id="cool-denLabel">Cool Den</h5>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                </button>
                                                              </div>
                                                              <div class="modal-body">
                                                                <img class="img-fluid mb-3" src="assets/images/artists/cool-den.jpg" alt="Cool Den band image" />
                                                                  Групата е в състав Никола Симеонов (китара, вокал), Ивайло Петров (китара, вокал), Васил Андреев (бас) и Теодор Чирпанлиев (барабани). Зад гърба си имат вече два албума, като от тях може да чуете и гръндж, и пънк, и алтърнатив, и рок, и ска, и фънк. Групата бързо набира популярност и печели сърцата на българската публика!
                                                              </div>
                                                              <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">21:45 - 22:45</p>
                                                        <p class="schedule-activity">Кино прожекции</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">23:00 - До зори</p>
                                                        <a class="modal-link" data-toggle="modal" data-target="#martin-nox">
                                                            DJ Martin Nox
                                                        </a>

                                                        <div class="modal info-modal fade" id="martin-nox" tabindex="-1" role="dialog" aria-labelledby="martin-noxLabel" aria-hidden="true">
                                                          <div class="modal-dialog modal-dialog-centered" role="document">
                                                            <div class="modal-content">
                                                              <div class="modal-header">
                                                                <h5 class="modal-title" id="martin-noxLabel">DJ Martin Nox</h5>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                </button>
                                                              </div>
                                                              <div class="modal-body">
                                                                <img class="img-fluid mb-3" src="assets/images/artists/dj-martin-nox.jpg" alt="DJ Martin Nox image" />
                                                                  DJ Martin Nox се занимава професионално с музика от 2016 година и има миксовете, които влизат в Top 100 global EDM mix chart & electronic dance music chart on Mixcloud!
                                                              </div>
                                                              <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                    </li>
                                                </ul>

                                                <small>* Това е предварителна програма. Организаторът си запазва правото за допълнителни промени по нея.</small>
                                            </div>
                                            <div class="tab-pane fade" id="art-tab" role="tabpanel" aria-labelledby="art">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Смехойога със СмехотвореНИЕ сме НИЕ</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Арт терапия</p>
                                                    </li>
                                                </ul>

                                                <small>* Това е предварителна програма. Организаторът си запазва правото за допълнителни промени по нея.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="zone6" role="tabpanel" aria-labelledby="zone-6-tab">
                                        <h3 class="pt-3">Зона 6</h3>
                                        <p class="pt-3">
                                            В рамките на фестивала, всеки посетител ще може да се докосне до магията на киното, като се разходи из
                                            декорите на кино студия БУФО и се преобрази в костюм на любим герой!
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="zone7" role="tabpanel" aria-labelledby="zone-7-tab">
                                        <h3 class="pt-3">Зона 7</h3>
                                        <p class="pt-3">
                                            В рамките на фестивала в село Байлово ще се проведе литературно четене на
                                            селектирани разкази от творчеството на Елин Пелин.
                                        </p>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">
                                                <p class="schedule-time">11:00 - 12:00</p>
                                                <p class="schedule-activity">Литературно четене на селектирани разкази</p>
                                            </li>
                                            <li class="list-group-item">
                                                <p class="schedule-time">12:00 - 13:00</p>
                                                <p class="schedule-activity">
                                                    Туристически преход “По стъпките на Елин Пелин”
                                                    по новоизградената екопътека Байлово - Андрешково езеро, където писателят пише творбата “Андрешко”.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="schedule-date-nav">


                                <div id="accordion" class="d-sm-block d-md-none mt-5">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="doma-subtitle-ff">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#day2" aria-expanded="false" aria-controls="day2">
                                                    Всички зони
                                                </button>
                                            </h2>
                                        </div>

                                        <div id="day2" class="collapse" aria-labelledby="headingOne">
                                            <div class="card-body">
                                                <ul class="nav nav-pills nav-fill flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="zone-1-tab-2" data-toggle="tab" href="#zone1-2" role="tab" aria-controls="zone1-2" aria-selected="true">Зона 1<span>Танц, фолклор</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="zone-3-tab-2" data-toggle="tab" href="#zone3-2" role="tab" aria-controls="zone3-2" aria-selected="true">Зона 3<span>Спорт, театър</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="zone-4-tab-2" data-toggle="tab" href="#zone4-2" role="tab" aria-controls="zone4-2" aria-selected="true">Зона 4<span>Театър</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link active" id="zone-5-tab-2" data-toggle="tab" href="#zone5-2" role="tab" aria-controls="zone5-2" aria-selected="true">Зона 5<span>Главна сцена</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="zone-7-tab-2" data-toggle="tab" href="#zone7-2" role="tab" aria-controls="zone7-2" aria-selected="true">Зона 7<span>Литературно четене</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ul class="nav nav-pills nav-fill flex-column nav-hidden-sm">
                                    <li class="nav-item">
                                        <a class="nav-link" id="zone-1-tab-2" data-toggle="tab" href="#zone1-2" role="tab" aria-controls="zone1-2" aria-selected="true">Зона 1<span>Танц, фолклор</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="zone-3-tab-3" data-toggle="tab" href="#zone3-2" role="tab" aria-controls="zone3-2" aria-selected="true">Зона 3<span>Спорт, театър</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="zone-4-tab-2" data-toggle="tab" href="#zone4-2" role="tab" aria-controls="zone4-2" aria-selected="true">Зона 4<span>Театър</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" id="zone-5-tab-2" data-toggle="tab" href="#zone5-2" role="tab" aria-controls="zone5-2" aria-selected="true">Зона 5<span>Главна сцена</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="zone-7-tab-2" data-toggle="tab" href="#zone7-2" role="tab" aria-controls="zone7-2" aria-selected="true">Зона 7<span>Литературно четене</span></a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade" id="zone1-2" role="tabpanel" aria-labelledby="zone-1-tab-2">
                                        <h3 class="pt-3">Зона 1</h3>
                                        <p class="pt-3">
                                            Aко искате да се насладите на танцови и фолклорни изпълнения - центърът на село Горна Малина е вашето място.
                                            <br>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <p class="schedule-time">10:30 - 12:00</p>
                                                    <p class="schedule-activity">Детско утро с аниматори</p>
                                                </li>
                                                <li class="list-group-item">
                                                    <p class="schedule-time">16:00 - 18:30</p>
                                                    <p class="schedule-activity">Фолклор и танци</p>
                                                </li>
                                                <li class="list-group-item">
                                                    <p class="schedule-time">18:30 - 18:40</p>
                                                    <p class="schedule-activity">Приветствие от инж. Ангел Жиланов, кмет на общ. Горна Малина</p>
                                                </li>
                                                <li class="list-group-item">
                                                    <p class="schedule-time">18:40 - 19:30</p>
                                                    <p class="schedule-activity">Откриване на концертна програма: <br>
                                                    - Спортен клуб по художествена гимнастика "Теа Спорт 2018" - Горна Малина с треньор Латина Цветанова<br>
                                                    - Фолклорен танцов клуб "Лудо Малинско" при НЧ "Васил Левски" - Горна Малина с ръководител Йоана Колева<br>
                                                    - Танцова формация "Шопе"</p>
                                                </li>
                                                <li class="list-group-item">
                                                    <p class="schedule-time">19:30 - 20:30</p>
                                                    <p class="schedule-activity">Концерт на Кристина Димитрова и Искрен Пецов</p>
                                                </li>
                                                <li class="list-group-item">
                                                    <p class="schedule-time">20:30 - 22:00</p>
                                                    <p class="schedule-activity">Концерт на Йордан Николов с "Пиринско тройче" и ансамбъл "Гайтан" от с. Първомай</p>
                                                </li>
                                                <li class="list-group-item">
                                                    <p class="schedule-time">22:00</p>
                                                    <p class="schedule-activity">Празнична заря</p>
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="zone3-2" role="tabpanel" aria-labelledby="zone-3-tab-3">
                                        <h3 class="pt-3">Зона 3</h3>
                                        <p class="pt-3">
                                            В центъра на село Долна Малина (Народно читалище „Васил Левски - 1943”) ще се проведе
                                            турнир по плажен волейбол.
                                            <br><br>
                                            Подробна информация за програмата очаквайте скоро.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="zone4-2" role="tabpanel" aria-labelledby="zone-4-tab-2">
                                        <h3 class="pt-3">Зона 4</h3>
                                        <p class="pt-3">
                                            В Ритуалнaта зала на Горна Малина ще се проведе:
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <p class="schedule-time">10:00 - 10:30</p>
                                                    <p class="schedule-activity">Официално откриване на изложба на Сдружение на творците с увреждания <br><i>* фотографиите ще са изложени през целия уикенд</i></p>
                                                </li>
                                                <li class="list-group-item">
                                                    <p class="schedule-time">12:00 - 13:30</p>
                                                    <p class="schedule-activity">Лекция по роботика и демонстрация с PARA</p>
                                                </li>
                                                <li class="list-group-item">
                                                    <p class="schedule-time">Целодневно</p>
                                                    <p class="schedule-activity">Е-спортове и виртуална реалност</p>
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div class="tab-pane fade show active" id="zone5-2" role="tabpanel" aria-labelledby="zone-5-tab-2">
                                        <h3 class="pt-3">Зона 5</h3>
                                        <p class="pt-3">
                                            В тази зона се намират къмпингът и главната музикална сцена, където ще се проведат музикалните състезания, отворената сцена за танцьори и музиканти,
                                            филмовите прожекции, концертите и DJ партитата, а през целия ден ще има разнообразни работилници, храни и напитки.
                                        </p>
                                        <ul class="nav nav-pills nav-pills-horizontal">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="scene-2" data-toggle="tab" href="#scene-tab-2" role="tab" aria-controls="scene-tab-2" aria-selected="true">Главна сцена<span>(по часове)</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="art-2" data-toggle="tab" href="#art-tab-2" role="tab" aria-controls="art-tab-2" aria-selected="true">Работилници<span>(целодневно)</span></a>
                                            </li>
                                        </ul>
                                        <div class="tab-content tab-content-horizontal" id="third-level">
                                            <div class="tab-pane fade show active" id="scene-tab-2" role="tabpanel" aria-labelledby="scene-2">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">08:00 - 10:00</p>
                                                        <p class="schedule-activity">Йога</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">10:00 - 11:00</p>
                                                        <p class="schedule-activity">Айкидо</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">11:30 - 13:30</p>
                                                        <p class="schedule-activity">Саундчек на участниците в музикалния конкурс Dolna Malina Open Fest 2022</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">14:00 - 21:00</p>
                                                        <p class="schedule-activity">Конкурсна част Dolna Malina Open Fest 2022</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">21:00 - 22:30</p>
                                                        <a class="modal-link" data-toggle="modal" data-target="#pom">
                                                            People of Maha
                                                        </a>

                                                        <div class="modal info-modal fade" id="pom" tabindex="-1" role="dialog" aria-labelledby="pomLabel" aria-hidden="true">
                                                          <div class="modal-dialog modal-dialog-centered" role="document">
                                                            <div class="modal-content">
                                                              <div class="modal-header">
                                                                <h5 class="modal-title" id="pomLabel">People of Maha</h5>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                </button>
                                                              </div>
                                                              <div class="modal-body">
                                                                <img class="img-fluid mb-3" src="assets/images/artists/people-of-maha.jpg" alt="People of Maha image" />
                                                                  People of Maha са единствената изцяло женска банда на нашата алтърнатив сцена. Триото им се състои от Биа (вокал), Мила (китара) и Алекс (барабани). Биа, която няма как да видите в обувки на сцената, защото винаги подскача боса, носи гореща кръв и е от Бразилия. People of Maha е сформирана през 2018 година. Дебютният албум на момичетата се казва Blue to gold, а в момента бандата готви втория си албум!
                                                              </div>
                                                              <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">22:30 - 23:30</p>
                                                        <p class="schedule-activity">Кино прожекции</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">23:30 - 01:30</p>
                                                        <a class="modal-link" data-toggle="modal" data-target="#dj89">
                                                            DJ 89
                                                        </a>

                                                        <div class="modal info-modal fade" id="dj89" tabindex="-1" role="dialog" aria-labelledby="dj89Label" aria-hidden="true">
                                                          <div class="modal-dialog modal-dialog-centered" role="document">
                                                            <div class="modal-content">
                                                              <div class="modal-header">
                                                                <h5 class="modal-title" id="dj89Label">DJ 89</h5>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                </button>
                                                              </div>
                                                              <div class="modal-body">
                                                                <img class="img-fluid mb-3" src="assets/images/artists/dj89.jpg" alt="People of Maha image" />
                                                                  DJ 89 е псевдоним на Ангел Петков, по-малкият брат от електронното дуо BRATЯТА, което създават с Иван Петков. Двамата тръгват по стъпките на българската фолклорна музика и достигат до прозрението, че тя трябва да бъде пренесена в новото хилядолетие. Към дуото се присъединяват и Бисера и Лидия, които изпълняват фолклорни песни в шопски двуглас. Двете печелят множество призови награди в национални и международни конкурси.
                                                              <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">01:30 - 03:00</p>
                                                        <p class="schedule-activity">Electriss <br>
                                                            Arkana <br>
                                                            Syderal</p>
                                                    </li>
                                                </ul>

                                                <small>* Това е предварителна програма. Организаторът си запазва правото за допълнителни промени по нея.</small>
                                            </div>
                                            <div class="tab-pane fade" id="art-tab-2" role="tabpanel" aria-labelledby="art-2">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Смехойога със СмехотвореНИЕ сме НИЕ</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Бордни игри</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Работилница за кукли със Златин Кармашиков</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Рисуване с къна</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Арт релакс работилница</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Арт терапия</p>
                                                    </li>
                                                </ul>

                                                <small>* Това е предварителна програма. Организаторът си запазва правото за допълнителни промени по нея.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="zone7-2" role="tabpanel" aria-labelledby="zone-7-tab-2">
                                        <h3 class="pt-3">Зона 7</h3>
                                        <p class="pt-3">
                                            В рамките на фестивала в село Байлово ще се проведе литературно четене на
                                            селектирани разкази от творчеството на Елин Пелин.
                                        </p>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">
                                                <p class="schedule-time">11:00 - 12:00</p>
                                                <p class="schedule-activity">Литературно четене на селектирани разкази</p>
                                            </li>
                                            <li class="list-group-item">
                                                <p class="schedule-time">12:00 - 13:00</p>
                                                <p class="schedule-activity">
                                                    Туристически преход “По стъпките на Елин Пелин”
                                                    по новоизградената екопътека Байлово - Андрешково езеро, където писателят пише творбата “Андрешко”.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div class="schedule-date-nav">


                                <div id="accordion" class="d-sm-block d-md-none mt-5">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="doma-subtitle-ff">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#day3" aria-expanded="false" aria-controls="day3">
                                                    Всички зони
                                                </button>
                                            </h2>
                                        </div>

                                        <div id="day3" class="collapse" aria-labelledby="headingOne">
                                            <div class="card-body">
                                                <ul class="nav nav-pills nav-fill flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="zone-1-tab-3" data-toggle="tab" href="#zone1-3" role="tab" aria-controls="zone1-3" aria-selected="true">Зона 1<span>Танц, фолклор</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="zone-3-tab-3" data-toggle="tab" href="#zone3-3" role="tab" aria-controls="zone3-3" aria-selected="true">Зона 3<span>Спорт, театър</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="zone-4-tab-3" data-toggle="tab" href="#zone4-3" role="tab" aria-controls="zone4-3" aria-selected="true">Зона 4<span>Театър</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link active" id="zone-5-tab-3" data-toggle="tab" href="#zone5-3" role="tab" aria-controls="zone5-3" aria-selected="true">Зона 5<span>Главна сцена</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="zone-7-tab-3" data-toggle="tab" href="#zone7-3" role="tab" aria-controls="zone7-3" aria-selected="true">Зона 7<span>Литературно четене</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <ul class="nav nav-pills nav-fill flex-column nav-hidden-sm">
                                    <li class="nav-item">
                                        <a class="nav-link" id="zone-1-tab-3" data-toggle="tab" href="#zone1-3" role="tab" aria-controls="zone1-3" aria-selected="true">Зона 1<span>Танц, фолклор</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="zone-3-tab-3" data-toggle="tab" href="#zone3-3" role="tab" aria-controls="zone3-3" aria-selected="true">Зона 3<span>Спорт, театър</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="zone-4-tab-3" data-toggle="tab" href="#zone4-3" role="tab" aria-controls="zone4-3" aria-selected="true">Зона 4<span>Театър</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" id="zone-5-tab-3" data-toggle="tab" href="#zone5-3" role="tab" aria-controls="zone5-3" aria-selected="true">Зона 5<span>Главна сцена</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="zone-7-tab-3" data-toggle="tab" href="#zone7-3" role="tab" aria-controls="zone7-3" aria-selected="true">Зона 7<span>Литературно четене</span></a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade" id="zone1-3" role="tabpanel" aria-labelledby="zone-1-tab-3">
                                        <h3 class="pt-3">Зона 1</h3>
                                        <p class="pt-3">
                                            Aко искате да се насладите на танцови и фолклорни изпълнения - центърът на село Горна Малина е вашето място.
                                            <br>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <p class="schedule-time">18:00 - 18:20</p>
                                                    <p class="schedule-activity">Официално закриване</p>
                                                </li>
                                                <li class="list-group-item">
                                                    <p class="schedule-time">20:00</p>
                                                    <p class="schedule-activity">Народно веселие</p>
                                                </li>
                                                <li class="list-group-item">
                                                    <p class="schedule-time">21:00</p>
                                                    <p class="schedule-activity">Заря</p>
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="zone3-3" role="tabpanel" aria-labelledby="zone-3-tab-3">
                                        <h3 class="pt-3">Зона 3</h3>
                                        <p class="pt-3">
                                            В центъра на село Долна Малина (Народно читалище „Васил Левски - 1943”) ще се проведе
                                            турнир по плажен волейбол.
                                            <br><br>
                                            Подробна информация за програмата очаквайте скоро.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="zone4-3" role="tabpanel" aria-labelledby="zone-4-tab-3">
                                        <h3 class="pt-3">Зона 4</h3>
                                        <p class="pt-3">
                                            В Народно читалище “Васил Левски - 1929”, село Горна Малина в рамките на фестивала ще се проведат
                                            серия от театрални постановки.
                                            <br>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <p class="schedule-time">16:00 - 17:00</p>
                                                    <p class="schedule-activity">Късометражно кино</p>
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div class="tab-pane fade show active" id="zone5-3" role="tabpanel" aria-labelledby="zone-5-tab-3">
                                        <h3 class="pt-3">Зона 5</h3>
                                        <p class="pt-3">
                                            В тази зона се намират къмпингът и главната музикална сцена, където ще се проведат музикалните състезания, отворената сцена за танцьори и музиканти,
                                            филмовите прожекции, концертите и DJ партитата, а през целия ден ще има разнообразни работилници, храни и напитки.
                                        </p>
                                        <ul class="nav nav-pills nav-pills-horizontal">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="scene-3" data-toggle="tab" href="#scene-tab-3" role="tab" aria-controls="scene-tab-3" aria-selected="true">Главна сцена<span>(по часове)</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="art-3" data-toggle="tab" href="#art-tab-3" role="tab" aria-controls="art-tab-3" aria-selected="true">Работилници<span>(целодневно)</span></a>
                                            </li>
                                        </ul>
                                        <div class="tab-content tab-content-horizontal" id="third-level">
                                            <div class="tab-pane fade show active" id="scene-tab-3" role="tabpanel" aria-labelledby="scene-3">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">09:00 - 10:00</p>
                                                        <p class="schedule-activity">Йога</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">10:00 - 11:00</p>
                                                        <p class="schedule-activity">Табата</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">11:00 - 12:00</p>
                                                        <p class="schedule-activity">Аеробика</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">12:00 - 16:00</p>
                                                        <p class="schedule-activity">Оpen stage във всички сфери</p>
                                                    </li>
                                                </ul>

                                                <small>* Това е предварителна програма. Организаторът си запазва правото за допълнителни промени по нея.</small>
                                            </div>
                                            <div class="tab-pane fade" id="art-tab-3" role="tabpanel" aria-labelledby="art-3">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Смехойога със СмехотвореНИЕ сме НИЕ</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Бордни игри</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Арт релакс работилница</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Арт терапия</p>
                                                    </li>
                                                </ul>

                                                <small>* Това е предварителна програма. Организаторът си запазва правото за допълнителни промени по нея.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="zone7-3" role="tabpanel" aria-labelledby="zone-7-tab-3">
                                        <h3 class="pt-3">Зона 7</h3>
                                        <p class="pt-3">
                                            В рамките на фестивала в село Байлово ще се проведе литературно четене на
                                            селектирани разкази от творчеството на Елин Пелин.
                                        </p>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">
                                                <p class="schedule-time">11:00 - 12:00</p>
                                                <p class="schedule-activity">Литературно четене на селектирани разкази</p>
                                            </li>
                                            <li class="list-group-item">
                                                <p class="schedule-time">12:00 - 13:00</p>
                                                <p class="schedule-activity">
                                                    Туристически преход “По стъпките на Елин Пелин”
                                                    по новоизградената екопътека Байлово - Андрешково езеро.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="doma-zones doma-zones-2 mt-5 mt-md-5">
                        <div class="main-title mb-4 mb-lg-5">
                            <h1>Фестивални зони</h1>
                        </div>
                        <div class="doma-zones-container mt-3">
                            <div class="d-flex flex-row doma-zones-content">
                                <div class="doma-zone-half">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <p class="schedule-time">Зона 1</p>
                                            <p class="schedule-activity">Танц, фолклор</p>
                                        </li>
                                        <li class="list-group-item">
                                            <p class="schedule-time">Зона 3</p>
                                            <p class="schedule-activity">Спорт, театър</p>
                                        </li>
                                        <li class="list-group-item">
                                            <p class="schedule-time">Зона 4</p>
                                            <p class="schedule-activity">Театър</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="doma-zone-half">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <p class="schedule-time">Зона 5</p>
                                            <p class="schedule-activity">Главна сцена</p>
                                        </li>
                                        <li class="list-group-item">
                                            <p class="schedule-time">Зона 6</p>
                                            <p class="schedule-activity">Филмово студио БУФО</p>
                                        </li>
                                        <li class="list-group-item">
                                            <p class="schedule-time">Зона 7</p>
                                            <p class="schedule-activity">Литературно четене</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <img class="img-fluid" src="assets/images/zones.png" />
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
            viewFactor: 0.3
        });
    }
}

export default Schedule;
