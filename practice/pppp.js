//problem one
function cubeNumber(number){
    if(typeof number !== 'number'){
        return 'pleas provide a number';
    };
    const result = Math.pow(number, 3)
    return result;
}
// console.log(cubeNumber(3))
// console.log(cubeNumber(4))
// console.log(cubeNumber())


// problem tow
function mathFinder(string1, string2){
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'provide the string';
    };
    const result = string1.includes(string2)
    return result
}
// const re = mathFinder('john doe', 'ohn')
// const res = mathFinder('javascript', 'code')
// const resu = mathFinder('peter parker', 'pen')
// const resul = mathFinder('Peter parker', 'pet')
// const result = mathFinder('john doe', true)
// console.log(re, res, resu, resul, result)


// problem three
function kochu(array){
    const [a, b] = array;
    if(a < 0 || b < 0){
        return 'invalid input'
    }
    if(a === b){
        return 'equal'
    }
    if(a > b){
        return [a, b]
    }
    else{
        return [b, a]
    }

}
console.log(kochu([2, 3]))
console.log(kochu([4, 2]))
console.log(kochu([4, 4]))
console.log(kochu([4, -4]))