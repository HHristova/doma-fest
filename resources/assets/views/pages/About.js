import ScrollReveal from 'scrollreveal'

let About = {
    render: async () => {
        let view = /*html*/ `
            <div class="main-header">
                <div class="hero-img hero-img--about">
                    <p class="hero-img__subtitle text-center">
                        <img src="assets/images/malina.svg" />
                    </p>
                    <div class="hero-accent hero-accent-blue mt-4">
                        <h1>
                            16 - 18 <span>юни</span> 2023
                        </h1>
                    </div>
                    <img class="hero-img-top" src="assets/images/hammock.png" />
                    <img class="hero-img-bottom-left" src="assets/images/tree.png" />
                    <img class="hero-img-bottom-right" src="assets/images/singer.png" />
                </div>
                <div class="scroll-down d-none d-sm-block">
                    <div class="arrow"></div>
                </div>
            </div>

            <div class="partners-wrapper mt-5">
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
