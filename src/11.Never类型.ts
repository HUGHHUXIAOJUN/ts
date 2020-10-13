function fn3(): never{
    throw new Error('error')
}
//never 永远没有执行完 没有返回
function fn4(): never{
    throw new Error('error')
}
fn4();
// let aa2: string;
// a  = fn4();
// let b22: never;
// let c: any = 1;
// b22 = 2;
// b22 = c;

//never 是所有的子类和string一样