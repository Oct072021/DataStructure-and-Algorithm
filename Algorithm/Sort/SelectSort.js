// 降序，升序同理
function selectSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let max = i
		for (let j = i; j < arr.length; j++) {
			max = arr[j] > arr[max] ? j : max
		}
		const temp = arr[max]
		arr[max] = arr[i]
		arr[i] = temp
	}

	console.log(arr)
}

selectSort([3, 1, 5, 5, 6, 7, 15, 10])