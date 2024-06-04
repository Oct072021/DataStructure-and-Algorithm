/**
 * 传统封装方式
 * 由于Queue结构具有‘先进先出’的特性
 * 因此使用数组方式封装具有性能问题
 * 例如：调用数组的unshift()方法时，删除头一个元素之后，后续元素全都要往前移动，因此这个操作改动了数组的全部元素
 */
class Queue_1 {
	#items
	constructor(arr = []) {
		this.#items = arr
	}

	dequeue() {
		return this.#items.shift()
	}

	enqueue(data) {
		this.#items.push(data)
	}

	front() {
		return this.#items.at(0)
	}

	isEmpty() {
		return this.#items.length === 0
	}

	size() {
		return this.#items.length
	}

	clear() {
		this.#items = []
	}
}

/**
 * 使用对象的方式代替数组
 * 解决上述缺点
 */
class Queue_2 {
	#items
	#last
	#head
	constructor(obj = {}) {
		this.#items = obj
		this.#last = 0 // 队尾
		this.#head = 0 // 队头
	}

	dequeue() {
		if (this.isEmpty()) return
		const val = this.#items[this.#head]
		delete this.#items[this.#head]
		this.#head++
		return val
	}

	enqueue(data) {
		this.#items[this.#last] = data
		this.#last++
	}

	front() {
		return this.#items[this.#head]
	}

	isEmpty() {
		return this.size() === 0
	}

	size() {
		return this.#last - this.#head
	}

	clear() {
		this.#items = {}
	}

	toString() {
		let str = ''
		Object.keys(this.#items).forEach(item => {
			str += this.#items[item]
		})

		return str
	}
}
