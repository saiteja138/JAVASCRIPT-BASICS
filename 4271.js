function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'A number cannot be divided by zero';
        default:
            return 'Invalid operator';
    }
}

console.log("1st code OUTPUT:");
console.log("Simple calculator calculations are:");
console.log(calculator(5, 3, '+'));  
console.log(calculator(10, 2, '-')); 
console.log(calculator(7, 2, '*'));  
console.log(calculator(9, 3, '/'));  
console.log(calculator(7, 2, '%'));  
console.log(" ");

function sumOddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {  
            sum += arr[i];
        }
    }
    return sum;
}

console.log("2nd code OUTPUT:");
console.log(sumOddNumbers([4, 5, 7, 9, 1, 12]));  
console.log(sumOddNumbers([2, 5, 8, 8, 3, 10])); 
console.log(" ");
const Person = {
    firstName: 'Saiteja',
    lastName: 'Bathula',
    age: 20,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    incrementAge() {
        this.age += 1;
    }
};

console.log("3rd code OUTPUT:");
console.log("Name and age:");
console.log(Person.getFullName());  
Person.incrementAge();
console.log(Person.age);