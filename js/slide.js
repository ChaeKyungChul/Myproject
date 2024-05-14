window.onload = function(){
    let currentIndex = 1;
    const sliderWrap = document.querySelector(".sliderWrap")
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        
        currentIndex++;
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";
        sliderWrap.style.transition = "all 1.3s"

        if(currentIndex == 4){
            setTimeout(() => {
                sliderWrap.style.transition = "0s"
                sliderWrap.style.marginLeft = "0"
                currentIndex = 0;
            }, 1500);
        };
    }, 5000);
};


// const sliderWrap = document.querySelector(".slider__wrap");
// const sliderImg = document.querySelector(".slider__img");       // 보여지는 영역
// const sliderInner = document.querySelector(".slider__inner");   // 움직이는 영역
// const slider = document.querySelectorAll(".slider");            // 각각의 이미지

// let currentIndex = 0;                                               // 현재 보이는 이미지
// let sliderCount = slider.length;                                    // 이미지 갯수
// let sliderWidth = sliderImg.offsetWidth;                            // 이미지 가로값
// let sliderClone = sliderInner.firstElementChild.cloneNode(true);    // 첫번째 이미지 복사
// sliderInner.appendChild(sliderClone);                               // 첫번째 이미지를 마지막에 넣어줌

// function sliderEffect() {
//     currentIndex++;
//     sliderInner.style.transition = "all 0.6s";

//     sliderInner.style.transform = "translateX(-"+ sliderWidth * currentIndex +"px)";

//     // sliderInner.style.transform = "translateX(-600px)";      600*1
//     // sliderInner.style.transform = "translateX(-1200px)";     600*2
//     // sliderInner.style.transform = "translateX(-1800px)";     600*3
//     // sliderInner.style.transform = "translateX(-2400px)";     600*4
//     // sliderInner.style.transform = "translateX(-3000px)";     600*5
//     // sliderInner.style.transform = "translateX(-3600px)";     600*1

//     // 마지막 사진에 위치했을 때 
//     if(currentIndex == sliderCount){
//         setTimeout(()=>{
//             sliderInner.style.transition = "0s";
//             sliderInner.style.transform = "translateX(0px)";
//         }, 700);
        
//         currentIndex = 0;
//     }


// }
// setInterval(sliderEffect, 2000);