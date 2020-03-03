module.exports = function toReadable (number) {
	let a = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  let b = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let res = '';

	if(number < 20){
  	res = a[number];
  }
  else if(number >= 20 && number <100){
  	res = number%10 == 0 ? b[Math.floor(number/10) - 2] : b[Math.floor(number/10) - 2] + " " + a[number%10];
  }
  else if(number >= 100 && number <1000){
  	if (number%100 == 0){
    	res = a[Math.floor(number/100)] + " hundred";
    }
  	else{
    let tempHund = Math.floor(number/100);
    let newNumber = number -  tempHund*100;
    
    res = a[tempHund] + " hundred " +  toReadable(newNumber);
    }
  }

return res;
}
