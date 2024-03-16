// The following exercise contains the following subjects:
// ● functions
// Instructions
// Write a function that calculates the circle area by a given radius
// as an argument. Print the area as it is calculated and then print
// it rounded to two decimal places.

function calcArea(radius){
        return Math.PI * radius**2
}

radius = prompt('input radius')
area = calcArea(radius)
console.log(area)
console.log(area.toFixed(2))