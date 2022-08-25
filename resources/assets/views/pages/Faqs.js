import ScrollReveal from 'scrollreveal'

let Direction = {
    render: async () => {
        let view = /*html*/ `
        <div class="main-content mb-5">
            <div class="main-title mb-4 mb-lg-5"><h1>Често задавани въпроси</h1></div>

            <div class="doma-wrapper">
              <div class="row mt-sm-3 mb-3 centered-wrapper">
                <div class="col-xl-8 text-left order-2 order-xl-1 doma-location-content mt-5 mt-xl-0 p-0 p-md-3">
                <div id="accordion">
                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingOne">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#q1" aria-expanded="true" aria-controls="q1">
                                Има ли къде да спим, освен на палатки?
                            </button>
                        </h2>
                    </div>

                    <div id="q1" class="collapse show" aria-labelledby="headingOne">
                        <div class="card-body">
                            <p>
                                Да! В околността има доста къщи за гости и хотели - можете да потърсите в Елин Пелин, Горна Малина и Байлово.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingTwo">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#q2" aria-expanded="false" aria-controls="q2">
                                На фестивала могат ли да присъстват деца?
                            </button>
                        </h2>
                    </div>
                    <div id="q2" class="collapse" aria-labelledby="headingTwo">
                        <div class="card-body">
                            <p>
                                Да! Всички деца под 18 години получават безплатен билет за вход, но присъствието на придружител е задължително.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingThree">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#q3" aria-expanded="false" aria-controls="q3">
                                Как функционира фестивалната гривна?
                            </button>
                        </h2>
                    </div>
                    <div id="q3" class="collapse" aria-labelledby="headingThree">
                        <div class="card-body">
                            <p>
                                При първоначалното ви влизане в зоната на фестивала, срещу представяне и чекиране на билета на входа,
                                ще ви бъде поставена гривна, която занапред ще бъде вашето средство за достъп до зоната на фестивала.
                                Гривната има определен цвят, който отговаря на билета ви. До къмпинг зоната имат достъп единствено хора с
                                билет с нощувка.  Пазете гривната до края на фестивала! Гривната трябва да бъде на ръката ви до окончателното
                                напускане на фестивалната зона в последния ден от вашето посещение.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingFour">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#q4" aria-expanded="false" aria-controls="q4">
                                Какви материали ми е забранено да внасям?
                            </button>
                        </h2>
                    </div>
                    <div id="q4" class="collapse" aria-labelledby="headingFour">
                        <div class="card-body">
                            <p>
                                Забранява се внасянето на леснозапалими вещества, паленето на огън,
                                огнестрелни и хладни оръжия, фойерверки, фенери на желанията и генератори за електричество.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingFive">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#q5" aria-expanded="false" aria-controls="q5">
                                Мога ли да внасям храна на фестивала?
                            </button>
                        </h2>
                    </div>
                    <div id="q5" class="collapse" aria-labelledby="headingFive">
                        <div class="card-body">
                            <p>
                                Нашите партньори предоставят богат асортимент от храна, но вие имате пълна свобода да донесете каквото пожелаете.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingSix">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#q6" aria-expanded="false" aria-controls="q6">
                                Мога ли да взема домашния си любимец?
                            </button>
                        </h2>
                    </div>
                    <div id="q6" class="collapse" aria-labelledby="headingSix">
                        <div class="card-body">
                            <p>
                                Приветстваме домашни любимци! При влизането заявявате отговорността да държите кучето си на повод, а кучетата от агресивните породи с намордник.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingSeven">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#q7" aria-expanded="false" aria-controls="q7">
                                Има ли санитарен възел?
                            </button>
                        </h2>
                    </div>
                    <div id="q7" class="collapse" aria-labelledby="headingSeven">
                        <div class="card-body">
                            <p>
                                В зоната на фестивала има изградени тоалетни, разпределени в тоалетни блокове на различни места. Молим ви, използвате ги!
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingEight">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#q8" aria-expanded="false" aria-controls="q8">
                                Къде мога да намеря ръчно изработени изделия?
                            </button>
                        </h2>
                    </div>
                    <div id="q8" class="collapse" aria-labelledby="headingEight">
                        <div class="card-body">
                            <p>
                                Зона 1 предлага богат набор от ръчно изработени изделия. В зоната на фестивала ще бъдат разположени щандове за продажба
                                на богат избор от фестивални артикули. Не купувайте стоки от улични търговци извън фестивала. Тези продукти не са одобрени
                                от организаторите и възможността да попаднете на нискокачествени стоки е голяма.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingNine">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#q9" aria-expanded="false" aria-controls="q9">
                                Къде е най-близкият паркинг до Зона 5?
                            </button>
                        </h2>
                    </div>
                    <div id="q9" class="collapse" aria-labelledby="headingNine">
                        <div class="card-body">
                            <p>
                                Можете да паркирате непосредствено преди влизането в Зона 5, както и в село Долна Малина.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingTen">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#q10" aria-expanded="false" aria-controls="q10">
                                Как се осъществява плащането за билет?
                            </button>
                        </h2>
                    </div>
                    <div id="q10" class="collapse" aria-labelledby="headingTen">
                        <div class="card-body">
                            <p>
                                Плащането става онлайн на <a href="https://sabitie.bg/event/kontserti-i-muzika/Dolna-Malina-Open-Fest.1121" target="_blank">sabitie.bg</a>
                                или на входа на фестивала.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingEleven">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#q11" aria-expanded="false" aria-controls="q11">
                                Нужно ли е да си принтирам билета?
                            </button>
                        </h2>
                    </div>
                    <div id="q11" class="collapse" aria-labelledby="headingEleven">
                        <div class="card-body">
                            <p>
                                Не. Нашите доброволци ще могат да сканират кода на билета ви чрез приложение, така че не е нужно
                                да принтирате билета си. Нека да се опитаме да сме по-отговорни към природата и да не
                                изразходваме излишно хартия.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingTwelve">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#q12" aria-expanded="false" aria-controls="q12">
                                Има ли дрескод за Фестивала?
                            </button>
                        </h2>
                    </div>
                    <div id="q12" class="collapse" aria-labelledby="headingTwelve">
                        <div class="card-body">
                            <p>
                                Не, имате пълната свобода да се облечете както искате. Изненадайте ни!
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingThirteen">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#q13" aria-expanded="false" aria-controls="q13">
                                Как да процедирам при загубени вещи?
                            </button>
                        </h2>
                    </div>
                    <div id="q13" class="collapse" aria-labelledby="headingThirteen">
                        <div class="card-body">
                            <p>
                                Въпреки че организаторите не поемат отговорност за изгубени вещи, можете да проверите или обявите такива на инфоточката на входа.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card animated-row">
                    <div class="card-header card-header-generic" id="headingFourteen">
                        <h2 class="doma-subtitle-ff">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#q14" aria-expanded="false" aria-controls="q14">
                                Мога ли да получа парите си обратно, ако не успея да дойда на фестивала?
                            </button>
                        </h2>
                    </div>
                    <div id="q14" class="collapse" aria-labelledby="headingFourteen">
                        <div class="card-body">
                            <p>
                                За съжаление политиката на фестивала не ни позволява да връщаме пари за неприсъствие.
                            </p>
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
