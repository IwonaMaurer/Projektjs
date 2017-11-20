
//Start jQuery
/*
$(document).ready(function (){

$(function(){
  var carouselList = $("#carousel ul");  //this code will execute after the DOM is loaded
});

 $(document).ready(function(){
        setinterval(function(){
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
        }, 2000); 

        });

function moveFirstSlide() {
       var firstItem = carouselList.find("li:first");
       var lastItem = carouselList.find("li:last");
       lastItem.after(firstItem)
       carouselList.css({marginLeft:0});
    }
};
*/

//zadanie 11.4

/*

function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
}
Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", color is " + this.color + " and price is " + this.price + ".");
}
var iPhone6S = new Phone("Aplle", 2250, "sliver");
var SamsungGalaxyS6 = new Phone("Samsung", 1420, "black");
var OnePlusOne = new Phone("OnePlus", 1000, "black");


iPhone6S.printInfo();



function Smartphone(brand, model) {
  this.brand = brand;
  this.model = model;
}
Smartphone.prototype.logModel = function() {
  console.log(this.model);
}

iPhone6.logModel();
*/

// zadanie 11.5
/*function Button(text) {
     this.text = text || 'Hello';
   }
      Button.prototype = {
      create: function() {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function() {
          alert(self.text);
         this.$element.appendTo($('body'));
       });

      }
    };
        var btn1 = new Button('Hello');
        btn1.create();
        */


//zadanie 11.6
$(function() {

  function randomString() {

    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }



  function Column(name) {
    var self = this;

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

    function createColumn() {

     // Create components
      var $column = $('<div>').addClass('column');
      var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
      var $columnCardList = $('<ul>').addClass('column-card-list');
      var $columnDelete = $('<button>').addClass('btn-delete').text('x');
      var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');


      //adding events
      $columnDelete.click(function() {
        self.removeColumn();
      });
      //Add a note after clickin on the button
      $columnAddCard.click(function() {
        self.addCard(new Card(prompt("Enter the name of the card")));
      });
      //Construction column element
      $column.append($columnTitle)
             .append($columnDelete)
             .append($columnAddCard)
             .append($columnCardList);
      // return of created column
      return $column;
    }

  }  //function column koniec
  Column.prototype = {
     addCard: function(card) {
      this.$element.children('ul').append(card.$element);
     },
     removeColumn: function() {
      this.$element.remove();
     }
  };

  //funkcja konstruująca klasę card

  function Card(description) {
        var self = this;

        this.id = randomString();
        this.description = description;
        this.$element = createCard();

        function createCard() {
              var $card = $('<li>').addClass('card');
              var $cardDescription = $('<p>').addClass('card-description').text(self.description);
              var $cardDelete = $('<button>').addClass('btn-delete').text('x');

             //usunięcie karty
             $cardDelete.click(function() {
              self.removeCard();
             });

             //konstruowanie karty
             $card.append($cardDelete)
                   .append($cardDescription);

                   return $card;
           }
  }
       Card.prototype = {
        removeCard: function() {
          this.$element.remove();
        }
       }

       var board = {
        name: 'Kanban Board',
        //stworzenie kolumny
        addColumn: function(column) {
          this.$element.append(column.$element);
          initSortable();
        },
        $element: $('#board .column-container')

       };

       function initSortable() {
        $('.column-card-list').sortable({
          connectWith: '.column-card-list',
          placeholder: 'card-placeholder'
        }).disableSelection();
       }
       //wrzucanie nowej kolumny do tablicy
       $('.create-column')
          .click(function() {
            var name = prompt('Enter a column name');
            var column = new Column(name);
                board.addColumn(column);
          });

          // tworzenie kolumn
          var todoColumn = new Column('To do');
          var doingColumn = new Column('Doing');
          var doneColumn = new Column('Done');

         // Dodawanie kolumn
         board.addColumn(todoColumn);
         board.addColumn(doingColumn);
         board.addColumn(doneColumn);

         //tworzenie kart
         var card1 = new Card('New task');
         var card2 = new Card('Create kanban boards');

         //dodanie karty do kolumny
         todoColumn.addCard(card1);
         doingColumn.addCard(card2);


})



