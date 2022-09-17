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
                            <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSdbOzP1l_6uFB48MNfgk20MV6K_mT8AE6LzQjkGKlwWgkEeQQ/viewform" target="_blank">Електронни спортове</a>
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
            <div class="doma-schedule-wrapper pb-3 pb-md-5 pt-5">
                <h2 class="category-title">Програма - Главна сцена 🎵🎨</h2>
                <p class="p-content mt-3 mb-5">
                    В тази зона се намират къмпингът и главната музикална сцена, където ще се проведат музикалните състезания, отворената сцена за танцьори и музиканти,
                    филмовите прожекции, концертите и DJ партитата, а през целия ден ще има работилници, храни и напитки.
                </p>
                <div class="doma-schedule-content-box">
                    <ul class="nav nav-tabs mt-4">
                      <li class="nav-item">
                        <a class="nav-link active" id="day1-tab" data-toggle="tab" href="#day1" role="tab" aria-controls="day1" aria-selected="true">26-ти август<span>(петък)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="day2-tab" data-toggle="tab" href="#day2" role="tab" aria-controls="day2" aria-selected="false">27-ми август<span>(събота)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="day3-tab" data-toggle="tab" href="#day3" role="tab" aria-controls="day3" aria-selected="false">28-ми август<span>(неделя)</span></a>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active" id="day1" role="tabpanel" aria-labelledby="day1-tab">
                        <div class="schedule-date-nav">
                          <ul class="nav nav-pills">
                            <li class="nav-item">
                              <a class="nav-link active" id="stage-tab" data-toggle="tab" href="#mainstage" role="tab" aria-controls="mainstage" aria-selected="true">Oсновна сцена<span>(по часове)</span></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" id="art-tab" data-toggle="tab" href="#artshops" role="tab" aria-controls="artshops" aria-selected="true">Работилници<span>(целодневно)</span></a>
                            </li>
                          </ul>
                          <div class="tab-content" id="myTabContent">
                              <div class="tab-pane fade show active" id="mainstage" role="tabpanel" aria-labelledby="stage-tab">
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
                              <div class="tab-pane fade" id="artshops" role="tabpanel" aria-labelledby="art-tab">
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
                      </div>
                      <div class="tab-pane fade" id="day2" role="tabpanel" aria-labelledby="day2-tab">
                      <div class="schedule-date-nav">
                        <ul class="nav nav-pills">
                          <li class="nav-item">
                            <a class="nav-link active" id="stage-tab-2" data-toggle="tab" href="#mainstage-2" role="tab" aria-controls="mainstage-2" aria-selected="true">Oсновна сцена<span>(по часове)</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="art-tab-2" data-toggle="tab" href="#artshops-2" role="tab" aria-controls="artshops-2" aria-selected="true">Работилници<span>(целодневно)</span></a>
                          </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="mainstage-2" role="tabpanel" aria-labelledby="stage-tab-2">
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
                                        <p class="schedule-time">23:00 - 01:30</p>

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
                            <div class="tab-pane fade" id="artshops-2" role="tabpanel" aria-labelledby="art-tab-2">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <p class="schedule-activity">Смехойога със СмехотвореНИЕ сме НИЕ</p>
                                    </li>
                                    <li class="list-group-item">
                                        <p class="schedule-activity">Бордни игри</p>
                                    </li>
                                    <li class="list-group-item">
                                        <p class="schedule-activity">Рисуване с къна</p>
                                    </li>
                                    <li class="list-group-item">
                                        <p class="schedule-activity">Работилница за кукли със Златин Кармашиков</p>
                                    </li>
                                    <li class="list-group-item">
                                        <p class="schedule-activity">Aрт релакс работилница</p>
                                    </li>
                                    <li class="list-group-item">
                                        <p class="schedule-activity">Арт терапия</p>
                                    </li>
                                </ul>

                                <small>* Това е предварителна програма. Организаторът си запазва правото за допълнителни промени по нея.</small>
                            </div>
                        </div>
                      </div>
                      </div>
                      <div class="tab-pane fade" id="day3" role="tabpanel" aria-labelledby="day3-tab">
                      <div class="schedule-date-nav">
                        <ul class="nav nav-pills">
                          <li class="nav-item">
                            <a class="nav-link active" id="stage-tab-3" data-toggle="tab" href="#mainstage-3" role="tab" aria-controls="mainstage-3" aria-selected="true">Oсновна сцена<span>(по часове)</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="art-tab-3" data-toggle="tab" href="#artshops-3" role="tab" aria-controls="artshops-3" aria-selected="true">Работилници<span>(целодневно)</span></a>
                          </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="mainstage-3" role="tabpanel" aria-labelledby="stage-tab-3">
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
                            <div class="tab-pane fade" id="artshops-3" role="tabpanel" aria-labelledby="art-tab-3">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <p class="schedule-activity">Смехойога със СмехотвореНИЕ сме НИЕ</p>
                                    </li>
                                    <li class="list-group-item">
                                        <p class="schedule-activity">Бордни игри</p>
                                    </li>
                                    <li class="list-group-item">
                                        <p class="schedule-activity">Aрт релакс работилница</p>
                                    </li>
                                    <li class="list-group-item">
                                        <p class="schedule-activity">Арт терапия</p>
                                    </li>
                                </ul>

                                <small>* Това е предварителна програма. Организаторът си запазва правото за допълнителни промени по нея.</small>
                            </div>
                        </div>
                      </div>
                      </div>
                    </div>
                </div>
            </div>

            <div class="doma-zones mt-5 mb-5 px-3">
                <h2 class="category-title">И още музика:</h2>
                <p class="p-content mt-3 mb-5">
                    Бандите и изпълнителите, които ще имаме удоволствието да чуем на сцената между 26-ти и 28-ми август:
                </p>

                <div class="doma-zones-container mt-3">
                    <div class="d-flex flex-row doma-zones-content pb-3 pb-md-5">
                        <div class="doma-zone-half">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <p class="schedule-generic">Алек Кирев</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Мария Велкова</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Мръсна Приказка</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Vedders</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Time Jugglers</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Second to None</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Eudamonia</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Congail</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Илиян Стойчев</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Соня Станчева</p>
                                </li>
                            </ul>
                        </div>
                        <div class="doma-zone-half">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <p class="schedule-generic">VIMIKA</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Electric dragon</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Overhook</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Лютеница</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Константин Ковачев</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Sweet Poison</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Спектър</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Нерепетиралите</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Angel Child</p>
                                </li>
                                <li class="list-group-item">
                                    <p class="schedule-generic">Da Seed</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>



            <div class="doma-zones doma-zones-bg pt-5 mb-5">
                <h2 class="category-title">Повече за фестивалните зони</h2>
                <div class="doma-zones-container mt-3 px-3">
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

                <img class="img-fluid py-5" src="assets/images/zones.png" />
            </div>
            <div class="partners-wrapper">
                <h2 class="category-title">Партньори</h2>
                <div class="d-flex flex-wrap animated-row partners-logos">
                    <img class="img-fluid" src="assets/images/partners/logo-gorna-malina.png" alt="Gorna Malina logo" />
                    <img class="img-fluid" src="assets/images/partners/logo-dolna-malina.png" alt="Dolna Malina logo" />
                    <img class="img-fluid" src="assets/images/partners/logo-kinematograf.png" alt="Kinematograf logo" />
                    <img class="img-fluid" src="assets/images/partners/logo-para.png" alt="Professional association of robotics and automation logo" />
                    <img class="img-fluid" src="assets/images/partners/logo-ufo.png" alt="Film and television studio Ufo logo" />
                    <img class="img-fluid" src="assets/images/partners/logo-badrock.png" alt="The new bulgarian rock radio logo" />
                    <img class="img-fluid" src="assets/images/partners/logo-bgfi.png" alt="Bulgarian film institute logo" />
                    <img class="img-fluid" src="assets/images/partners/logo-e-sports-federation.png" alt="Bulgarian e-sports federation logo" />
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
        ScrollReveal().reveal('.partners-logos img-fluid', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.3
        });
    }
}

export default About;
