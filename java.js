var x = 0;
var count = 0
while (x < 1){

}
x = prompt("input number");
}


 for (var i = 1 ;i < x; i++){
    if (x%i == 0){
    document.write ('<h1>' + i + '</h1>' );
    count++;
    }

 }
document.write ('<h1>' + x + '</h1>' );
if (count == 1 ){
document.write ('<h2>' + x + ' is prime</h2>' );
}
else{
document.write ('<h2>' + x + ' is not prime</h2>' );
}

