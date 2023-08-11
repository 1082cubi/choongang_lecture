
const imgA = ["big1.jpg", "big2.jpg", "big3.jpg", "big4.jpg",]


window.onload = function () {
    for (i = 0; i < imgA.length; i++) {
        $(".img4 li:eq(" + i + ")").css("background", "url(img/" + imgA[i] + ")")
            .css("backgroundSize", " 100% 100%")
    }

}

let timer=setInterval("show()", 3000);
let no=1, position;
function show() {
    if(no<4)
        no++;
    else
        no=1;
    $(".disp").html(no+" / 4");
    position = no*1000;
    $(".img4").animate({"left":"-=1000px"},500, function(){
        $(".img4 li:first").appendTo(".img4");
        $(".img4").css("left","+=1000px");
    })
       
    
}

$(function () {
    $(".img4 li").on("click", function(){
        no=$(this).attr("class");
        console.log(no);
    })

    // $(".img4 li").hover(function(){
    //     clearInterval( timer);
    // }, function(){
    //     timer=setInterval("show()", 3000);
    // })

    let count = 0, pos;
    $(".next").on("click", function () {
        if (count < 3)
            count++;
        pos = count * 1000;
        $(".img4").animate({ "left": "-" + pos + "px" }, 500);
        $(".disp").html((count+1) + "/ 4")
    })
    $(".prev").on("click", function () {
        if (count > 0)
            count--;
        pos = count * 1000;
        $(".img4").animate({ "left": "-" + pos + "px" }, 500);
        $(".disp").html((count+1) + "/ 4")
    })
})