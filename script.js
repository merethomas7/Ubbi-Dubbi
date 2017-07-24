function mytranslate() {
var str="hello";
var text="";
var i = 0;
while (i < 5) {
  var res= str.charAt(i);
  console.log(res);

  if (res=="e"||res=="a"||res=="i"||res=="o"||res=="u") {
    text=text + "ub" + str.charAt(i);
  }
  else {
    text=text + str.charAt(i);
  }

document.getElementById("demo").innerHTML=text;
  i=i+1;
}

var str="friend";
var text="";
var x = 0;
while (x < 6) {
  var res= str.charAt(x);
  console.log(res2);

if (res=="e"||res=="a"||res=="i"||res=="o"||res=="u") {
  text=text + "ub" + str.charAt(x);
}
else {
  text=text + str.charAt(x);
}
document.getElementById("demo").innerHTML=text;
  x=x+1;
}
}
