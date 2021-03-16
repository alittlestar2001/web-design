var name ="Cosette, nice to meet you!";
alert("Hello " + name);

var name ="Cosette";
var age = 20;
var isGirl = true;
var fruits = ["apple","banana","orange"];

alert(name);
alert(age);
alert(isGirl);
alert(fruits[2]);

function addition(num){
return num+5;
}
var age = 20;
var trueage= addition(age);
alert(trueage);


var age2 = 15;
var trueage2= addition(age2);
alert(trueage2);

function test(){
	a     = 123;
	var b = 456;
	if(a  == 123) var c = 789;
}

document.getElementById("byid").innerHTML = "我來自id";
document.getElementById("byid").style.color = "green";

document.getElementsByClassName("byclass")[0].innerHTML = "我來自class";
document.getElementsByClassName("byclass")[0].style.fontSize = "60px";

document.getElementsByTagName("div")[2].innerHTML = "我來自Tag";
document.getElementsByTagName("div")[2].style.fontFamily = "標楷體";

document.getElementsByTagName("p")[0].innerHTML = "123";
document.getElementsByTagName("p")[0].style.fontFamily = "標楷體";
document.getElementsByTagName("p")[0].style.color = "red";
document.getElementsByTagName("p")[0].style.fontSize = "100px";

