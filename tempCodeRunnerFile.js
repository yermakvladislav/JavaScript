function insertionSort(arr) {
	let j = 0;
	let n = 0;
	for (let i=1; i < arr.length; i++) {
		j = i
		n = arr[i];
		arr.splice(i, 1);
		while (j > 0 && arr[j - 1] >  n) {
			arr[j] = arr[j - 1];
			j = j - 1
			
		}

		
		arr.splice(j, 0, n);
		
	}
	return arr
}


console.log(insertionSort([34, 12, 89]));