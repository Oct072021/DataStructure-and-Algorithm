class Stack {
	#items
	constructor(arr = []) {
		this.#items = arr
	}

	pop() {
		return this.#items.pop()
	}

	push(data) {
		this.#items.push(data)
	}

	peek() {
		return this.#items.at(-1)
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

	toString() {
		return this.#items.join('')
	}
}
