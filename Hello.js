console.log('Hello World')

let name = 'Daman'
let todaytemp = 65

console.log(name)
console.log(todaytemp)

function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    } 
    return false 
}

console.log(validGPA(-1))     // false 
console.log(validGPA(0))      // true
console.log(validGPA(3.5))    // true
console.log(validGPA(4))      // true
console.log(validGPA(10))  

function citySateAddress(city, state){
    state = state.toUpperCase()
    address = `${city}, ${state}` 
    return address
}

address = citySateAddress('Minneapolis', 'MN')
console.log(address)
