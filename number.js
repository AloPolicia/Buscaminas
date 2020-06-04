function arrancarcontador() {
var segundos = document.getElementById('contador2');
var minutos = document.getElementById('contador1');
if (segundos.innerHTML < '09') {
valor = parseFloat(segundos.innerHTML)+parseInt('1');
segundos.innerHTML = '0'+valor;
setTimeout('arrancarcontador()', 1000);
}
else if (segundos.innerHTML == '59') {
minutos.innerHTML = parseInt(minutos.innerHTML)+parseInt('1');
segundos.innerHTML = '00';
setTimeout('arrancarcontador()', 1000);
}
else if (segundos.innerHTML >= '09'){
valor2 = parseFloat(segundos.innerHTML)+parseInt('1');
segundos.innerHTML = valor2;
setTimeout('arrancarcontador()', 1000);
}
}




function Proceso(strike,index) {
	var aux=0,a,b,c,d,f,g,h,i,k,contador=0,band=0;//las variables de la a a la i, serviran para poder preguntar si hay minas al rededor 
	a=index-10;
	b=index-9;
	c=index-8;
	d=index-1;
	f=index+1;
	g=index+8;
	h=index+9;
	i=index+10;
	//casos especiales, cuando la bomba se encuentra en alguno de los lados
	if(index==8 || index==17 || index == 26 || index == 35 || index == 44 || index == 53 || index== 62 || index== 71 || index == 80){
		a=f=i=c=100;
	}
	if(index==0 || index==9 || index == 18 || index == 27 || index == 36 || index == 45 || index== 54 || index== 63 || index == 72){
		a=d=i=c=100;
	}

	for(k=0;k<10;k++){
	  	if(index==strike[k]){//si en mi posicion actual, se encuentra una bomba, activamos la bandera
  			band=1;
		} 
	}
	if(band==1){//si se cumple, significa que clickeo una bomba
		return -1;
	}else{
		for(k=0;k<10;k++){
		  	if(a==strike[k])aux++;
  			if(b==strike[k])aux++; 
			if(c==strike[k])aux++;
			if(d==strike[k])aux++;
			if(f==strike[k])aux++;
			if(g==strike[k])aux++;
			if(h==strike[k])aux++;
			if(i==strike[k])aux++;
		}
  contador++;
	if(contador>=71){//si completamos los 70, significa que desbloqueamos todas sin ninguna
	  return 10;
	}else
	  return aux;
	}
}

