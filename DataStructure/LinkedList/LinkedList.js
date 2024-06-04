class Node {
	constructor(element) {
		this.element = element
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.length = 0
	}

	append(element) {
		const node = new Node(element)
		this.length++

		if (!this.head) {
			this.head = node
			return
		}

		let current = this.head
		while (current.next) {
			current = current.next
		}
		current.next = node
	}

	removeAt(index) {
		if (index < 0 || index >= this.length) return

		this.length--

		if (index === 0) {
			this.head = this.head.next
			return
		}

		// let prev = null
		// let current = this.head
		// for (let i = 0; i < index; i++) {
		// 	prev = current
		// 	current = current.next
		// }
		const prev = this.getNodeByIndex(index - 1)
		const current = prev.next
		prev.next = current.next

		return current.element
	}

	getNodeByIndex(index) {
		if (index < 0 || index >= this.length) return

		let current = this.head
		for (let i = 0; i < index; i++) {
			current = current.next
		}

		return current
	}

	findIndex(element) {
		let current = this.head
		for (let i = 0; i < this.length; i++) {
			if (current.element === element) return i
			current = current.next
		}
		return -1
	}

	remove(element) {
		const index = this.findIndex(element)
		if (index === -1) return

		const removeElement = this.removeAt(index)
		this.remove(element)

		return removeElement
	}

	insert(element, index) {
		if (index < 0 || index > this.length) return
		const node = new Node(element)

		if (index === 0) {
			const head = this.head
			node.next = head
			this.head = node

			this.length++

			return true
		}

		const prev = this.getNodeByIndex(index - 1)
		const current = prev.next
		node.next = current
		prev.next = node

		this.length++

		return true
	}

	size() {
		return this.length
	}

	isEmpty() {
		return this.size() === 0
	}

	getHead() {
		return this.head
	}
}
