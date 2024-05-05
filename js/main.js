'use strict';


let userName = prompt('inserisci il tuo nome');
let userSubName = prompt('inserisci il tuo cognome');
let usercolor = prompt('inserisci il tuo colore preferito');
let firstNumber = Number(prompt('inserisci il primo numero'));
let secondNumber = Number(prompt('inserisci il secondo numero'));

let password = 'voidpassword';

password = userName + userSubName + usercolor + 21;

console.log(password);

password = userName + userSubName + usercolor + Math.trunc(firstNumber / secondNumber);

console.log(password);

document.getElementById('new-password').innerHTML = password;
document.getElementById('new-password-two').innerHTML = password = usercolor + userName + userSubName + Math.trunc(secondNumber / firstNumber);
document.getElementById('new-password-three').innerHTML = password = userSubName + usercolor + userName + Math.trunc((secondNumber - firstNumber) / 2);
document.getElementById('new-password-four').innerHTML = password = userSubName + userName + Math.trunc(Math.random() * (secondNumber+firstNumber)) + usercolor ;






