var p1, p2, n1;
var num=0;

function adddetail(){
	num=parseInt(num)+1;
	p1 = document.getElementById("pswd1").value;
	p2 = document.getElementById("pswd2").value;
	n1 = document.getElementById("name1").value;
	if((p1==p2)&& (p1!=""))
	{	
	localStorage.setItem("name1",n1);
	window.location="book.html";
	}
	else if(num<6){
		document.getElementById("p1").innerHTML="password dosen't match";
		localStorage.setItem("num1",num);
	}
	else{
		document.getElementById("p1").innerHTML="Reached to maximum attempt";
		document.getElementById("btn1").style.display="none";
	}
}

function backpage()
{
	window.location="index.html";
}

function ShowUser(){
	p1=localStorage.getItem("name1");
	num=localStorage.getItem("num1");
	document.getElementById("hd2").innerHTML="Welcome "+p1.toString();
}
