window.onload = function () {
    /*
    // 화면에 "자동차 5번 출력"
    // document.write("<br>자동차-1")
    // document.write("<br>자동차-2")
    // document.write("<br>자동차-3")
    // document.write("<br>자동차-4")
    // document.write("<br>자동차-5")

    // 화면에 있는 .box속에 있는 자동차 5번 출력

    //let box=document.querySelector(".box");
    //box.innerHTML = "<br>자동차-1";
    //box.innerHTML += "<br>자동차-2";
    //box.innerHTML += "<br>자동차-3";
    //box.innerHTML += "<br>자동차-4";
    //box.innerHTML += "<br>자동차-5";

    //화면에 있는 box속에 자동차 5번 줄력하는데 문자역 변수를 사용한다//
    /*let str="";
    str +="<br>자동차-1";
    str +="<br>자동차-2";
    str +="<br>자동차-3";
    str +="<br>자동차-4";
    str +="<br>자동차-5";
    box. innerHTML = str; */

    /*let box = document.querySelector(".box");
    let i, str="";
    for (i = 1; i <= 5; i++) {
       // document.write("<br>자동차-" + i);
       str+="<p>자동차-" + i + "</p>"
    }
    box.innerHTML = str; */


    /*  let box = document.querySelector(".box");
      let i, sum=even=odd=0;
      for (i = 1; i <= 100; i++) {
          sum += i;
          if (i % 2 == 0)
              even += i;
  
          else
          odd += i;
              
  
      }
      box.innerHTML = "<p>1~100까지 합" + sum + "</p>";
      box.innerHTML += "<p>1~100까지 짝수합" + even + "</p>";
      box.innerHTML += "<p>1~100까지 홀수합" + odd + "</p>"; */


    /*let box = document.querySelector(".box");
    let str="";
    for (i=1; i<=9; i++) {
        str += "<p>2 * " + i + " = " + 2*i +"</p>";
    }
    box.innerHTML = str;*/

    //let gu = document.querySelector(".gu");
    //let ok = document.querySelector(".ok");
    //let box = document.querySelector(".box");
    //let str = "";
    //
    //ok.addEventListener("click",function() {
    //    let gu_value=Number(gu.value);
    //    console.log(gu.value);
    //
    //    str="";
    //    for (i=1; i<=9; i++) {
    //        str += "<p>" + gu_value +"*" + i + "=" +gu_value*i;
    //    }
    //    box.innerHTML = str;
    //}



    /*let i, sum=0
    for (i=1; i<=9; i**) {
        sum *=i;
    
    
    }
    box.innerHTML ="<p>1~9까지 곱" + sum + "</p>";*/



    /* // box에 원하는 (input) 구구단 가로로 하기
     let box = document.querySelector(".box");
     let str = "";
     for (i = 1; i <= 10; i++) {
         for (k = 2; k <= 10; k++) {
             str += "" + k + "*" + i + "=" + k * i + "&nbsp; &nbsp; "
         }
         str += "<div><div>";
     }
     box.innerHTML = str; */


    //let menu = document.getElementById("menu").getElementsByTagName("div");







    /*let menu;
    menu = document.getElementById("menu").getElementsByTagName("div");

    menu[0].addEventListener("click", function () {
        for (i = 0; i < menu.length; i++) {    //<div>제품/소모품 \<div>
            menu[i].style.background = "white";
        }
        this.style.background = "skyblue";
    })
    menu[1].addEventListener("click", function () {
        for (i = 0; i < menu.length; i++) {
            menu[i].style.background = "white"
        }
        this.style.background = "red";
    })        
    menu[2].addEventListener("click", function () {
        for(i=0; i<menu.length; i++) {
            menu[i].style.background="white"
        }
        menu[2].style.background = "green";
    })
    menu[3].addEventListener("click", function () {
        this.style.background = "yellow";
    })

    console.log(menu.length);
    let imgs = document.querySelector(".imgs").getElementsByTagName("div");

    for (i = 0; i < imgs.length; i++) {
        imgs[i].style.background = "url(../img/" + (i + 1) + ".jpg)";
        imgs[i].style.backgroundSize = "100% 100%";
    }

    let big = document.querySelector(".big").getElementsByTagName("div");
    console.log()

    big[i].style.background = "url(../bbig/" + (i + 1) + "jpg";
    big[i].style.backgroundSize = "100%100%";

    let jpg = document.querySelector(".jpg");
    imgs[1].addEventListener("click", function () {
        jpg.src = "../big/.jpg";
    })*/


 /*   let menu = document.querySelector(".menu").getElementsByTagName("div");
    let jpg1 = document.querySelector(".jpg1");
    let jpg2 = document.querySelector(".jpg2");
    let jpg3 = document.querySelector(".jpg3");
    let jpg4 = document.querySelector(".jpg4");
    let jpg5 = document.querySelector(".jpg5");


    menu[0].addEventListener("click", function () {
        for (i = 0; i < menu.length; i++) {
            menu[i].style.background = "white";
            menu[i].style.color = "black";
        }
        this.style.background = "skyblue";
        this.style.color = "white";
        jpg1.src="../../img/daba (1).jpg";
        jpg2.src="../img/daba (2).jpg";
        jpg3.src="../img/daba (3).jpg";
        jpg4.src="../img/daba (4).jpg";
        jpg5.src="../img/daba (5).jpg";

      
    })

    menu[1].addEventListener("click", function () {
        for (i = 0; i < menu.length; i++) {
            menu[i].style.background = "white";
            menu[i].style.color = "black";
        }
        this.style.background = "skyblue";
        this.style.color = "white";
        jpg1.src="../img/soccer!(7).jpg";
    })

    menu[2].addEventListener("click", function () {
        for (i = 0; i < menu.length; i++) {
            menu[i].style.background = "white";
            menu[i].style.color = "black";
        }
        this.style.background = "skyblue";
        this.style.color = "white";
    })
    menu[3].addEventListener("click", function () {
        for (i = 0; i < menu.length; i++) {
            menu[i].style.background = "white";
            menu[i].style.color = "black";
        }
        this.style.background = "skyblue";
        this.style.color = "white";
    })

    menu[4].addEventListener("click", function () {
        for (i = 0; i < menu.length; i++) {
            menu[i].style.background = "white";
            menu[i].style.color = "black";
        }
        this.style.background = "skyblue";
        this.style.color = "white";
    })

    menu[5].addEventListener("click",function() {
        for(i=0; i<menu.length; i++) {
            menu[i].style.background="white";
            menu[i].style.color="black";
        }
        this.style.background ="skyblue";
        this.style.color="white";
        })
        */


        let jumsu =document.querySelector(".jumsu");
        let ok1=document.getElementById("ok1");
        let disp=document.getElementById("disp");
        ok1.addEventListener("click", function() {
            let su = Number(jumsu.value);
            if(su > 60 )
                disp.innerHTML="합격"

            else 
            disp.innerHTML="불합격"   
            //for(i=0; i<=100; i++);
        })



        let number=document.querySelector(".number");
        let ok2=document.getElementById("ok2");
        let disp2= document.getElementById("disp2");

        ok2.addEventListener("click", function() {
            let su = Number(number.value);
                su = su%2;  console.log(su)  //숫자가 0 또는 1
                if( su )            //참이냐 true? 숫자가 있냐
                    disp2.innerHTML = "홀수"

                else
                    disp2.innerHTML = "짝수" 



            //if(su%2 == 0 )
            //    disp2.innerHTML = "짝수";
            //else
             //   disp2.innerHTML = "홀수"; 
        })
                
        
        
        //  주민번호를 가져와라 숫자는 0부터 
        let ju=document.querySelector(".ju")
        let ok3 =document.getElementById("ok3")
        let disp3=document.getElementById("disp3")
        ok3.addEventListener("click", function() {
            let str = (ju.value).substring(7,9);
            disp3.innerHTML = str;
        })


}











/*menu[0].addEventListener("click", function () {
    for (i = 0; i < menu.length; i++) {    //<div>제품/소모품 \<div>
        menu[i].style.background = "white";
    }
    this.style.background = "skyblue";*/



