 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	newNum = num.toString()
 	arr = newNum.split("")
 	if(arr[1] < 5){
 		arr[1] = 0;
 	} 
 	var str = arr.join("")
 	return Number(str)
 }