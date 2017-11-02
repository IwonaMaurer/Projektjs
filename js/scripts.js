// scripts.js file
  /*var name = prompt('Enter your name');  
  alert('Hello, ' + name);   
console.log('Hello, ' + name);*/

/*var a = 6;
var h = 5;
var triangleArea = a*h/2;
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
alert("Pole wynosi " + triangleArea);*/


/*
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
*/
/*
 function getTriangleArea(a, h) {
 	var result = a*h/2;
  if (a <= 0 || h <= 0) {
   console.log('Nieprawidłowe dane');
} else if  (a > 0 || h > 0) {
   return result;
};
}
var triangle1Area = getTriangleArea(10, 15);
console.log(getTriangleArea(10, 6));
*/

//zadanie 9.2 

/*var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
   var newName = allNames.push('Marian');
}

*/
// zadanie 9.3

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var textCharsAfter = text.replace('Velociraptor', 'dinosaur');
 var textCharsAfter = text.substr(13, 60);

console.log(textCharsAfter);
