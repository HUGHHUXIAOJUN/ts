//  let a12: any;
//  //任何类型都可以覆盖any  any也可以覆盖任意类型 any有任意属性和方法
//  a12.indexOf(); //noImplicitAny 配置禁止any
//  function fn12(a) {
//      //参数是隐式的any 就不能对下面代码检验了  配置之后精致 
//      a.inde();
//  }