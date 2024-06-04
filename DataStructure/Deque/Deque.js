class Deque {
	#items
	#head = 0
	#last = 0
	constructor(items = {}) {
		this.#items = items
	}

	// 与Queue相同
	removeFront() {
		if (this.isEmpty()) return
		const val = this.#items[this.#head]
		delete this.#items[this.#head]
		this.#head++
		return val
	}

	removeEnd() {
		if (this.isEmpty()) return
    this.#last--
		const val = this.#items[this.#last]
		delete this.#items[this.#last]
		return val
	}

	addFront(data) {
		// 1.如果队列为空
		if (this.isEmpty()) {
			this.addEnd(data)
			return
		}

		// 2.如果刚从队头删除完元素(即 #head > 0),则可在删除的位置加入
		if (this.#head > 0) {
			this.#head--
			this.#items[this.#head] = data
			return
		}

		// 3.如果没有进行任何删除操作,则需要把所有元素往后移一位
		for (let i = this.#last; i > 0; i--) {
			this.#items[i] = this.#items[i - 1]
		}

		this.#items[this.#head] = data

		this.#last++
	}

	// 与Queue相同
	addEnd(data) {
		this.#items[this.#last] = data
		this.#last++
	}

	peekFront() {
		return this.#items[this.#head]
	}

	peekEnd() {
		return this.#items[this.#last - 1]
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
