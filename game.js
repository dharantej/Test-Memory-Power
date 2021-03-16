console.log($('h1'));
var buttonColours=['red','blue','green','yellow'];
var gamePattern=[];
var level;
function nextSequence()
{
  document.querySelector('h1').innerHTML='Level '+level;
  var randomNumber=Math.floor(Math.random()*4);
  console.log(randomNumber);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  //$('.'+randomChosenColour).animate({opacity:0}).animate({opacity:1});
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
  console.log(gamePattern);
}
var userClickedPattern=[];
  var i,j;
  var x=false;
$('.btn').click(function(){
  var userChosenColour;
  userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
console.log(userClickedPattern);
if(gamePattern[i]!=userClickedPattern[j])
{
  document.querySelector('h1').innerHTML='Game over ,press anykey to restart';
  playSound('wrong');
  $('body').addClass('game-over');
  setTimeout(function(){$('body').removeClass('game-over')},200);
  gamePattern=[];
  userClickedPattern=[];
  x=false;
}
else{
  i++;
  j++;
  if(i==level)
  {
    level++;
    i=0;
    j=0;
    userClickedPattern=[];
    setTimeout(function(){nextSequence();},750);

  }
}

});
function playSound(name)
{
  var audio=new Audio('sounds/'+name+'.mp3');
  audio.play();
}
function animatePress(name)
{
  //$('#'+name).fadeOut().fadeIn();
  var header = $('#'+name);
header.addClass('pressed');
setTimeout(function() {
    header.removeClass('pressed');
}, 100);
}


//starts the game
document.addEventListener('keydown',function(){
  if(x==false)
  {
    level=1;
    x=true;
    i=0;
    j=0;
  setTimeout(function(){nextSequence();},650);
}
});
