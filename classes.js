const p = 1.61803398875

class Complex {
	constructor (r, i = 0) {
		this.r = r
		this.i = i
	}
    
	plus (other) {
        return new Complex(this.r + other.r, this.i + other.i)
    }
    
    minus (other) {
        return new Complex(this.r - other.r, this.i - other.i)
    }
    
    times (other) {
        return new Complex(this.r * other.r - this.i * other.i, this.r * other.i + other.r * this.i)
    }

    dividedBy (other) {
        let a = this.r
        let b = this.i
        let x = other.r
        let y = other.i
        let r = (a * x + b * y) / (x ** 2 + y)
        let i = (b * x - a * y) / (x ** 2 + y)
        return new Complex(r, i)
    }
    
    abs () {
        return Math.sqrt(this.r ** 2 + this.i ** 2)
    }
}

function complexPow(a, b) { //only works for natural inputs, and only if a < 0
    let r = Math.pow(-a, b) / b
    let i = -Math.pow(-a, b) / b
    return new Complex(r, i)
}