<?php
/* Smarty version 3.1.28-dev/77, created on 2015-11-25 08:54:41
  from "D:\wamp\www\smartydemo\templates\template.tpl" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.28-dev/77',
  'unifunc' => 'content_56557751748b37_43651641',
  'file_dependency' => 
  array (
    'f0fc387844beecbd776ba9f1ade529b59acf8e8b' => 
    array (
      0 => 'D:\\wamp\\www\\smartydemo\\templates\\template.tpl',
      1 => 1448433238,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_56557751748b37_43651641 ($_smarty_tpl) {
?>
<html>
<head>
<style type="text/css">
.bold{
    font-weight:bold;
    font-size:12px;
    padding:10px;
    width: 300px;
    border:solid 1px blue;
    line-height:20px;
}
</style>
</head>
<body>
<div class="bold"><?php echo $_smarty_tpl->tpl_vars['test']->value;?>
</div>
<!--
<?php
$_from = $_smarty_tpl->tpl_vars['arr']->value[0];
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$__foreach_value_0_saved_item = isset($_smarty_tpl->tpl_vars['value']) ? $_smarty_tpl->tpl_vars['value'] : false;
$_smarty_tpl->tpl_vars['value'] = new Smarty_Variable();
$__foreach_value_0_total = $_smarty_tpl->smarty->ext->_foreach->count($_from);
if ($__foreach_value_0_total) {
foreach ($_from as $_smarty_tpl->tpl_vars['value']->value) {
$__foreach_value_0_saved_local_item = $_smarty_tpl->tpl_vars['value'];
?>
    <div><?php echo $_smarty_tpl->tpl_vars['value']->value;?>
</div>
<?php
$_smarty_tpl->tpl_vars['value'] = $__foreach_value_0_saved_local_item;
}
}
if ($__foreach_value_0_saved_item) {
$_smarty_tpl->tpl_vars['value'] = $__foreach_value_0_saved_item;
}
?>
-->
<!--
<?php
$_from = $_smarty_tpl->tpl_vars['arr']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$__foreach_row_1_saved_item = isset($_smarty_tpl->tpl_vars['row']) ? $_smarty_tpl->tpl_vars['row'] : false;
$_smarty_tpl->tpl_vars['row'] = new Smarty_Variable();
$__foreach_row_1_total = $_smarty_tpl->smarty->ext->_foreach->count($_from);
if ($__foreach_row_1_total) {
foreach ($_from as $_smarty_tpl->tpl_vars['row']->value) {
$__foreach_row_1_saved_local_item = $_smarty_tpl->tpl_vars['row'];
?>
    <?php
$_from = $_smarty_tpl->tpl_vars['row']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$__foreach_value_2_saved_item = isset($_smarty_tpl->tpl_vars['value']) ? $_smarty_tpl->tpl_vars['value'] : false;
$_smarty_tpl->tpl_vars['value'] = new Smarty_Variable();
$__foreach_value_2_total = $_smarty_tpl->smarty->ext->_foreach->count($_from);
if ($__foreach_value_2_total) {
foreach ($_from as $_smarty_tpl->tpl_vars['value']->value) {
$__foreach_value_2_saved_local_item = $_smarty_tpl->tpl_vars['value'];
?>
	<div><?php echo $_smarty_tpl->tpl_vars['value']->value;?>
</div>
    <?php
$_smarty_tpl->tpl_vars['value'] = $__foreach_value_2_saved_local_item;
}
}
if ($__foreach_value_2_saved_item) {
$_smarty_tpl->tpl_vars['value'] = $__foreach_value_2_saved_item;
}
$_smarty_tpl->tpl_vars['row'] = $__foreach_row_1_saved_local_item;
}
}
if ($__foreach_row_1_saved_item) {
$_smarty_tpl->tpl_vars['row'] = $__foreach_row_1_saved_item;
}
?>
-->

<?php
$__section_loop_a_0_saved = isset($_smarty_tpl->tpl_vars['__smarty_section_loop_a']) ? $_smarty_tpl->tpl_vars['__section_loop_a'] : false;
$__section_loop_a_0_loop = (is_array(@$_loop=$_smarty_tpl->tpl_vars['arr']->value) ? count($_loop) : max(0, (int) $_loop));
$__section_loop_a_0_total = $__section_loop_a_0_loop;
$_smarty_tpl->tpl_vars['__smarty_section_loop_a'] = new Smarty_Variable(array());
if ($__section_loop_a_0_total != 0) {
for ($__section_loop_a_0_iteration = 1, $_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index'] = 0; $__section_loop_a_0_iteration <= $__section_loop_a_0_total; $__section_loop_a_0_iteration++, $_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index']++){
?>
    <div><?php echo $_smarty_tpl->tpl_vars['arr']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index'] : null)]['id'];?>
</div>
    <div><?php echo $_smarty_tpl->tpl_vars['arr']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index'] : null)]['name'];?>
</div>
    <div><?php echo $_smarty_tpl->tpl_vars['arr']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_loop_a']->value['index'] : null)]['age'];?>
</div>
<?php
}
}
if ($__section_loop_a_0_saved) {
$_smarty_tpl->tpl_vars['__smarty_section_loop_a'] = $__section_loop_a_0_saved;
}
?>


</body>
</html><?php }
}
