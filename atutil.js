/**
 * Created by Administrator on 2017/1/4.
 * 封装框架：个人使用工具
 *
 * 依赖：arttemplate    jquery
 * 功能：
 * 1.数据绑定
 * 2.dom操作
 * 3.动画
 */

var at = {};
at.prototype = {
    artTemplate: function (id, html, data) {
        var render = template.compile(html);
        var str = render(data);
        document.getElementById(id).innerHTML = str;
    },

    atId: function (id) {
        return document.getElementById(id);
    },
    //去除左边空格
    ltrim: function () {
        return str.replace(/(^\s*)/g, '');
    },
    //去除右边空格
    rtrim: function () {
        return str.replace(/(\s*$)/g, '');
    },
    //去除空格
    trim: function () {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    // 采用的对象是@（）的内容替换，其中填充属性值，再替换绑定
    formatString:function (str, data) {
        return str.replace(/@\((\w+)\)/g,function (match,key) {
            return typeof data[key]==='undefined'?'':data[key]
        })
    },
    artTemplate:function (str, data) {
        var render=template.compile(str);
        return render(data);
    }



};
var at = new AT();