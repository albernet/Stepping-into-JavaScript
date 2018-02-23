/*Assignment CHECK POINT Challebges 001
*********number 1******** */

function primeCheck(p){

	if(p===1){
		return false;
	}
	else if(p===2){
		return true;
	}
	else{
		for(var a = 2; a < p ; a++){
			if(p % a === 0){
				return false;
			}		
		}
		return true;	
	}		
}

console.log("The number is a prime: true/false: " + primeCheck(19));



/* ******number 2***** */
var myNum = 20;

if (myNum >= 21) {
		console.log ("You are allowed to drink alcohol in PA");

}else {
		console.log ("You are NOT allowed to drink alcohol in PA");
}








/* *******number 3- keep counting********/
for (a = 0; a < 15; a++){
	if (a == 5 || a == 3){
		
	continue;		
	}
	console.log(a)

	if ( a==15){
		break;
	}
}
console.log("Professor, I am tired of counting")






/* *******number 4- true and false******** */
 


function tester(a){
	
	if(a > 1 && a < 10){
		return true;
	} 
	else{
		return false;
	}
	
}

console.log(tester(5));
	
	





	/* *******number 5******** */
	

var str = "This is for my challenge assignment number 5.";
var res = str.split(" ");
	
console.log(res);






    /* *******number 6******** */


document.getElementById("myChatter").innerHTML = "Hello Brian, Brian Hello, Umm Hello, , Brian you there? Hello!!!!!!!";






