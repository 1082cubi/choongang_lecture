let menu1, menu2, menu3, menu4;
let cont1, cont2, cont3, cont4;
window.onload = function () {
    // 각 변수에 태그 읽어들이기
    menu1 = document.querySelector(".menu1");
    menu2 = document.querySelector(".menu2");
    menu3 = document.querySelector(".menu3");
    menu4 = document.querySelector(".menu4");

    cont1 = document.querySelector(".cont1");
    cont2 = document.querySelector(".cont2");
    cont3 = document.querySelector(".cont3");
    cont4 = document.querySelector(".cont4");

    // 주 메뉴(봄 여름 가을 겨울 ) 클릭하면 해당 메뉴 배경색

    menu1.addEventListener("click", function () {
        menu1.style.backgroundColor = "skyblue";
        menu2.style.backgroundColor = "white";
        menu3.style.backgroundColor = "white";
        menu4.style.backgroundColor = "white";

        cont1.style.display = "block";
        cont2.style.display = "none";
        cont3.style.display = "none";
        cont4.style.display = "none";
    })

    menu2.addEventListener("click", function () {
        menu1.style.backgroundColor = "white";
        menu2.style.backgroundColor = "skyblue";
        menu3.style.backgroundColor = "white";
        menu4.style.backgroundColor = "white";

        cont2.style.display = "block";
        cont1.style.display = "none";
        cont3.style.display = "none";
        cont4.style.display = "none";
    })
    menu3.addEventListener("click", function(){
        menu1.style.backgroundColor = "white";
        menu2.style.backgroundColor = "white";
        menu3.style.backgroundColor = "skyblue";
        menu4.style.backgroundColor = "white";
    
        cont3.style.display = "block";
        cont4.style.display = "none";
        cont2.style.display = "none";
        cont1.style.display = "none";
    })


}
// 각 콘텐츠 안에 작은 그림을 읽어들이기
let cont1_box1, cont1_box2, cont1_box3, cont1_box4, cont1_box5;
cont1_box1 = document.querySelector(".comt1_box1")
cont1_box1 = document.querySelector(".comt1_box2")
cont1_box1 = document.querySelector(".comt1_box3")
cont1_box1 = document.querySelector(".comt1_box4")
cont1_box1 = document.querySelector(".comt1_box5")

// 큰 그림 ( pic1) 읽어들이기
let picl = document.querySelector(".pic1")

// 봄 콘텐츠 안에 작은 그림을 클릭하면 큰 그림 바꾸기
cont1_box1.addEventListener("click", function () {

})