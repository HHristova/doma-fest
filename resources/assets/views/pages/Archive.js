import archiveData from '../../scripts/archive.json';
import ScrollReveal from 'scrollreveal'

let Archive = {
    render: async () => {
        let startPage = /*html*/ `
        <div class="main-content mb-5">
            <div class="main-title mb-4 mb-lg-5">Архив</div>

            <div class="container">
                    <div class="section__container text-center">
                        <div class="masonry">`

        let projects = '';

        for (var i = 0; i < archiveData.length; i++) {
            projects += `
                <figure id="picture-item"
                    class="picture-item show">
                    <div class="picture-item__inner">
                        <div class="js-button--archive box-thumb"
                            data-toggle="modal" data-target="#modalPicture"
                            value="Expand photo" role="button" style="background-image:url('${archiveData[i].url}')">
                            <img src="${archiveData[i].thumb}" data-img="${archiveData[i].url}" />
                        </div>
                    </div>
                </figure>
            `;
        }

        let endPage = /*html*/ `
                    <div id="modalPicture" class="modal fade pr-0" tabindex="-1"
                        role="dialog" aria-labelledby="modalPictureLabel" aria-hidden="true">
                      <div class="modal-dialog m-0" role="document">
                        <div class="modal-content mt-5">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <img class="close__icon"
                                src="assets/images/close-icon.svg" alt="Close icon">
                              <span class="sr-only">Close</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <div class="position-relative">
                                <img class="js-modal-image" src="" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
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
                <a class="dropdown-item" href="https://forms.gle/JzS22BDe2fZ2MhTs7" target="_blank">Фолклор</a>
                <a class="dropdown-item" href="https://forms.gle/xm6uN7zLeaRwczcr6" target="_blank">Танцово изкуство</a>
                <a class="dropdown-item" href="https://forms.gle/PKnbgAqCSXetHGVXA" target="_blank">Детски състави</a>
                <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSdAMRyy19KKnWV0EzQ_MgVAi51ZCBDtKhR2bDa233U9U-3abQ/viewform" target="_blank">Фотография</a>
              </div>
            </div>
        </div>
        </div>
        `
        return startPage + projects + endPage
    },
    after_render: async () => {
        // ScrollReveal animations
        ScrollReveal().reveal('.section__container p, .section__container__title', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.3
        });

        // Illustrations gallery handler
        $(document).on('click', '.js-button--archive', function() {
            var imageAlt = $(this).parents('.picture-item__inner').find('img').attr('alt');
            var imageSrc = $(this).parents('.picture-item__inner').find('img').attr('data-img');
            $('.js-modal-image').attr('src', imageSrc);
            $('.js-modal-image').attr('alt', imageAlt);
            $('.js-modal-content').text(imageAlt);
        });
    }
}

export default Archive;
