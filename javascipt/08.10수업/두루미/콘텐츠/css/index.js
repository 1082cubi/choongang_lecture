const bar_0A=["대학소개","총장실","대학현황",]
const bar_1A=["경영대학원","프라임","온라인",]
const bar_2A=["학과대학원","학부","칼리지",]
const bar_3A=["대학소개","총장실","대학현황",]
const bar_4A=["대학소개","총장실","대학현황",]

window.onload = function () {
}
let sw = 1;
$(function () {
    $(".bar").on("click", function () {
        
        if (sw == 1) {
            sw = 0;
            $(".right_slide").animate({ "left": "15%" }, 500);
            $(".bar_menu").html("<i class='fa-solid fa-bars'></i>")
        }
        else {
            sw = 1;
        $(".right_slide").animate({ "left": "100%" }, 500);
        $(".bar_menu").html("<i class='fa-solid fa-xmark'></i>")
        }
    })
    $(".right_slide > li >p").on("click",function(){
        no=$(this).index();
        if(no == 0) 
            for(i=0; i<bar_1A.length; i++)
            $(".m"+i).html(bar_0A[i]);
        else if(no==1)
        for(i=0; i<bar_1A.length; i++)
            $(".m"+i).html(bar_1A[i]);
        else if(no==2)
        for(i=0; i<bar_2A.length; i++)
            $(".m"+i).html(bar_2A[i]);
        
    })


    $(".right_slide > li >p").on("click",function(){
        $(".right_slide").animate({ "left": "100%" }, 500);
        $(".bar_menu").html("<i class='fa-solid fa-xmark'></i>")
        sw=1;
        
    }) 
    $(".guide p").on("click", function () {
        let no = $(this).index();
        $(".at").hide();
        $(".at" + no).show();
    })
    $(".gong p").on("click", function () {
        let no = $(this).index();
        $(".at").hide();
        $(".at" + (4 + no)).show();
    })
    $(".at1 div img").css("width", "100%")
        .css("height", "100%");
    $(".at1 div img").css("borderRadius", "30px");

    $(function () {
        $(".menu li").on("click", function () {
            let so = $(this).index();

        })
    })
})


