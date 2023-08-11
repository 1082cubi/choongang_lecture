window.onload = function () {

}
let sw = 1;

$(function () {
    (".bar").on("click", function () {
        if (sw == 1) {
            $(".menu").stop().animate({ "left": "0" }, { duration:500, easing: "easeQutQuart" })
            $(this).html("<i class='fa-solid fa-fa-xmark></i>")
        }
        else{
            $(".menu").stop().animate({ "left": "110%" }, { duration:500, easing: "easeQutQuart" })
            $(this).html("<i class='fa-solid fa-fa-xmark></i>")
        }
    })
})