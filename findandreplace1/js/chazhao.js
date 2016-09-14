//需求：
//1、点击展开按钮，出现查找和替换按钮组；
//2、点击展开下方的按钮组中的查找按钮，底部搜索框出现并显示为查找相关内容；
//3、点击展开下方的按钮组中的替换按钮，底部搜索框出现并显示为替换相关内容；
//4、点击查找搜索框中的查找按钮，出现查找相应的文本框；
//5、点击替换搜索框中的替换按钮，出现替换相应的文本框；
//6、点击查找文本框后的查找按钮，TEXT文本中相应内容背景色改变；
//7、点击替换文本框后的替换按钮，TEXT文本中与exchangetext1相同的内容被替换为exchangetext2中的内容；

window.onload = function(){
	//找到元素
	var textBox = document.getElementById('text');
	var expand = document.getElementById('expand');
	var btnClass = document.getElementById('btn_class');
	var arrFindOrEx = btnClass.getElementsByTagName('input');
	var bottom = document.getElementById('bottom');
	var arrEm= bottom.getElementsByTagName('em');
	var arrBotbox = bottom.getElementsByClassName('bottombox');
	var findText = document.getElementById('findtext');
	var findOK = document.getElementById('findOK');
	var exchangeText1 = document.getElementById('exchangetext1');
	var exchangeText2 = document.getElementById('exchangetext2');
	var exchangeOK = document.getElementById('exchangeOK');
	var confine = document.getElementById('confine');
	var cancel = document.getElementById('cancel');
	var close = document.getElementById('close');
	//将textbox里的文本内容存入变量
	var inner = textBox.innerHTML;
	
	//点击展开按钮
	//设置展开按钮的onoff自定义属性	记录按钮的状态
	expand.onOff = true;
	expand.onclick = function(){
		if(this.onOff){
			//如果状态为true
			//让查找和替换按钮组显示
			btnClass.style.display = 'block';
			//改变该按钮的value为隐藏
			this.value = '隐藏';
			//改变该按钮的状态为false
			this.onOff = false;
		}else{
			//判断状态为FALSE
			//让查找和替换按钮组隐藏
			btnClass.style.display = '';
				//改变该按钮的value为展开
			this.value = '展开';
			//改变该按钮的状态为TRUE
			this.onOff = true;
		}
	}
	//为按钮组中的查找和替换按钮、底部搜索框中的查找和替换按钮添加点击事件，并绑上相应的功能
	for (var i = 0; i < arrFindOrEx.length; i++) {
		display(i,arrFindOrEx);
		display(i,arrEm);
	}
	//点击obj,使底部搜索框出现，呈现相应的输入框，相应的样式改变
	function display(v,obj){
		//点击OBJ
		obj[v].onclick = function(){
			for (var i = 0; i < arrEm.length; i++) {
				//使底部输入框都隐藏
				arrBotbox[i].style.display = '';
				//清空底部查找、替换className
				arrEm[i].className = '';
				//把右上按钮组的所有按钮的激活背景色清空
				arrFindOrEx[i].style['background-color'] = '';
			}
			//给当前相应的按钮背景色设为激活的背景色
			arrFindOrEx[v].style['background-color'] = 'orangered';
			//让底部搜索框显示
			bottom.style.display = 'block';
			//激活当前底部相应的按钮样式
			arrEm[v].className = 'active';
			//显示与底部按钮相应的输入框
			arrBotbox[v].style.display = 'block';
		}
	}
	//点击底部搜索框中右上角的x（关闭）按钮
	close.onclick = function(){
		//隐藏搜索框
		bottom.style.display = '';
		//设置展开按钮的状态为TRUE
		expand.onOff = true;
		//设置展开按钮的value为展开
		expand.value = '展开';
		//隐藏右侧查找和替换按钮组
		btnClass.style.display = '';
		//清空按钮组中所有按钮的激活样式
		for (var i = 0; i < arrEm.length; i++) {
			arrFindOrEx[i].style['background-color'] = '';
		}
	}
	findOK.onclick = function(){
		if(findText.value == ''){
			alert('请输入要查找的内容')
		}else if(inner.indexOf(findText.value) === -1){
			alert('找不到您要查找的内容！');
		}else{
			change('select',findText,findText);
		}
	}
	exchangeOK.onclick = function(){
		if(exchangeText1.value == ''){
			alert('请输入想要替换的内容')
		}else if(exchangeText2.value == ''){
			alert('请输入要替换成的内容')
		}else if(inner.indexOf(exchangeText1.value) === -1){
			alert('找不到您想要替换的内容！');
		}else{
			change('select',exchangeText2,exchangeText1);
		}
	}
	confine.onclick = function(){
		change('',exchangeText2,exchangeText1);
		textBox.innerHTML = pera;
		inner = textBox.innerHTML;
	}
	cancel.onclick = function(){
		change('',exchangeText1,exchangeText1);
	}
	function change(sele,which,text){
		var arr = inner.split(text.value);
		var textJoin = arr.join('<span class="'+sele+'">'+ which.value +'</span>')
		textBox.innerHTML = textJoin;
		pera = arr.join(which.value);
	}
}
