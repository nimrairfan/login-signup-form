function showPass(e){
    var passInput= document.getElementById("passInput");
    console.log(e.className)
    if(e.className === "fas fa-lock"){
        e.className = "fas fa-unlock" 
        passInput.type = "text" 
    }else{
        e.className = "fas fa-lock"
        passInput.type = "password  " 

    }
}
