const imgA = [

    "big0.jpg", "big1.jpg", "big2.jpg",
    "big3.jpg", "big4.jpg", "big5.jpg",
];
const bigA = [

    "big0.jpg", "big1.jpg", "big2.jpg", "big3.jpg",
];
const msgA = [
    "상영중인 | 개봉예정작",
    "강남 | 송파 | 마포 | 구리 | 인천 | 부산",
    "예매 가능 프로 안내",
    "스토어 중 선택하세요",
    "무료 시사회 당첨 안내",
    "사은품 지정 안내해 드립니다",
]
let timer = setInterval("show()", 3000);
let cnt = 0;
function show() {
    if (cnt < 4)
        cnt++;
    else
        cnt = 1;

    $(".num").html(cnt);
    $(".big div").hide()
    $(".big" + cnt).fadeIn();


    $(".opt li").css("background", "white").css("color", "red");
    $(".opt" + cnt).css("background", "red").css("color", "white");

};
window.onload = function () {

    $(".opt4").css("background", "red").css("color", "white")

    $(".num").html(cnt);
    $(".big div").hide();
    $(".big4").show();
    for (i = 0; i < bigA.length; i++)
        $(".big" + (i + 1)).css("background", "url(img/" + bigA[i] + ")")
            .css("backgroundSize", "100% 100%");

    for (i = 0; i < imgA.length; i++) {
        $(".img" + i).css("background", "url(img/" + imgA[i] + ")")
            .css("backgroundSize", "100% 100%")
    }

}
$(function () {





    $("nav div").on("click", function () {
        let imsi;
        imsi = $(this).index();
        $("#title").html(msgA[imsi]);
        $("nav div").css("background", "white").css("color", "black")
        $(this).css("background", "black").css("color", "white")
    })




    let count = 0;
    $(".img").hide();
    $(".img0").show();

    $("#left").on("click", function () {
        if (count >= 1)
            count--;
        $("#no").html((count + 1) + " / 6");
        $(".img").hide();
        $(".img" + count).show();
    })
    $("#right").on("click", function () {
        if (count < 5)
            count++;
        $("#no").html((count + 1) + " / 6");
        $(".img").hide();
        $(".img" + count).show();

    })

})