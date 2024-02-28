function sum(number){
    const total = number * number
    return total
}
const te = sum(4, 5, 2, 3)
// console.log(te)

function vag(number){
    if(number % 2 === 1) {
        const total = number * 2;
        return total;
    }
    else if(number % 2 === 0){
        const total = number / 2;
        return total
    }
}
const vaju = vag(51)
const vajuk = vag(52)
// console.log(vaju, vajuk)

// function countZero(number){
//     const bar = number.length
//     return bar
// }

// const ce = countZero('10100010')
// console.log(ce)


function oddEven(number){
    if(number % 2 === 0){
        return number
    }
    else{
        return number
    }
}
const bar = oddEven( parseInt(12.25))
console.log(bar)