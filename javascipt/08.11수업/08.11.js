

// 스킵 눌렀을때 사진과 제목과 내용들
const layout1_img4A= [
    "img1.jpg","img2.jpg","img3.jpg","img4.jpg",
]
const layout1_jfif= [
    "twise1.jfif","twise2.jfif","twise3.jfif","twise4.jfif",
]
const layout1_img4B=[
    "sub1.jpg","sub2.jpg","sub3.jpg","sub4.jpg",
]
const layout1_jfifA=[
    "soc1.jfif","soc2.jfif","soc3.jfif","soc4.jfif",
]

const layout1_img4_textA = [
    "만 12 김로이","만 16세 제이콥","만 13세 클럽아이들 ","축구신동 만 7세 한다니엘",
]
const layout1_img4_textB = [
    "슛팅하는 모습","드리블 하는 모습","작전회의 하는중","1대1 개인지도",
]
const layout1_img4_textc=["샤워실","헬스기구","카페","냉장고",

]
const layout1_titlec=["최신버전의 샤워실","최신 기구들","쉴수 있는 공간","언제든 먹을 수 있는 음료수",
]
const layout1_img4B_textA =[
    "지하철","자동차","자전거","도보",
]
const layout1_img4B_textB =[
    "이대역6번2분거리","지하1,2층 주차장","자전거 전용도로","바로 앞 양재천",
]
const layout1_titleA = [
    "즐겁게 축구하는 모습","축구클럽 편의시설","오시는 길","감독 코치진",
]
const layout1_jfifA_textA =[
    "감독","코치","코치","코치",
]
const layout1_jfifA_textB = [
    "FC안양 청소년대표","토트넘 핫스퍼 국가대표","울버햄튼 청소년대표","FC안양 월드컵 멀티골",
]
window.onload = function () {
    // 시작하자마자 layout0 위에서 떨어지는
    $(".layout0").animate({ "top": "0" }, 1500)


     // 시작하자마자 layout1에 있는 각각의 .title1~4까지 타이틀
     for(i=0; i<layout1_titleA.length; i++) {
        $(".layout1_title"+(i+1)).html(layout1_titleA[i])
        $(".long1").hide();
        $(".long2").hide();
        $(".long3").hide();
        $(".long0").show();
     }



    //  main에 long 사진들
     for(i=0; i<4; i++){
     $(".long"+i).css("background","url(img/foo"+ (i+1) +".jfif)")
                 .css("backgroundSize","100% 100%");
    }
    $(".long").on("click",function(){
        $(".long0").hide();
        $(".long2").hide();
        $(".long3").hide();
        $(".long1").show();
    })
    $(".long1").on("click",function(){
        $(".long0").hide();
        $(".long1").hide();
        $(".long3").hide();
        $(".long2").show();
    })
    $(".long2").on("click",function(){
        $(".long2").hide();
        $(".long1").hide();
        $(".long3").hide();
        $(".long0").show();
    })


    //layout1 속에 그림 4개 (설명 포함)베열에서 불러오기
    for(i=0; i<layout1_img4A.length; i++) {
        $(".layout1_img"+(i+1)).css("background","url(img/"+layout1_img4A[i]+")")
                                .css("backgroundSize","100% 100%");
        // layout1_img 속에 그림 설명 P 2개에 배열에서 글자 가져다가 넣기
        $(".layout1_img_textA_"+(i+1)).html(layout1_img4_textA[i] );
        $(".layout1_img_textB_"+(i+1)).html(layout1_img4_textB[i] );
    }
    //layout2 속에 그림 4개 (설명 포함)베열에서 불러오기
    for(i=0; i<layout1_jfif.length; i++) {
        $(".layout2_img"+(i+1)).css("background","url(img/"+layout1_jfif[i]+")")
                                .css("backgroundSize","100% 100%");
        $(".layout2_img_textA_"+(i+1)).html(layout1_img4_textc[i]);
        $(".layout2_img_textB_"+(i+1)).html(layout1_titlec[i]);
    }
    //layout3 속에 그림 4개 (설명 포함)베열에서 불러오기
    for(i=0; i<layout1_img4B.length; i++) {
        $(".layout3_img"+(i+1)).css("background","url(img/"+layout1_img4B[i]+")")
                                .css("backgroundSize","100% 100%");
        $(".layout3_img_textA_"+(i+1)).html(layout1_img4B_textA[i]);
        $(".layout3_img_textB_"+(i+1)).html(layout1_img4B_textB[i]);
    }
    //layout4 속에 그림 4개 (설명 포함)베열에서 불러오기
    for(i=0; i<layout1_jfifA.length; i++) {
        $(".layout4_img"+(i+1)).css("background","url(img/"+layout1_jfifA[i]+")")
                                .css("backgroundSize","100% 100%");
        $(".layout4_img_textA_"+(i+1)).html(layout1_jfifA_textA[i]);
        $(".layout4_img_textB_"+(i+1)).html(layout1_jfifA_textB[i]);
    }

}
$(function () {
    
    $(".layout1qmenu").on("click",function(){
        $(".msgbox").animate({"left":"-10%"},500);
        $(this).css("display","none");
    })
    
    $(".skip").on("click",function(){
        $(".layout0").hide();
        $(".layout1").show();

    })
   
})