enum HTTP_CODE {
    //默认0开始 下一个为上一个+1
    is,
    ok=200,
    NOT_FOUND = 404
};
HTTP_CODE.ok //200

// if ( Response.statusCode == HTTP_CODE.ok){
//     //
// }
enum URLS {
    USER_REGISETER = '/user/register',
    USER_LOGIN = '/app/userinfo'
}