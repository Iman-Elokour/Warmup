/* 
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/

function twoSum(arr,num){
	var x = arr[0];
	for(i = 0; i < arr.length; i++){
		if(x + arr[i] === num){
			console.log(x, arr[i])
		}else{
			x = arr[i];
		}
	}
}

