const a = 5;
let b = 2;
//
// function MyFun(){
//     let b = 10
//     a = true
//     console.log(b)
// }
//
// MyFun()
// console.log(a)
// console.log(b)

function MyFunNew(){
    function innerFn(){
        console.log(a)
    }
    let b = 10
    //a = true
    console.log(a)
    innerFn()
}

MyFunNew()