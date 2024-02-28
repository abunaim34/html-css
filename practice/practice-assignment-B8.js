// problem one

function cubeNumber(number) {
    if (typeof number !== 'number') {
        // return 'pleas provide a number'
    }
    const result = Math.pow(number, 3);
    // return result;
}
// console.log(cubeNumber());


// problem tow
// function mathFinder(string1, string2){
//     if(typeof string1 !== 'string' && typeof string2 !== 'string'){
//         // return 'pleas provide a string as paramiter'
//     }
//     const result = string1.includes(string2)
//     // return result;

// }
// console.log(mathFinder('john doe', 52))
// console.log(mathFinder('javascript', 'code'))


// problem three
function sortMaker(arr) {
    const [a, b] = arr;
    if (a < 0 || b < 0) {
        return 'invalide input';
    }
    if (a === b) {
        return 'equal'
    }
    if (a > b) {
        return [a, b]
    }
    else {
        return [b, a]
    }
}
// console.log(sortMaker([2, 3]))
// console.log(sortMaker([4, 2]))
// console.log(sortMaker([4, 4]))
// console.log(sortMaker([2, -2]))


// problem four
function finAdress(object) {
    const street = object.street || '__';
    const house = object.house || '__';
    const city = object.city || '__';

    const str = street + ' ' + house + ' ' + city;
    return str;
}
// console.log(finAdress({ street: 10, house: '15A', city: 'noakhli'}))
// console.log(finAdress({ street: 10, city: 'noakhli'}))
// console.log(finAdress({ street: 10,}))


// problem five
function canPay(changArray, totalDue){
    if(changArray.length == 0){
        return 'pleas provid a kochu'
    }

    let sum = 0;
    for(let i = 0; i < changArray.length; i++){
        const eliment = changArray[i] 
        sum = sum + eliment
    }
    
    if(sum >= totalDue){
        return true;
    }
    else{
        return false;
    }

}

console.log(canPay([]))
console.log(canPay([1, 2, 5], 10))
console.log(canPay([1, 5, 5], 10))