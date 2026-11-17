function insertionSort(arr) {
	let j = 0;
	let n = 0;

	for (let i=1; i < arr.length; i++) {
		j = i
		n = arr[i];
		while (j > 0 && arr[j - 1] >  n) {
			arr[j] = arr[j - 1];
			j = j - 1
		}

		arr[j] = n;
		
	}
	return arr

}

console.log(insertionSort([34, 12, 89, 1, 56, 23, 7, 90, 3, 45, 11]));
