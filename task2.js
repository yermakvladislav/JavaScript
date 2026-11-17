function selectionSort(arr) {
	let minNumber = arr[0];
	let minIndex = 0;
	let index = -1;

	for (let o=0; o<arr.length; o++){
		
		let minNumber = arr[o];
    let minIndex = o;
		for (let i=o; i < arr.length; i++) {
			if (minNumber > arr[i]) {
				minNumber = arr[i]
				minIndex = i
			}
		
		}
		u = arr[o]
		arr.splice(o, 1, minNumber);
		arr.splice(minIndex, 1, u);

		
	}
	return arr
}

console.log(selectionSort([34, 12, 89, 1, 56, 23, 7, 90, 3, 45, 11]));
