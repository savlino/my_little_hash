let hash = function(str) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash += str.charCodeAt(i) * 2;
	};
	return hash;
};


let hashFunc = function() {
	let result = [];

	this.push = function(val) {
		let curr = hash(val);
		if (!result[curr]) {
			result[curr] = val;
		};
	};

	this.check = function(val) {
		let curr = hash(val);
		if (result[curr]) {
			return result[curr];
		} else {
			return undefined;
		}
	};
}
