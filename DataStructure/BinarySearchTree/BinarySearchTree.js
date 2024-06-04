class Node {
	constructor(key) {
		this.key = key
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(key) {
		if (!this.root) {
			this.root = new Node(key)
			return
		}

		this.insertNode(this.root, key)
	}

	insertNode(node, key) {
		if (key < node.key) {
			!node.left && (node.left = new Node(key))
			this.insertNode(node.left, key)
		}

		if (key > node.key) {
			!node.right && (node.right = new Node(key))
			this.insertNode(node.right, key)
		}
	}

	inOrderMap(callback) {
		this.orderMap(this.root, callback, 'mid')
	}

	preOrderMap(callback) {
		this.orderMap(this.root, callback, 'pre')
	}

	postOrderMap(callback) {
		this.orderMap(this.root, callback, 'post')
	}

	orderMap(node, callback, order) {
		if (!node) return

		order === 'pre' && callback(node.key)
		this.orderMap(node.left, callback, order)
		order === 'mid' && callback(node.key)
		this.orderMap(node.right, callback, order)
		order === 'post' && callback(node.key)
	}

	min() {
		return this.minFromChild(this.root)
	}

	minFromChild(tree) {
		let current = tree

		while (current && current.left) {
			current = current.left
		}

		return current
	}

	max() {
		return this.maxFromChild(this.root)
	}

	maxFromChild(tree) {
		let current = tree

		while (current && current.left) {
			current = current.left
		}

		return current
	}

	search(key) {
		let current = this.root
		while (current) {
			if (key === current.key) break

			current = key < current.key ? current.left : current.right
		}

		return current
	}

	remove(val) {
		// this.removeNode(this.root, val)

		let current = this.root
		while (current) {
			const key = val < current.key ? 'left' : 'right'
			let next = current[key]

			if (val === next.key) {
				// 无子节点，即最后一个元素
				if (!next.left && !next.right) {
					current[key] = null
					break
				}

				// 一个子节点，即子节点为最后一个元素
				if (!next.left || !next.right) {
					current[key] = next.left ? next.left : next.right
					break
				}

				// 两个子节点，需要找到左子树最大(或右子树最小)的节点，用此节点替换
				if (next.left && next.right) {
					//  const target=this.maxFromChild(next.left)
					const target = this.minFromChild(next.right)

					this.remove(target.key)

					current[key].key = target.key

					break
				}
			}

			current = next
		}
	}

	removeNode(node, key) {
		if (!node) return
		if (key < node.key) {
			node.left = this.removeNode(node.left, key)
			return node
		} else if (key > node.key) {
			node.right = this.removeNode(node.right, key)
			return node
		} else {
			if (!node.left && !node.right) {
				node = null
				return node
			}

			if (!node.left) {
				node = node.right
				return node
			} else if (!node.right) {
				node = node.left
				return node
			}

			const target = this.minFromChild(node.right)
			node.key = target.key

			node.right = this.removeNode(node.right, target.key)
			return node
		}
	}
}
