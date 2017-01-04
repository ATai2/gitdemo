/**
 * Created by Administrator on 2016/12/30.
 */
var $$=function () {

    $$.prototype={
        $id:function (str){
            return document.getElementById(str)
        },
        $tag:function(tag){
            return document.getElementsByTagName(tag)
        },
        //还有数字字符串的验证
        isNumber:function (val){
            return typeof val === 'number' && isFinite(val)
        },
        isBoolean:function (val) {
            return typeof val ==="boolean";
        },
        isString:function (val) {
            return typeof val === "string";
        },
        isUndefined:function (val) {
            return typeof val === "undefined";
        },
        isObj:function (str){
            if(str === null || typeof str === 'undefined'){
                return false;
            }
            return typeof str === 'object';
        },
        isNull:function (val){
            return  val === null;
        },
        isArray:function (arr) {
            if(arr === null || typeof arr === 'undefined'){
                return false;
            }
            return arr.constructor === Array;
        },
        trim:function(str){
            return str.replace(/(^\s*)|(\s*$)/g, '');
        },
        ltrim:function(str) {
            return str.replace(/(^\s*)/g,'');
        },
        //ɾ���ұߵĿո�
        rtrim:function(str) {
            return str.replace(/(\s*$)/g,'');
        },
        ajax:function(){

        },
        dateFormate:function(){

        }
    }
    }
}