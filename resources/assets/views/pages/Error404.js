let Error404 = {
    render : async () => {
        let view =  /*html*/`
        <div class="main-content mb-5 text-center py-5 px-2 px-md-5 mt-5 error-page">
            <div class="main-title mb-4 mb-lg-5">
                <h1>Нещо се обърка</h1>
            </div>
            <h4>
                Май попадна не където трябва.
            </h4>
            <br>

            <a href="/" type="button" class="btn btn-primary">Върни се обратно</a>

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
        </div>
        `
        return view
    }
}

export default Error404;
