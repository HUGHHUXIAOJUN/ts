//声明式
function add2(x: number,y: number): number{
    return x + y
}
//表达式
let add1 = function(x: number, y: number): number{
    return x + y
}

function foreach(data: string[], callback:(k:number,v:string) => void) {
    for(let i: number = 0; i<data.length; i++){
        callback(i, data[i])
    }
}
let arr =  ['a', 'b', 'c'];
foreach(arr ,function(k, v){

})



function foreach2(data: string[], callback:(k:number,v:string) => void) {
    for(let i: number = 0; i<data.length; i++){
        callback(i, data[i])
    }
}
let arr2 =  ['a', 'b', 'c'];
foreach2(arr ,function(k, v){

})