var ran1=Math.random()*6+1;
ran1=parseInt(ran1);
var ran2=Math.random()*6+1;
ran2=parseInt(ran2);
var str1="images/dice"+ran1+".png";
var str2="images/dice"+ran2+".png";
document.querySelector(".img1").setAttribute("src",str1);
document.querySelector(".img2").setAttribute("src",str2);
if(ran1>ran2){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(ran2>ran1){
  document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
