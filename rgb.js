var allSquares=document.querySelectorAll(".square")
var colors=generateColors(6)

var colorDisplay =document.getElementById("colorDisplay")
var pickColor=	pickColors()
colorDisplay.textContent=pickColor;
var win=document.getElementById("win")
var status=document.getElementById('status')
var gameStatus=document.querySelector(".game-status")
function pickColors(){
bg=Math.floor(Math.random()*colors.length)
return colors[bg]
}

function colorAll()
{
allSquares.forEach(function (ele,index) {
ele.style.background = colors[index]


// body...
})
}
colorAll()	


var hard=document.querySelector("#hard")
var easy=document.querySelector("#easy")
/*
function choice(mode)

{
if(mode == 3)
{
win.innerHTML=' '
easy.classList.add('isactive')
hard.classList.remove('isactive')
colors=generateColors(mode);
pickColor=pickColors();
colorDisplay.textContent=pickColor;
for(var i=0;i<allSquares.length;i++)
{

if(colors[i])
{
allSquares[i].style.background=colors[i];
}
else{
allSquares[i].style.display='none'
}
}

}

else{

for(var i=0;i<allSquares.length;i++)
{
allSquares[i].style.display='block'

allSquares[i].style.background=colors[i];

}



}


}


*/


easy.addEventListener("click",function(){
win.innerHTML=' '
status.innerHTML='New color ';
easy.classList.add('isactive')
hard.classList.remove('isactive')
colors=generateColors(3);
pickColor=pickColors()
colorDisplay.textContent=pickColor;
for(var i=0;i<allSquares.length;i++)
{
if(colors[i])
{
allSquares[i].style.background=colors[i];
}
else{
	allSquares[i].style.transition='all 2s ease-in-out';

allSquares[i].style.display='none'
}
}

})





hard.addEventListener("click",function(){
win.innerHTML=' '
status.innerHTML='New color'
easy.classList.remove('isactive')
hard.classList.add('isactive')
colors=generateColors(6);
pickColor=pickColors()
colorDisplay.textContent=pickColor;
for(var i=0;i<allSquares.length;i++)
{
allSquares[i].style.display='block'

allSquares[i].style.background=colors[i]

}


})




function CheckColor()
{
var win=document.getElementById("win")
var status=document.getElementById('status')
console.log(win,status)

allSquares.forEach(function(ele,index){
n=6;
ele.addEventListener('click',function(){

console.log('you',ele.style.backgroundColor)
if(ele.style.backgroundColor ==colorDisplay.textContent)

{
status.innerHTML='Play again :)'
win.innerHTML="You got it !!!"
win.style.color='green'

gameStatus.style.transition='all 2s ease-in-out';

gameStatus.classList.add("move-down")

setTimeout(function(){
	gameStatus.style.transition='all 2s ease-in-out';

  gameStatus.classList.remove('move-down')

},2000)
allSquares.forEach(function(ele)
{

ele.style.backgroundColor=colorDisplay.textContent
})

}

else{
win.innerHTML="Try again !!!"
win.style.color='red'
console.log('no',colorDisplay.textContent)
this.classList.add("noColor")
this.style.backgroundColor='black'
this.style.transition='all .8s'
n=n-1

}

})
})
}


CheckColor()




function reset()
{
win.innerHTML=' '
status.innerHTML=''

colors=generateColors(6);

allSquares.forEach(function(ele,index)
{
ele.style.backgroundColor=colors[index]
})
var pickColor=	pickColors()
colorDisplay.textContent=pickColor;



}






function generateColors(num){
arr=[]
for(var i=0;i<num;i++)
{
arr.push(randomColors())
}
return arr;
}




function randomColors(){
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
color='rgb('+r+', '+g+', '+b+')';
return color

}
co=randomColors();
/*

function random(argument) {
a=	randomColor[Math.floor(Math.random()*randomColor.length)]
colorDisplay.textContent=a;

// body...
}
random()*/