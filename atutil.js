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

var at = function(){};
at.prototype = {

    // 使用arttemplate
    artTemplate: function (id, html, data) {
        var render;
        render = template.compile(html);
        document.getElementById(id).innerHTML = render(data);
    },
    // 根据id查找控件
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
    formatString: function (str, data) {
        return str.replace(/@\((\w+)\)/g, function (match, key) {
            return typeof data[key] === 'undefined' ? '' : data[key]
        })
    },
    artTemplate: function (str, data) {
        var render = template.compile(str);
        return render(data);
    },
    // copy模式的对象创建
    // extend:function (target, source) {
    //     //遍历对象
    //     for(var i in source){
    //         target[i] = source[i];
    //     }
    //     return target;
    // }

    //extend2实现的功能：extend(target,obj1,obj2,obj3)
    /*功能：将多个多个json拷贝给目标*/
    /*原理：*/
    /*首先找到target   --arguments[0]*/
    extend: function () {
        var key, i = 0, len = arguments.length, target = null, copy;
        if (len === 0) {
            return;
        } else if (len === 1) {
            target = this;
        } else {
            i++;
            target = arguments[0];
        }
        for (; i < len; i++) {
            for (key in arguments[i]) {
                copy = arguments[i][key];
                target[key] = copy;
            }
        }
        return target;
    },
    urlParams:function () {
        var href=window.location.href;
        var para=window.location.search;
        var str=para.substring(1).split('&');
        var json={};
        for(var i=0;i<str.length;i++) {
            var pos=str[i].indexOf('=');
            if(pos==-1) {
                continue;
            }
            var key=str[i].substring(0,pos);
            var value=str[i].substring(pos+1);
            json[key]=value;
        }
        return json;
    }
};
 at = new at();