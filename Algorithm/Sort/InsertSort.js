function insertSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let temp = arr[i]
		let j = i
		while (j > 0 && arr[j - 1] > temp) {
			arr[j] = arr[j - 1]
			j--
		}

		arr[j] = temp
	}

	console.log(arr)
}

insertSort([5, 4, 3, 2, 1])
