const message = document.querySelector(".message p"),
    button = document.querySelectorAll("button");
var win=0,loss=0;
for(var i=0;i<button.length-1;i++){
    button[i].addEventListener("click",tossCoin)
}
function tossCoin(e){
    let computerToss = Math.floor(Math.random() * 2),
      clientToss = e.target.innerHTML;
    switch(computerToss){
        case 1:
            computerToss="Heads";
            break;
        case 0:
            computerToss="Tails";
            break;
    }
    if(computerToss==clientToss){
        win++;
        message.innerHTML="You Win <br> Win : "+win+"<br> Loss : "+loss;
    }else{
        loss++;
        message.innerHTML =
          "You Loss <br> Win : " + win + "<br> Loss : " + loss;
    }
}
function resetGame(){
    message.innerHTML = "Select either heads or tails !";
    win=0;
    loss=0;
}