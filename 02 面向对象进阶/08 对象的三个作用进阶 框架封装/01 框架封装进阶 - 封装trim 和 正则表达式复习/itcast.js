/**
 * Created by Lenovo on 2016/1/4.
 */


function itcast(){

}

itcast.prototype ={
    $id:function (str){
    return document.getElementById(str)
    },
    $tag:function(tag){
        return document.getElementsByTagName(tag)
    },
    //数据类型检测
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
    //删除右边的空格
    rtrim:function(str) {
    return str.replace(/(\s*$)/g,'');
},
    ajax:function(){},
    dateFormate:function(){},
    tab:function (id) {
    //如何获取某个父元素下面的子元素
    var box = $$.$id(id);
    var spans = box.getElementsByTagName('span');
    var lis = box.getElementsByTagName('li');
    //两步走
    //第一步: 先把上半部分实现
    //群体绑定事件  -- 对所有的span绑定事件
    //群体绑定事件
    for(var i=0;i<spans.length;i++) {
        //相亲法则  -- 给男一号一个代号  --  怎么给 -- 自定义属性
        spans[i].index=i;

        spans[i].onmouseover = function() {

            //排他思想:将所有的span置为默认状态. 然后再将当前鼠标移上的span置为class：select
            for(var i=0;i<spans.length;i++) {
                spans[i].className='';
                lis[i].className='';
            }
            this.className='select';
            lis[this.index].className='select';

           /* 第二步: 实现下半部分
            排他思想:  将所有的li隐藏起来 然后再将当前鼠标悬浮对应的li显示出来
             for(var i=0;i<lis.length;i++)
			   {
				   lis[i].className='';
			   }
            寻找对应的女方
            lis[this.index].className='select';*/
        }
    }

}
}

var $$ = new itcast()