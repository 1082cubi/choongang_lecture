window.onload = function () {

    /* 
        document.write("<br>자동차");
        document.write("<br>자동차");
        document.write("<br>자동차");
        document.write("<br>자동차" + 20);
    
    
        var number =7;
        document.write("<br>자동차- " + number );
    */
    /* let ok_btn = document.getElementById("ok_btn")
    ok_btn.onclick=function( ) {
        console.log("클릭");
        let kor, eng, mat, total,average;
        kor=document.getElementById("kor");
        eng=document.getElementById("eng");
        mat=document.getElementById("mat");
        total=document.getElementById("total");
        average=document.getElementById("average");


        hap= Number(kor.value) + Number(eng.value) +Number (mat.value);
        console.log(kor.value);
        total.innerHTML = hap;
        average.innerHTML = hap/3;
    // } */

    /*
    let count=0;
    console.log(count);
    count = count + 1;
    console.log(count);
    count = count + 1;
    console.log(count);

    count +=1 ;
    console.log( count)
    count++;
    console.log("증가연산자++ : " + count)
    console.log("증가연산자++ : " + ++count)
    console.log("증가연산자++ : " + count++)
    */

    let add, result, count = 0, pic;
    pic = document.querySelector("#pic");
    add = document.querySelector(".add");
    sub = document.querySelector(".sub")
    result = document.querySelector(".result")
    /* add.onclick=function() {
         count++;
         result.innerHTML=count
         console.log(count);

    }
     */
    /*function min() {
        count--;
        result.innerHTML = count;
        console.log (count);
        pic.src="../img/img."+ count + ".webp";
    */


    add.addEventListener("click", function () {
        if (count < 5) {
            count++;
        }
        result.innerHTML = count;
        console.log(count);
        pic.src = "../img/img." + count + ".webp";
    })
    sub.addEventListener("click", function () {
        if (count > 1) {
            count--;
        }
        result.innerHTML = count;
        pic.src = "../img/img." + count + ".webp";


    })
}

/* -------------
        let su, ju, cnacle
        su=document.getElementById("su");
        ju=document.getElementById("ju");
        cancle=document.getElementById("cancle");
        let price;
        ju.onclick=function() {
        price = Number(su.value) *500;
        disp=document.getElementById("disp");
            disp.ivverHTML = price +"원 입니다";
            disp.innerHTML="block"

        }
            disp.ondlick=function
        
    
function ok() {
    msg.innerHTML = "환영합니다.";
    msg.style.fontSize = "2rem";
    msg.style.color = "red";
}

function close_func(){
    layout.style.display="none"
}
function show_s() {
    layout.style.display="block"
}

*/