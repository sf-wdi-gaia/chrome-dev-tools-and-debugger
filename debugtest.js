var myFunction = function(a){
    console.log('hello from my function, ', a);
    a = a+1;
 
    myOtherFunction(a);
}

var myOtherFunction = function(a){
    a = a*10;    
    console.log('hello from my other function, ', a);
}

myFunction(3);