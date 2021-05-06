function rate(id){
    for(var i=1 ; i<=5 ; i++){
        if(i<=id){
            document.getElementById(i).style.color="rgb(238, 91, 5)";
        }
        else{
            document.getElementById(i).style.color='black';
        }
    }
}