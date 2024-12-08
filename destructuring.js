const numbers = [11, 22, 33, 44];

const [x, y, z] = [11, 22, 33, 44];
console.log(x,y,z);

function boxify(num1, num2){
    const nums = [num1, num2]
    return nums;
}
console.log(boxify(45,90));

const employee = {
    ide: 'VS Code',
    designation: 'Developer',
    machine: 'Mac',
    language: ['html', 'CSS', 'JS'],
    specification: {
        height: 55,
        weight: 2,
        drink: 'watter'
    }
}
const employee1 = employee.designation;
console.log(employee1);