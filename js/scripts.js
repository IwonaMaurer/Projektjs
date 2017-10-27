// scripts.js file
  /*var name = prompt('Enter your name');  
  alert('Hello, ' + name);   
console.log('Hello, ' + name);*/

/*var a = 6;
var h = 5;
var triangleArea = a*h/2;
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
alert("Pole wynosi " + triangleArea);*/

var a = 5;
var b = 9;
var value = (a * a) - (2 * a * b) + (b * b);

if (value > 0 ) {
   alert('Wynik dodatni');
} else if (value < 0) {
   alert('Wynik ujemny');
} else {
    alert('Wynik jest równy zero');
};
