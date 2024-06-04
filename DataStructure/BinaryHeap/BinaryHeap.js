// 具有完全二叉树的性质，因此父子节点存在2x+1和2x+2的关系
class MinBinaryHeap {
	constructor() {
		this.heap = []
	}

	getLeftIndex(index) {
		return index * 2 + 1
	}

	getRightIndex(index) {
		return index * 2 + 2
	}

	getParentIndex(index) {
		return Math.floor((index - 1) / 2)
	}

	insert(val) {
		this.heap.push(val)

		let index = this.heap.length - 1
		let parent = this.getParentIndex(index)
		while (index > 0 && val < this.heap[parent]) {
			const temp = this.heap[parent]
			this.heap[parent] = val
			this.heap[index] = temp

			index = parent
			parent = this.getParentIndex(index)
		}
	}

	min() {
		return this.heap[0]
	}

	remove() {
		if (this.heap.length === 0) {
			return
		}
		if (this.heap.length === 1) {
			return this.heap.shift()
		}

		const removed = this.heap[0]
		this.heap[0] = this.heap.pop()

		let index = 0
		let left = this.getLeftIndex(index)
		let right = this.getRightIndex(index)
		while (left < this.heap.length || right < this.heap.length) {
			const min = left < right ? left : right

			const temp = this.heap[min]
			this.heap[min] = this.heap[index]
			this.heap[index] = temp

			index = min
			left = this.getLeftIndex(index)
			right = this.getRightIndex(index)
		}

		return removed
	}
}
