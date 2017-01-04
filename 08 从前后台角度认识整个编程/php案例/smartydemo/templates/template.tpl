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
<div class="bold">{{$test}}</div>
<!--
{{foreach from=$arr[0] item=value}}
    <div>{{$value}}</div>
{{/foreach}}
-->
<!--
{{foreach from=$arr item=row}}
    {{foreach from=$row item=value}}
	<div>{{$value}}</div>
    {{/foreach}}
{{/foreach}}
-->

{{section name=loop_a loop=$arr}}
    <div>{{$arr[loop_a].id}}</div>
    <div>{{$arr[loop_a].name}}</div>
    <div>{{$arr[loop_a].age}}</div>
{{/section}}


</body>
</html>