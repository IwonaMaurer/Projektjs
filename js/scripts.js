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

// zadanie 9.1

 /*function getTriangleArea(a, h) {
 	
  if (a <= 0 || h <= 0) {
   return 'Nieprawidłowe dane';
} else if  (a > 0 && h > 0) {
  var result = a*h/2;
   return result;
};
}
var triangle1Area = getTriangleArea(9, 15);
console.log(triangle1Area);

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

/*
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased)
console.log(textCharsAfter);

var textLength = text.length/2
var partOfText = text.slice(0,text.length/2);
console.log(partOfText);

// zadanie 9.4
function drawTree(heightTree){
  
for ( var i = 1; i <= heightTree; i++) {
    var star = ' ';
        for ( var j = 1; j <=i; j++){
        star += "*";
        }
        console.log(star);
        }
     
}
drawTree(5);
*/
         // zadanie 9.5
         /*
var withButtonClass = document.getElementsByClassName('button');

for (var i = 0; i < withButtonClass.length; i++) {
	 var buttonText = withButtonClass[i].innerText;
             console.log(buttonText);
 }
 */
/*
// zadanie 9.6
var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
    var list1 = document.getElementsByTagName("li").length + 1;
  var element = document.createElement('li');
  element.innerHTML = 'item' + list1;
    console.log(document.getElementsByTagName("li"));
     list.appendChild(element);
  
   });
*/



