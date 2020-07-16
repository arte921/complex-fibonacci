class Complex {
	constructor (r, i = 0) {
		this.r = r
		this.i = i
	}
    
	plus = (other) => new Complex(this.r + other.r, this.i + other.i)
    
    minus = (other) => new Complex(this.r - other.r, this.i - other.i)
    
    times = (other) => new Complex(this.r * other.r - this.i * other.i, this.r * other.i + other.r * this.i)

    div (other) {
        let a = this.r
        let b = this.i
        let x = other.r
        let y = other.i
        let r = (a * x + b * y) / (x ** 2 + y)
        let i = (b * x - a * y) / (x ** 2 + y)
        return new Complex(r, i)
    }

    pown (n) {
        let o = this.angle()
        let a = this.abs()
        let r = a * Math.cos(n * o)
        let i = a * Math.sin(n * o)
        // console.log(n, o, a, r, i)
        return new Complex(r, i)
    }

    abs = () => Math.sqrt(this.r ** 2 + this.i ** 2)

    angle = () => Math.atan(this.i / this.r)

}