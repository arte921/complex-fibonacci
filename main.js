var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
const width = canvas.width
const height = canvas.height

var rmin = -5
var rmax = 5
var imin = -5
var imax = 5

br = rmax - rmin
bi = imax - imin

rres = br/width
ires = bi/height

const p = 1.618033988749895

let rtoc = r => (r-rmin)/br*width
let itoc = i => height-(i-imin)/bi*height
let plot = (r, i) => ctx.fillRect(rtoc(r), itoc(i), 1, 1)

for (let n = rmin; n < rmax; n += 0.001) {
    let a = new Complex(p ** n).sub(new Complex(-1).div(p).pow(n)).div(Math.sqrt(5))
    plot (a.re, a.im)
}