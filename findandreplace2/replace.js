window.onload =function(){
	var show = document.getElementById('show');
	var unfd = document.getElementById('unfold');
	var cbtn = document.getElementById('cbtn');
	var btn1 = cbtn.getElementsByTagName('input');
	var setbox = document.getElementById('setbox');
	var sbtn = document.getElementById('sbtn');
	var btn2 = sbtn.getElementsByTagName('input');
	var close = document.getElementById('close');
	var frset = document.getElementsByClassName('frset');
	var ftxt = document.getElementById('findtxt');
	var fend = document.getElementById('findend');
	var rend = document.getElementById('reend');
	var rtxt1  = document.getElementById('replacetxt1');
	var rtxt2  = document.getElementById('replacetxt2');
	var onOff = true;
	var str = show.innerHTML;
	
//	给展开按钮添加点击事件
	unfd.onclick = function(){
//		当点击展开的同时显示查找和替换按钮
		if(onOff){
			cbtn.style.display = 'block';
			this.value = '隐藏';
			unfd.style.backgroundColor = 'gray';
			onOff = false;
		}else{
			cbtn.style.display = '';
			this.value = '展开';
			unfd.style.backgroundColor = '';
			onOff = true;
		}
	}
	for(var i = 0;i < btn1.length;i++){
		change(i,btn1);
		change(i,btn2);
	}
	function change(v,obj){
		obj[v].onclick = function(){
			for(var i = 0; i < btn1.length; i++){
				setbox.style.display = '';
				frset[i].style.display = '';
				btn1[i].style.backgroundColor = '';
				btn2[i].style.backgroundColor = '';
			}
				setbox.style.display = 'block';
				frset[v].style.display = 'block';
				btn1[v].style.backgroundColor = 'dodgerblue';
				btn2[v].style.backgroundColor = 'dodgerblue';
		}
		
	}
	close.onclick = function(){
		setbox.style.display = '';
		unfd.value = '展开';
		onOff = true;
		cbtn.style.display = '';
		unfd.style.backgroundColor = '';
		for(var i = 0;i < btn1.length;i++){
			btn1[i].style.backgroundColor = '';
		}
	}
	fend.onclick = function(){
		if(ftxt.value === ''){
			alert('请您输入要查找的内容！')
		}else if(str.indexOf(ftxt.value) === -1){
			alert('您要查找的内容未被找到！')
		}else{
			var arr = str.split(ftxt.value);
			var tjoin = arr.join('<span style = "background-color : red">' + ftxt.value + '</span>');
			show.innerHTML = tjoin;
		}
	}
	rend.onclick = function(){
		if(rtxt1.value === ''){
			alert('请您输入想要替换的内容！')
		}else if(rtxt2.value === ''){
			alert('请输入您要替换成的内容！')
		}else if(str.indexOf(rtxt1.value) === -1){
			alert('您要替换的内容未被找到！')
		}else{
			var arr = str.split(rtxt1.value);
			var tjoin = arr.join('<span style = "background-color : yellow">' + rtxt2.value + '</span>');
			show.innerHTML = tjoin;
			str = show.innerHTML;
			str = arr.join(rtxt2.value);
		}
	}
}
