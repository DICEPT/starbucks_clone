const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1)*.7, // 딜레이는 gsap 애니메이션 라이브러리에서 제공된 것 입니다. 해당 값을 실행하면 0.7 -> 1.4 -> 2.1 -> 2.7초 순으로 인덱스 숫자 1, 2, 3.. 순으로 0.7과 곱해져서 화면에 표시됩니다.
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', //슬라이드 수직 정렬한다.
    autoplay: true, //자동 슬라이드한다.
    loop: true //루프 반복한다.
});

// new Swiper(선택자, 옵션)
new Swiper('.promotion .swiper-container',{
    slidesPerView: 3, //슬라이드를 3개 보여준다.
    spaceBetween: 10, //사이 여백을 10px 준다.
    centeredSlides: true, //가운데 슬라이드부터 시작한다는 의미이다.
    loop: true, //루프 반복한다.
    autoplay: {
        delay: 5000
    },
});