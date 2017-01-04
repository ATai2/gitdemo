// 导航点击
var nav=document.getElementById('nav');
var oLi=nav.getElementsByTagName('ul')[0].getElementsByTagName('li');
for(var i=0;i<oLi.length;i++){
	oLi[i].onclick=function(){
		for(var j=0;j<oLi.length;j++){
			oLi[j].className='nav-blur';
		}
		this.className='nav-current';
	}
}