let Footer = {
    render: async () => {
        let view =  /*html*/`
        <div class="container footer-hashtag text-center">
            <div class="row">
                <div class="col-sm">
                    <div>
                        <p>ЗА ДА СЛЕДИТЕ ВСИЧКО АКТУАЛНО:</p>
                        <p>#DOMAFEST2022</p>
                    </div>
                </div>
            </div>
        </div>
        <footer class="text-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="col order-md-1">
                      <p>Последвайте ни:</p>
                      <a class="social-links" href="https://www.instagram.com/doma_fest/" target="_blank">
                        <i class="fab fa-instagram social-icons__inst" aria-hidden="true"></i>
                      </a><a class="social-links" href="https://www.facebook.com/domafest" target="_blank">
                        <i class="fab fa-facebook social-icons__inst" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div class="col order-md-3">
                      <p>Връзка с нас:</p>
                      <a class="email-link" href="mailto:contact@doma-fest.com">contact@doma-fest.com</a>
                    </div>
                    <div class="col-md order-md-2 footer-logo">
                      <img src="assets/images/doma-logo-handwritten-font.svg" />
                      <div class="organisers mt-4">
                        <p>Организатори:</p>
                        <a href="https://kmedia.digital/" target="_blank">
                            <img class="img-fluid" src="assets/images/partners/logo-kmedia.png" alt="KMedia logo" />
                        </a>
                        <a href="https://www.facebook.com/MustArtMusic" target="_blank">
                            <img class="img-fluid" src="assets/images/partners/logo-mustart.png" alt="MustArt logo" />
                        </a>
                      </div>
                      <div class="copyright__box">
                          <p>DoMa Fest <span id="year"></span></p>
                          <p>© All rights reserved.</p>
                      </div>
                    </div>
                </div>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => {
        // Get current year and add it in the footer
        const currentYear = new Date().getFullYear();
        document.getElementById('year').innerHTML = currentYear;
    }
}

export default Footer;
