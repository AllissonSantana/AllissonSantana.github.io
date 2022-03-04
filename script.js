var cont = 0;
var cores = function(){
   
    if(cont === 0 ){
        document.body.style.backgroundColor = "green";
        cont = 1;
    }else{
        document.body.style.backgroundColor = "rgba(173, 247, 23)";
        cont = 0;
    }
}

//setInterval( cores ,1000);
