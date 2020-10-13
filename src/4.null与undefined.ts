//空类型和未定义  Null Undefined
// let un: undefined;
// un = 1//错误
// let nul: null;
// nul = 1;//错误
// let aa: string = '11';
// a = null //可以
// a = undefined //可以
//let bb; //默认any 值是undefined
// let c: null = null;
// c.a

let ele = document.querySelector('.box');//element||null
if(ele){
    ele.id
}
//ele.id  //页面可能并不存在该元素  ele 有null值的风险


//对象类型  object