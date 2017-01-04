<?php
/* Smarty version 3.1.28-dev/77, created on 2015-11-25 09:24:23
  from "D:\wamp\www\smartydemo\templates\buy.tpl" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.28-dev/77',
  'unifunc' => 'content_56557e4745c9e8_96250705',
  'file_dependency' => 
  array (
    'd09a42be701aa97af71d26c55431bf540473ab4b' => 
    array (
      0 => 'D:\\wamp\\www\\smartydemo\\templates\\buy.tpl',
      1 => 1448443459,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_56557e4745c9e8_96250705 ($_smarty_tpl) {
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0">
	<title>购物车</title>
	<link rel="stylesheet" href="./css/buy.css">
</head>
<body>
<!-- 头部 -->
<header id="header">
	<div class="header-left">
		<a href="index.html">
			<span></span>
		</a>
	</div>
	<div class="header-center">
		<span>购物车</span>
	</div>
	<div class="header-right">
		<span></span>
	</div>
</header>
<!-- 安全 -->
<div id="anquan">
	<div class="anquan-warp">
		<em></em>
		<span>您正在安全购物环境中，请放心购物</span>
	</div>
</div>
<!-- 产品列表 -->
<div id="pro">

<?php
$__section_loop_a_0_saved = isset($_smarty_tpl->tpl_vars['__smarty_section_loop_a']) ? $_smarty_tpl->tpl_vars['__section_loop_a'] : false;
$__section_loop_a_0_loop = (is_array(@$_loop=$_smarty_tpl->tpl_vars['data']->value) ? count($_loop) : max(0, (int) $_loop));
$__section_loop_a_0_total = $__section_loop_a_0_loop;
$_smarty_tpl->tpl_vars['__smarty_section_loop_a'] = new Smarty_Variable(array());
if ($__section_loop_a_0_total != 0) {
for ($__section_loop_a_0_iteration = 1, $_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index'] = 0; $__section_loop_a_0_iteration <= $__section_loop_a_0_total; $__section_loop_a_0_iteration++, $_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index']++){
?>

	<div class="pro-warp">
		<div class="pro-title">
			<div class="pro-title-check"></div>
			<div class="pro-title-name">
				<img src="./img/buy-logo.png" alt="">
				<span>京东自营</span>
			</div>
		</div>
		<div class="pro-body">
			<div class="pro-body-check"></div>
			<div class="pro-body-des">
				<img src="<?php echo $_smarty_tpl->tpl_vars['data']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index'] : null)]['path'];?>
" alt="">
				<div class="pro-body-des-text">
					<span><?php echo $_smarty_tpl->tpl_vars['data']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index'] : null)]['desc'];?>
</span>
					<b><?php echo $_smarty_tpl->tpl_vars['data']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index'] : null)]['price'];?>
</b>
					<div class="pro-body-des-con">
						<span id="jia">
							<a></a>
						</span>
						<span id="shu">1</span>
						<span id="jian">
							<a></a>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>


<?php
}
}
if ($__section_loop_a_0_saved) {
$_smarty_tpl->tpl_vars['__smarty_section_loop_a'] = $__section_loop_a_0_saved;
}
?>







		
</div>
<!-- 固定底边栏 -->
<footer id="foot">
	<div class="footLeft">
		<div class="checkall"></div>
		<div class="checktext">全选</div>
		<div class="foot-info">
			<strong>合计:￥213.80</strong>
			<span>总额:￥213.80 返现:￥0.00</span>
		</div>
	</div>
	<div class="footRight">
		去结算（0）
	</div>
</footer>
</body>
</html><?php }
}
