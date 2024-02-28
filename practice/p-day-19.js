// -------------TASK ONE ----------------
const color = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

// console.log(color['golden rod'])


// ----------------TASK TOW--------------
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

const passenger = 'passenger';
car[passenger] = 5;
// console.log(car)


// ----------------TASK THREE---------
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
// console.log(student.physics)

// -----------------TASK ------------
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// colors.reverse()
// const rev_color = colors.reverse()

// console.log(rev_colors)

const rev_colors = []
for(const color of colors){
    rev_colors.unshift(color)
}
// console.log(rev_colors)

for(let i = colors.length -1; i >= 0; i--){
    let color = colors[i]
    // console.log(color)
    rev_colors.push(color)
}
// console.log(rev_colors)


// ----------------TASK TOW------------
const numbers = [12, 98, 5, 41, 23, 78, 46];

for(const num of numbers){
    if(num % 2 === 0){
        // console.log(num)
    }
}


//------------TASK THREE -------------
var names = ['Tom', 'Tim', 'Tin', 'Tik']


//  console.log(names.join(''))


// -------------------TASK FOUR------------
const statement = 'I am a hard working person'








const mixa ={
    nam: 'jalaine',
    num: 20,
    date: '10 feb',
    pass: true,
    'fav class': 'jakir',
    others:{
        hedaya: "eto eot",
        numbe: 70,
        bab: ['toharot', 'salat', 'soum']
    }
}

mixa.num = 80;
mixa['date'] = '18 jan';
mixa['fav class']= ['meshkat', 'bayjabi'];

const kochu = 'pass'
mixa[kochu] = 'false';
// console.log(mixa);

const colo = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

// console.log(colo["golden rod"])


const ca = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

const passengerCapacity = 'passengerCapacity';
ca[passengerCapacity]= 5
console.log(ca)