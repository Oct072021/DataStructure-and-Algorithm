// 保证key，value的原始值
class KeyValue {
	constructor(key, val) {
		this.key = key
		this.value = val
	}
}

class Dictionary {
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

	set(key, val) {
		if (!key || !val) return

		this.dict[this.toString(key)] = new KeyValue(key, val)
	}

	get(key) {
		const val = this.dict[this.toString(key)]
		return !!val ? val : undefined
	}

	remove(key) {
		if (!key) return

		delete this.dict[this.toString(key)]
	}

	keys() {
		return this.KeyValues().map(item => istem.key)
	}

	values() {
		return this.KeyValues().map(item => item.value)
	}

	KeyValues() {
		return Object.values(this.dict)
	}
}
