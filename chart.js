document.addEventListener('DOMContentLoaded', function() {
    var bars = document.querySelectorAll('.bars li .bar');
    bars.forEach(function(bar) {
      var percentage = parseInt(bar.getAttribute('data-percentage'));
      var height = percentage + '%';
      var duration = 1000;
      
      bar.style.height = '0%';
      bar.style.transition = 'height ' + duration / 1000 + 's';
      
      setTimeout(function() {
        bar.style.height = height;
        bar.classList.add('hover_bar');
      }, 0);
    });
  });

  function reveal_bar(){
    var reveals_bar = document.querySelectorAll('.reveal_bar');
    //reveal 이라는 변수를 만들어서 찾게 함.

    //이것 길이보다 작으면
    for(var i = 0; i < reveals_bar.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals_bar[i].getBoundingClientRect().top;
        //유지보수를 위한 변수
        var revealpoint = 50;

        //인식하기 전에 클래스를 붙입니다.
        if(revealtop < windowheight - revealpoint){
            reveals_bar[i].classList.add('hover_bar');
        }else{
            reveals_bar[i].classList.remove('hover_bar');
        }
    }

}

//index안의 자바스크립트

    //javascript for the scroll indicator
    window.addEventListener("scroll", () => {
        const indicatorBar = document.querySelector(".scroll-indicator-bar");

        const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollValue = (pageScroll / height) * 100;

        indicatorBar.style.width = scrollValue + "%";
    });
//javascript for responsive menu
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () =>{
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
    })

//javascript for the slider navigation
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });
    

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
    }

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i);
        });
    });





// 섹션 박스 왔다갔다 움직임

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

checkBoxes();

function checkBoxes() {
console.log(window.innerHeight);
const triggerBottom= window.innerHeight/5*4;

boxes.forEach((box) => {
    const boxTop = window.pageYOffset + element.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
        box.classList.add('show');
    } else{
        box.classList.remove('show');
    }
})
}


//올라가는 애니메이션
window.addEventListener('scroll', reveal);


    function reveal(){
        var reveals =document.querySelectorAll('.reveal');
        //reveal 이라는 변수를 만들어서 찾게 함.

        for(var i = 0; i < reveals.length; i++){

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 50;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active_ani');
            }else{
                reveals[i].classList.remove('active_ani');
            }
        }

    }

//마우스로 움직이는 무브
//Movement Animation to happen
const card =document.querySelector('.card');
const container=document.querySelector('.container');

//Moving Animation event
container.addEventListener('mousemove',(e)=>{
// console.log(e.pageX,e.pageY)
let xAxis= (window.innerWidth/2-e.pageX)/-25;
let yAxis= (window.innerHeight/2-e.pageY)/20;
card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener()``
container.addEventListener('mouseenter',(e)=>{
card.style.transition="none";
});
//Animate Out
container.addEventListener('mouseleave',(e)=>{
card.style.transition="all 0.5s ease";
card.style.transform=`rotateY(0deg) rotateX(0deg)`;
});



//버튼 무빙 알고리즘

let section = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('header nav-bar  a');

        window.onscroll = ()=> {
            section.forEach(sec => {
                let Top =window.scrollY;
                let offSet=sec.offsetTop -300; //원하는 위치150
                let height = sec.offsetHeight;
                let id =sec.getAttribute('id'); //id는 section의 id 값이다.

                if(top >= offset && top < offset + height){
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav nav-bar a [href *=' + id + ']').classList.add('active');
                    });
                }
            })
        }





