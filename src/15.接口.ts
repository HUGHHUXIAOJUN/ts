interface Point {
    x: number,
    y: number
}
//接口是一种类型 不能作为值使用
let p1: Point = {
    x: 100,
    y: 100
}

//1 可选属性
interface Point1 {
    x: number;
    y: number;
    color?: String
}
let p2: Point1 = {
    x: 1,
    y: 2,
   
}

//2 只读属性
interface Point2 {
    readonly x: number,
    readonly y: number,
    color?: String
}
let p3: Point2 = {
    x: 1,
    y: 2,
    color: 'red'
}
// p3.x=10;
p3.color = 'blue';

//3 任意属性
//数字类型索引

interface Point4 {
    x: number,
    y: number,
    [prop: string]: number
}
let p4: Point4 = {
    x: 1,
    y: 2,
    z: 1
}
p4.t = 10;
// p4.t = '10';
p4[1] = 10; //key是1  但最终是'1'  所以符合string

interface Point5 {
    x: number,
    y: number,
    [prop: number]: number
}
let p5: Point5 = {
    x: 1,
    y: 2
}
// p5['title']='111';
// p5[1]=2;
// p5['2']=1;  //number  只能number


/**
 * 索引的key 必须是 string或者number 可以同时出现  不能出现Boolean
 * 
 */
// interface Point6 {
//     [prop1: string]: string;
//     [props: number]: number; //错误
// }

interface Point7 {
    [prop1: string]: Object;
    [props: number]: Date; //正确
}
