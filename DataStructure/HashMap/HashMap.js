// 保证key，value的原始值
class KeyValue {
	constructor(key, val) {
		this.key = key
		this.value = val
	}
}

class HashMap {
	constructor(dict = {}) {
		this.dict = dict
	}

	toString(item) {
		if (typeof item === 'string' || item instanceof String) return item

		switch (item) {
			case null:
				return 'NULL'
			case undefined:
				return 'UNDEFINED'
			default:
				return JSON.stringify(item)
		}
	}

	hasKey(key) {
		return !!this.dict[this.toString(key)]
	}

	hashCode(key) {
		if (typeof key === 'number' || key instanceof Number) return key

		const newKey = this.toString(key)
		let hash = 5381
		for (let str of newKey) {
			hash = hash * 33 + str.charCodeAt()
		}

		return hash % 1013
	}

	set(key, val) {
		if (!key || !val) return

		this.dict[this.hashCode(key)] = new KeyValue(key, val)
	}

	get(key) {
		const val = this.dict[this.hashCode(key)]
		return !!val ? val : undefined
	}

	remove(key) {
		if (!key) return

		delete this.dict[this.hashCode(key)]
	}

	keys() {
		return this.KeyValues().map(item => item.key)
	}

	values() {
		return this.KeyValues().map(item => item.value)
	}

	KeyValues() {
		return Object.values(this.dict)
	}
}
