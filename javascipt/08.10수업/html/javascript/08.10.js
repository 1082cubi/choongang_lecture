


window.onload = function () {
    //     let str = "abcdefg" //문자역 =배역
    //     let out = str.replace('c','x');
    //     console.log( out);

    // 선언적 함수 : 함수 이름이 지정된 함수
    // function title() {
    //     console. log("------------")
    // }
    // title()
    //     console. log("국어, 영어 수학")
    //     title()
    //익명함수 : 함수에 이름이 없음(변수에 함수를 지정할 때 )
    // let out= function(){
    //     console.log("익명함수");

    // }
    // console.log(out);
    // out();

    //Return 함수 : 결과값을 돌려주는 함수 (1개만 Return)
    // function func(){
    //     return 10+20;
    // }

    // console.log(func() );
    // let result= func()
    // console.log(result );


    // // 전달 인수가 있는 함수
    // function func(x, y) {        //전달 받은 매개변수
    //     return (x * y);
    // }
    // let a = 10, b = 20, kbs;         //a,b 전달인수 (전달인수 = 매개변수 = 파라메터)
    // kbs = func(a, b);
    // console.log(kbs);


    // function func2(k, s) {
    //     return (k + s);


    // }
    // let sbs = func2(100)
    // console.log(sbs);
    // 
    // // 메개변수(전달인수)의 개수가 다를 때 예비값 지정
    // function func2(x, y=100) {
    //         return (k + y);

    
    //     }
    //     let a=10;
    //     let kbs = func(a);              
    //     console.log(kbs); 
        
    //     let sbs = func(a,20);
    //     console.log(sbs) 
    
    // 화살표 함수
    // let kbs = function(){
    //     console.log("변수에 function 입력으로 이름이 없음(익명함수)");

    // }
    // kbs ();
    // let sbs = ()=> {
    //     console.log("화살표 함수로 익명함수 표현 가능");
    // }
    //     sbs();


    //     ;ebs=()=>console.log("화살표'중괄호없음'");
    //     ebs();
    //     let ytn=(a,b)=> console.log(a+b);
    //     ytn(10,20);
    //1~100까지 합을 화살표 함수로 표현
    function hap(){
        let sum=0;
        for(i=1; i<=100; i++)
        sum +=i;
        console.log("1~~100까지 합 : "+sum );

    }


    // hap();
    // // ------------------
    // let tot=()=>{
    //     let sum = 0;
    //     for(i=1; i<=100; i++)
    //     sum += i;
    // console.log("화살표 함수 : 1~100까지 합 : " + sum);

    // }
    // tot();


    // 콜백함수 : 뒤에서 함수가 실행되는 함수(매개변수가 함수인 함수)
    function add(func) {
        let result = func (10,20);
        console.log(result); 
    }

    add(a1);
    add(a2);
    add(a3);
    add(a4);
    function a1(x, y) {          return x+y;}
    function a2(x, y) {          return x-y;}
    function a3(x, y) {          return x*y;}
    function a4(x, y) {          return x/y;}



    }






$(function () {

})
