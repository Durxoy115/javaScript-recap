const myName = 'Durjoy';
let season = 'Rainy';
season = 'Winter';



// Conditions: <,>, ===, !==, <=, >==
//multiple conditions: &&, ||

if(myName === 'durjoy' && season === 'Winter' ){
    console.log('Passed');
}
else if(myName === 'Durjoy' && season === 'Winter'){
    console.log('It is also passed');
}
else{
    console.log('Failed');
}

const numbers = [33, 39, 89, 13];
numbers[1] = [77];

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}
