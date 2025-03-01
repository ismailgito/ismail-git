var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";//<----konjam confusion iruku
var randomImgSrc="images/"+randomDiceImage;
var image=document.querySelectorAll("img")[0];//<----konjam confusion iruku only [0] is used
image.setAttribute("src",randomImgSrc);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";//<----konjam confusion iruku
var randomImgSrc2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];//<----konjam confusion iruku only [0] is used
image2.setAttribute("src",randomImgSrc2);

//if else statement
if(randomNumber1>randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML="player 1 wins";
    var count1=randomNumber1++;
}
else if(randomNumber1<randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML="player 2 wins";
    var count2=randomNumber2++;
}else{
    document.querySelectorAll("h1")[0].innerHTML="Draw";
}
//function called to display the winner
function winner(){
    var resultElement = document.getElementById("r1");//<---- this is the main problem now alhamdulillah i go
    if(count1>count2){
        resultElement.innerHTML="player 1 wins";
            return count1;
    }else if(count1<count2){
        resultElement.innerHTML="player 2 wins";
            return count2;
    }else if(count1==count2){
        resultElement.innerHTML="Draw";
    }
}


