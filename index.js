function check(input) {
	let open = ['(', '[', '{'];
  let closed = [')', ']', '}'];
	let stack = [];

    for (let element of input) {
    	if (open.includes(element)) {
    		stack.push(element)
    	} else if (closed.includes(element)) {
    		let index = closed.indexOf(element);
    		prevElement = open[index]
    		if (prevElement == stack[stack.length - 1]) {
    			stack.pop()
    		} else {
    			return false
    		}
    	}
	}
	return true	
}
