import { rand } from 'randjs';
const num = rand(10);
const name = ['Jake', 'Bob', 'Amy', 'Tom', 'Sarah'];
document.getElementById('project1234').innerHTML = `Hello ${name[num]}`;
