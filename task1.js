function bubbleSort(arr) {
	for (let o=0; o<999; o++){
	let b = 0;
			for (let i=0; i < arr.length - 1; i++) {

					if (arr[i] > arr[i + 1]) {
						let u=arr[i];
						b = 1
						arr.splice(i, 1, arr[i + 1]);
						arr.splice(i + 1, 1, u);
					}

			}

			if (b == 0) {
							break
						}
		
	}
	return arr
}


console.log(bubbleSort([34, 12, 89, 1, 56, 23, 7, 90, 3, 45, 11]));
