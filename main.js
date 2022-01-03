function user_send(){
    user_name = document.getElementById("name1").value;
    console.log("The name of the user is "+user_name);
    localStorage.setItem("User 1", user_name)
    window.location="gamepage.html";
}

function user2_send(){
    user_name2 = document.getElementById("name2").value;
    console.log("The name of the user is "+user_name2);
    localStorage.setItem("User 2", user_name2)
    window.location="gamepage.html";
}