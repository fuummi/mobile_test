export default (function () {
  return `
        <link rel="stylesheet" href="../js/swiper8/swiper-bundle.css">
        <link rel="stylesheet" href="../css/mainPage.css">
            <nav>
                <a href="#/HrInterview">
                    <img src="./icons/icon1.png" alt="">
                    <p>HR面试</p>
                </a>
                <a href="#/PaperTest">
                    <img src="./icons/icon2.png" alt="">
                    <p>笔试</p>
                </a>
                <a href="#/TecInterview">
                    <img src="./icons/icon3.png" alt="">
                    <p>技术面试</p>
                </a>
                <a href="#/SimulateInterview">
                    <img src="./icons/icon4.png" alt="">
                    <p>模拟面试</p>
                </a>
                <a href="#/InterviewSkill">
                    <img src="./icons/icon5.png" alt="">
                    <p>面试技巧</p>
                </a>
                <a href="#/PayCheck">
                    <img src="./icons/icon6.png" alt="">
                    <p>薪资查询</p>
                </a>
            </nav>
            <div class="go">
                <img src="./images/go.png" alt="">
            </div>
            <div class="content study">
                <div class="top">
                    <span class="left">
                        <img src="./icons/i2.png" alt="">
                        <span>就业指导</span>
                    </span>
                    <span class="right">
                        <a href="#">更多>></a>
                    </span>
                </div>
                <div class="teach">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="#">
                                <img src="./images/pic.png" alt="">
                                <p>专业老师教你面试技巧</p>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#">
                                <img src="./images/pic.png" alt="">
                                <p>专业老师教你面试技巧</p>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#">
                                <img src="./images/pic.png" alt="">
                                <p>专业老师教你面试技巧</p>
                            </a>
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
            <div class="content cm">
                <div class="top">
                    <span class="left">
                        <img src="./icons/i1.png" alt="">
                        <span>充电学习</span>
                    </span>
                    <span class="right">
                        <a href="#">更多>></a>
                    </span>
                </div>
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="#">
                                <img src="./images/pic1.png" alt="">
                                <p>说地道英语，告别中式英语</p>
                                <span class="fir">185</span><span class="sec">人想学</span>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#">
                                <img src="./images/pic2.png" alt="">
                                <p>思维攻略金字塔思维提升写作能力</p>
                                <span class="fir">185</span><span class="sec">人想学</span>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#">
                                <img src="./images/pic1.png" alt="">
                                <p>说地道英语，告别中式英语</p>
                                <span class="fir">185</span><span class="sec">人想学</span>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#">
                                <img src="./images/pic2.png" alt="">
                                <p>思维攻略金字塔思维提升写作能力</p>
                                <span class="fir">185</span><span class="sec">人想学</span>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#">
                                <img src="./images/pic1.png" alt="">
                                <p>说地道英语，告别中式英语</p>
                                <span class="fir">185</span><span class="sec">人想学</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <script src="../js/swiper8/swiper-bundle.min.js"></script>
            <script>
                (function () {
                    var swiper = new Swiper('.teach', {
                        slidesPerView: 2.5,
                        spaceBetween: 10,
                        centeredSlides: true,
                        loop: true,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                })()
            </script>
            <script>
                (function () {
                    var swiper = new Swiper(".mySwiper", {
                        slidesPerView: 2.2,
                        spaceBetween: 0,
                    });
                })()
            </script>
        `;
})();
