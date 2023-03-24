var b = 1;
function someFunction(number) { 
        function otherFunction(input) {
        return b;
        }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9); // get the otherFunction and change the value of b=5
var result = firstResult(2); //result = 5

/********************************************************************************************/

var a = 1;
function b2() {
    a = 10; // local 
    return;
    function a() {}
}
b2();
console.log(a); // a=1


/********************************************************************************************/
let i;
    for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);//print 3 times 3 
    }
    setTimeout(log,100);
}
