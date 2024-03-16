// JavaScript – functions
// The following exercise contains the following subjects:
// ● functions
// Instructions
// 1. Write a function called ‘countryInfo’ which takes three
// parameters: 'country', 'population' and 'capitalCity'. Based
// on this input, the function returns a string with this format:
// ‘Spain has 47 million people and its capital city is Madrid’
// 2. Call this function 3 times, with input data for 3 different
// countries. Store the returned values in 3 different
// variables, and log them to the console.

function countryInfo(country, population, capitalCity){
        return country + ' has ' + population + ' people and its capital city is ' + capitalCity
}

let info_first_country = countryInfo(prompt('Input country'), prompt('Input population'), prompt('Input capital city'))
let info_second_country = countryInfo(prompt('Input country'), prompt('Input population'), prompt('Input capital city'))
let info_third_country = countryInfo(prompt('Input country'), prompt('Input population'), prompt('Input capital city'))

console.log(info_first_country)
console.log(info_second_country)
console.log(info_third_country)