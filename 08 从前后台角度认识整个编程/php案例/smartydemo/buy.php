<?php
include_once('./libs/Smarty.class.php');  //如果在php.ini文件中将include_path添加了smart的目录这里就直接写Smarty.class.php就可以了。

$smarty = new Smarty();
$smarty -> template_dir = "./templates";      //模板存放目录
$smarty -> compile_dir = "./templates_c";     //编译目录
$smarty -> left_delimiter = "{{";             //左定界符
$smarty -> right_delimiter = "}}";            //右定界符

$data=array(
		array("path"=>"./img/buy-logo.png","price"=>"￥45","desc"=>"iphone6s手机壳/手机保护套/使用于苹果6/6s/6plusiphone6s手机壳/手机保护套/使用于苹果6/6s/6plus"),
		array("path"=>"./img/buy-logo.png","price"=>"￥45","desc"=>"描述1"),
		array("path"=>"./img/buy-logo.png","price"=>"￥45","desc"=>"描述1"),
		array("path"=>"./img/buy-logo.png","price"=>"￥45","desc"=>"描述1")
	 ); 

$smarty -> assign('data',$data);
$smarty -> display('buy.tpl');
?>