player1=localStorage.getItem("User1");
player2=localStorage.getItem("User2");
document.getElementById("user1").innerHTML=player1;
document.getElementById("user2").innerHTML=player2;


function send(){
    number1 = document.getElementById("no1").value;
number2 = document.getElementById("no2").value;
document.getElementById("question").innerHTML=number1 + "X" + number2;
}