import archiveData from '../../scripts/archive.json';
import ScrollReveal from 'scrollreveal'

let Schedule = {
    render: async () => {
        let view = /*html*/ `
        <div class="main-content mb-5">
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
                                                        <a class="nav-link" id="zone-2-tab" data-toggle="tab" href="#zone2" role="tab" aria-controls="zone2" aria-selected="true">Зона 2<span>Спорт</span></a>
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
                                        <a class="nav-link" id="zone-2-tab" data-toggle="tab" href="#zone2" role="tab" aria-controls="zone2" aria-selected="true">Зона 2<span>Спорт</span></a>
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
                                    <div class="tab-pane fade" id="zone2" role="tabpanel" aria-labelledby="zone-2-tab">
                                        <h3 class="pt-3">Зона 2</h3>
                                        <p class="pt-3">
                                            В спортен комплекс „Арена Горна Малина” ще се проведат турнири по следните спортове:
                                        </p>
                                        <ul class="ul-standard">
                                            <li>
                                                Мини-футбол
                                            </li>
                                            <li>
                                                Бадминтон
                                            </li>
                                            <li>
                                                Eлектронни спортове
                                            </li>
                                        </ul>
                                        <p class="pt-3">Подробна информация за програмата очаквайте скоро.</p>
                                    </div>
                                    <div class="tab-pane fade" id="zone3" role="tabpanel" aria-labelledby="zone-3-tab">
                                        <h3 class="pt-3">Зона 3</h3>
                                        <p class="pt-3">
                                            В центъра на село Долна Малина (Народно читалище „Васил Левски - 1943”) ще се проведе
                                            турнир по плажен волейбол.
                                            <br><br>
                                            Подробна информация за програмата очаквайте скоро.
                                        </p>
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
                                            филмовите прожекции, концертите и DJ партитата, а през целия ден ще има работилници, храни и напитки.
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
                                                        <p class="schedule-activity">Cool Den</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">21:45 - 22:45</p>
                                                        <p class="schedule-activity">Кино прожекции</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">22:45 - 23:00</p>
                                                        <p class="schedule-activity">Oгнено шоу</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">23:00 - До зори</p>
                                                        <p class="schedule-activity">DJ Martin Nox</p>
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
                                                        <p class="schedule-activity">Работилница за кукли със Златин Кармашиков</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Работилница за модели на автобуси Чавдар с Дариан Георгиев</p>
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
                                            <br><br>
                                            Подробна информация очаквайте скоро.
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
                                                        <a class="nav-link" id="zone-2-tab-2" data-toggle="tab" href="#zone2-2" role="tab" aria-controls="zone2-2" aria-selected="true">Зона 2<span>Спорт</span></a>
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
                                                        <a class="nav-link" id="zone-6-tab-2" data-toggle="tab" href="#zone6-2" role="tab" aria-controls="zone6-2" aria-selected="true">Зона 6<span>филмово студио БУФО</span></a>
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
                                        <a class="nav-link" id="zone-2-tab-2" data-toggle="tab" href="#zone2-2" role="tab" aria-controls="zone2-2" aria-selected="true">Зона 2<span>Спорт</span></a>
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
                                        <a class="nav-link" id="zone-6-tab-2" data-toggle="tab" href="#zone6-2" role="tab" aria-controls="zone6-2" aria-selected="true">Зона 6<span>филмово студио БУФО</span></a>
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
                                            <br><br>
                                            Подробна информация за програмата очаквайте скоро.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="zone2-2" role="tabpanel" aria-labelledby="zone-2-tab-2">
                                        <h3 class="pt-3">Зона 2</h3>
                                        <p class="pt-3">
                                            В спортен комплекс „Арена Горна Малина” ще се проведат турнири по следните спортове:
                                        </p>
                                        <ul class="ul-standard">
                                            <li>
                                                Мини-футбол
                                            </li>
                                            <li>
                                                Бадминтон
                                            </li>
                                            <li>
                                                Eлектронни спортове
                                            </li>
                                        </ul>
                                        <p class="pt-3">Подробна информация за програмата очаквайте скоро.</p>
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
                                            В Народно читалище “Васил Левски - 1929”, село Горна Малина в рамките на фестивала ще се проведат
                                            серия от театрални постановки.
                                            <br><br>
                                            Подробна информация за програмата очаквайте скоро.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade show active" id="zone5-2" role="tabpanel" aria-labelledby="zone-5-tab-2">
                                        <h3 class="pt-3">Зона 5</h3>
                                        <p class="pt-3">
                                            В тази зона се намират къмпингът и главната музикална сцена, където ще се проведат музикалните състезания, отворената сцена за танцьори и музиканти,
                                            филмовите прожекции, концертите и DJ партитата, а през целия ден ще има работилници, храни и напитки.
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
                                                        <p class="schedule-activity">People of Maha</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">22:30 - 23:30</p>
                                                        <p class="schedule-activity">Кино прожекции</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">23:00 - До зори</p>
                                                        <p class="schedule-activity">DJ 89</p>
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
                                                        <p class="schedule-activity">Работилница за кукли със Златин Кармашиков</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Работилница за модели на автобуси Чавдар с Дариан Георгиев</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Арт терапия</p>
                                                    </li>
                                                </ul>

                                                <small>* Това е предварителна програма. Организаторът си запазва правото за допълнителни промени по нея.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="zone6-2" role="tabpanel" aria-labelledby="zone-6-tab-2">
                                        <h3 class="pt-3">Зона 6</h3>
                                        <p class="pt-3">
                                            В рамките на фестивала, всеки посетител ще може да се докосне до магията на киното, като се разходи из
                                            декорите на кино студия БУФО и се преобрази в костюм на любим герой!
                                            <br><br>
                                            Подробна информация очаквайте скоро.
                                        </p>
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
                                                        <a class="nav-link" id="zone-2-tab-3" data-toggle="tab" href="#zone2-3" role="tab" aria-controls="zone2-3" aria-selected="true">Зона 2<span>Спорт</span></a>
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
                                                        <a class="nav-link" id="zone-6-tab-3" data-toggle="tab" href="#zone6-3" role="tab" aria-controls="zone6-3" aria-selected="true">Зона 6<span>филмово студио БУФО</span></a>
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
                                        <a class="nav-link" id="zone-2-tab-3" data-toggle="tab" href="#zone2-3" role="tab" aria-controls="zone2-3" aria-selected="true">Зона 2<span>Спорт</span></a>
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
                                        <a class="nav-link" id="zone-6-tab-3" data-toggle="tab" href="#zone6-3" role="tab" aria-controls="zone6-3" aria-selected="true">Зона 6<span>филмово студио БУФО</span></a>
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
                                            <br><br>
                                            Подробна информация за програмата очаквайте скоро.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="zone2-3" role="tabpanel" aria-labelledby="zone-2-tab-3">
                                        <h3 class="pt-3">Зона 2</h3>
                                        <p class="pt-3">
                                            В спортен комплекс „Арена Горна Малина” ще се проведат турнири по следните спортове:
                                        </p>
                                        <ul class="ul-standard">
                                            <li>
                                                Мини-футбол
                                            </li>
                                            <li>
                                                Бадминтон
                                            </li>
                                            <li>
                                                Eлектронни спортове
                                            </li>
                                        </ul>
                                        <p class="pt-3">Подробна информация за програмата очаквайте скоро.</p>
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
                                            <br><br>
                                            Подробна информация за програмата очаквайте скоро.
                                        </p>
                                    </div>
                                    <div class="tab-pane fade show active" id="zone5-3" role="tabpanel" aria-labelledby="zone-5-tab-3">
                                        <h3 class="pt-3">Зона 5</h3>
                                        <p class="pt-3">
                                            В тази зона се намират къмпингът и главната музикална сцена, където ще се проведат музикалните състезания, отворената сцена за танцьори и музиканти,
                                            филмовите прожекции, концертите и DJ партитата, а през целия ден ще има работилници, храни и напитки.
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
                                                        <p class="schedule-time">11:00 - 13:00</p>
                                                        <p class="schedule-activity">Дискусия на експерти, относно заснетите филми по време на фестивала</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-time">13:00 - 16:00</p>
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
                                                        <p class="schedule-activity">Работилница за кукли със Златин Кармашиков</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Работилница за модели на автобуси Чавдар с Дариан Георгиев</p>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <p class="schedule-activity">Арт терапия</p>
                                                    </li>
                                                </ul>

                                                <small>* Това е предварителна програма. Организаторът си запазва правото за допълнителни промени по нея.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="zone6-3" role="tabpanel" aria-labelledby="zone-6-tab-3">
                                        <h3 class="pt-3">Зона 6</h3>
                                        <p class="pt-3">
                                            В рамките на фестивала, всеки посетител ще може да се докосне до магията на киното, като се разходи из
                                            декорите на кино студия БУФО и се преобрази в костюм на любим герой!
                                            <br><br>
                                            Подробна информация очаквайте скоро.
                                        </p>
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
                                                    по новоизградената екопътека Байлово - Андрешково езеро, където писателят пише творбата “Андрешко”.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
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
        ScrollReveal().reveal('.animated-row', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.3
        });
    }
}

export default Schedule;
