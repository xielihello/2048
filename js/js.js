window.onload = function(){
	var mbox = document.getElementById("box");
	var mtr = mbox.getElementsByTagName("tr");
	var mtd = [];
	var is_move_val = null;
	var is_move = true;
	mtd[0] = mtr[0].getElementsByTagName("td");
	mtd[1] = mtr[1].getElementsByTagName("td");
	mtd[2] = mtr[2].getElementsByTagName("td");
	mtd[3] = mtr[3].getElementsByTagName("td");
	// alert(end_val(4,4,'',''));
	//alert(mtd0.length)
	//alert(mtd1[1].innerHTML=='')
	window.onkeydown = function(e){
		e = e||window.event;
		var code = e.which||e.keyCode;
		if(code==87){//w
			for(var i = 0;i<4;i++){
				var s = end_val(_html(mtd[0][i]),_html(mtd[1][i]),_html(mtd[2][i]),_html(mtd[3][i]));
				mtd[0][i].innerHTML = no_unf(s[0]);
				mtd[1][i].innerHTML = no_unf(s[1]);
				mtd[2][i].innerHTML = no_unf(s[2]);
				mtd[3][i].innerHTML = no_unf(s[3]);
			}
		}
		if(code==83){//s
		//alert(mtd3[0].innerHTML)
			for(var i = 0;i<4;i++){
				var s = end_val(_html(mtd[3][i]),_html(mtd[2][i]),_html(mtd[1][i]),_html(mtd[0][i]));
				mtd[3][i].innerHTML = no_unf(s[0]);
				mtd[2][i].innerHTML = no_unf(s[1]);
				mtd[1][i].innerHTML = no_unf(s[2]);
				mtd[0][i].innerHTML = no_unf(s[3]);
			}
		}
		if(code==65){//a
			for(var i = 0;i<4;i++){
				var s = end_val(_html(mtd[i][0]),_html(mtd[i][1]),_html(mtd[i][2]),_html(mtd[i][3]));
				mtd[i][0].innerHTML = no_unf(s[0]);
				mtd[i][1].innerHTML = no_unf(s[1]);
				mtd[i][2].innerHTML = no_unf(s[2]);
				mtd[i][3].innerHTML = no_unf(s[3]);
			}
		}
		if(code==68){//d
			for(var i = 0;i<4;i++){
				var s = end_val(_html(mtd[i][3]),_html(mtd[i][2]),_html(mtd[i][1]),_html(mtd[i][0]));
				mtd[i][3].innerHTML = no_unf(s[0]);
				mtd[i][2].innerHTML = no_unf(s[1]);
				mtd[i][1].innerHTML = no_unf(s[2]);
				mtd[i][0].innerHTML = no_unf(s[3]);
			}
		}
		if(is_move){//生成随机数
			var k = 0;
			var _box = [];
			var is_move_box = [];
			for(var i = 0;i<4;i++){
				for(var j = 0;j<4;j++){
					if(mtd[i][j].innerHTML==''){
						is_move_box[k++] = i+':'+j;
					}
				}
			}
			if(k==0){//判断没完还有一点
				alert("Game Over!");
			}
			if(is_move_val!=is_move_box.join(',')){
				var as = is_move_box[parseInt(Math.random()*k)];
				//alert(as)
				if(k%2==0){
					mtd[as.slice(0,1)][as.slice(-1)].innerHTML = 2;
				}else{
					mtd[as.slice(0,1)][as.slice(-1)].innerHTML = 4;
				}
				for(var i = 0;i<4;i++){
					for(var j = 0;j<4;j++){
						if(mtd[i][j].innerHTML==''){
							_box.push(i+':'+j);
						}
					}
				}
				is_move_val = _box.join(',');
			}
		}
	}
}
function end_val(a,b,c,d){
	var l = [a,b,c,d];
	var k = [];
	var j=0;
	for(var i = 0;i<4;i++){
		if(l[i]){
			k[j] = l[i];
			j++;
		}
	}
	//alert(k)
	if(k[0]==k[1]){
		k[0]=k[0]+k[1];
		if(k[2]==k[3]){
			k[1]=true_num(k[2]+k[3]);
			k[2] = k[3] = '';
		}else{
			k[1] = k[2];
			k[2] = k[3];
			k[3] = '';
		}
	}else if(k[1]==k[2]){
		k[1] = true_num(k[1]+k[2]);
		k[2] = k[3];
		k[3] = '';
		}else if(k[2]==k[3]){
				k[2] = true_num(k[2]+k[3]);
				k[3] = '';
			}
	//alert(k)
	return k;
}
function true_num(num){
	if(isNaN(num)){
		return '';
	}
	return num;
}
function no_unf(n){
	if(!n){
		return n='';
	}
	return n;
}
function _html(obj){
	return parseInt(obj.innerHTML);
}

