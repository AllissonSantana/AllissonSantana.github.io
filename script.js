var cont = 0;
setInterval(function(){
   
    if(cont === 0 ){
        document.body.style.backgroundColor = "green";
        cont = 1;
    }else{
        document.body.style.backgroundColor = "rgba(173, 247, 23)";
        cont = 0;
    }
},1000);
