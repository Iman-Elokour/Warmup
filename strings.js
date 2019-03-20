// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		total = "";
		for(i = 0; i < n; i++){
		 total = total + s;
		}
		return total;
	}