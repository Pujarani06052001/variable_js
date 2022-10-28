var greet = "Hello " // global variable

function myfunction(){
    var msg = "JavaScript!"; //local variable
    console.log(greet + msg); 
}

myfunction();
		
console.log(greet);//can access global variable
console.log(msg); //error: can't access local variable