function miniMaxSum(arr) {
	if (Array.isArray(arr)) {
		let sum = arr.reduce((a, b) => a + b, 0);
		let min = sum - Math.max(...arr);
		let max = sum - Math.min(...arr);
		console.log(min, max);
		console.log(sum);
	}
}

miniMaxSum([1, 2, 3, 4, 5]);
