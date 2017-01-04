<?php
include_once('./libs/Smarty.class.php');  //如果在php.ini文件中将include_path添加了smart的目录这里就直接写Smarty.class.php就可以了。

$smarty = new Smarty();
$smarty -> template_dir = "./templates";      //模板存放目录
$smarty -> compile_dir = "./templates_c";     //编译目录
$smarty -> left_delimiter = "{{";             //左定界符
$smarty -> right_delimiter = "}}";            //右定界符

$smarty -> assign('test','这是Smarty模板的内容');
$arr=array(
	array("id"=>"1","name"=>"张三","age"=>"18"),
	array("id"=>"2","name"=>"李四","age"=>"19")
);

$smarty -> assign('arr',$arr);
$smarty -> display('template.tpl');
?>