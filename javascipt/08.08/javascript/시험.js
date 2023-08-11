window.onload = function(){
    let aaa=document.querySelector(".aaa")
    let bbb=document.querySelector(".bbb")
    let ccc=document.querySelector(".ccc")
    let ddd=document.querySelector(".ddd")


    aaa.addEventListener("click",function(){
        ddd.innerHTML=("초록색")
        
    })
    bbb.addEventListener("click",function(){
        ddd.innerHTML=("노란색")
    })
    ccc.addEventListener("click",function(){
        ddd.innerHTML=("파란색")
    })
}