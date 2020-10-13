//类型深入  
    //联合类型 交叉类型 字面量类型 类型别名 类型推导 类型断言 类型操作符 类型保护


//联合类型也可以称为多选类型 当我们希望标注一个变量为多个类型之一时可以选择联合类型标注 或的关系    
function css (ele: Element, attr: string, value: string|number){
    //...
}
let box = document.querySelector('.box');
// document.querySelector 返回就算一个联合类型
if(box){
    //ts 会提示有 null 的可能性，加上判断更严谨
    css(box,'width','100px');
    css(box,'opactity',1);
    // css(box,'width',[1.2]);//错误
}




//交叉类型也可以成为合并类型，可以把多种类型合并到一起成为一种新的类型，并且 的关系
interface o1 {
    x: number,
    y: number
}
interface o2 {
    z: number
}

let obj1: o1 = {
    x:1,
    y:1
},
obj2: o2 = {
    z:3
},
obj3:o1 & o2=Object.assign({},obj1,obj2)
// obj3.x



//字面量类型 我们希望标注的不是某个类型，而是一个固定值，就可以使用字面量类型，配合联合类型会更有用
function setPosition(ele: Element, direction: string){

}
