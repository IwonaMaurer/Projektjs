
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

/*
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
*/


/*
//zadanie 12.4

var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});
var paragraph = document.getElementById('joke');

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}
*/
/*
//zadanie 12.5
var prefix = "https://cors-anywhere.herokuapp.com/";
var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

function getQuote() {
  $.getJSON(prefix + quoteUrl, createTweet);
  $.ajaxSetup({ cache: false });
}
function createTweet(input) {
  var data = input[0];
  var quoteText = $(data.content).text().trim();
  var quoteAuthor = data.title;

  if (!quoteAuthor.length) {
    quoteAuthor = "Unknown author";
  }
  var tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;

  if (tweetText.length > 140) {
      getQuote();
  } else {
    var tweet = tweetLink + encodeURIComponent(tweetText);
    $('.quote').text(quoteText);
    $('.author').text("Author: " + quoteAuthor);
    $('.tweet').attr('href', tweet);
  }
 }

$(document).ready(function() {
  getQuote();
  $('.trigger').click(function() {
    getQuote();
  })
});

*/

//zadanie 12.6
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();
  if(!countryName.length) countryName = 'Poland';
  $.ajax( {
         url: url + countryName,
         method: 'GET' ,
         success: showCountriesList
  });
}
function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
     $('<li>').text(item.name).appendTo(countriesList);    
});
}






//zadanie 12.7

$(function(){
  
    // FUNKCJE POMOCNICZE
    function initSortable() {
      $('.card-list').sortable({
        connectWith: '.card-list',
        placeholder: 'card-placeholder'
      }).disableSelection();
    }
  
    function randomString() {
      var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
      var str = '', i;
      for (i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
      }
      return str;
    }
  
    // KANBAN
    var board = {
      name: 'Tablica Kanban',
      createColumn: function(column) {
        this.element.append(column.element);
        initSortable();
      },
      element: $('#board .column-container')
    };
  
    $('.create-column')
    .click(function(){
      board.createColumn(new Column(prompt('Wpisz nazwę kolumny')));
    });
  
    // KLASA KANBAN COLUMN
    function Column(name) {
      var self = this;
  
      this.id = randomString();
      this.name = name;
      this.element = createColumn();
  
      function createColumn() {
        // TWORZENIE NOWYCH WĘZŁÓW
        var column = $('<div class="column"></div>');
        var columnTitle = $('<h2 class="column-title">' + self.name + '</h2>');
        var columnCardList = $('<ul class="card-list"></ul>');
        var columnDelete = $('<button class="btn-delete">x</button>');
        var columnAddCard = $('<button class="column-add-card">Dodaj kartę</button>');
  
        // PODPINANIE ODPOWIEDNICH ZDARZEŃ POD WĘZŁY
        columnDelete.click(function() {
          self.deleteColumn();
        });
        columnAddCard.click(function(event) {
          event.preventDefault();
          self.createCard(new Card(prompt("Wpisz nazwę karty")));
        });
  
        // KONSTRUOWANIE ELEMENTU KOLUMNY
        column.append(columnTitle)
        .append(columnDelete)
        .append(columnAddCard)
        .append(columnCardList);
        return column;
      }
    }
    Column.prototype = {
      createCard: function(card) {
        this.element.children('ul').append(card.element);
      },
      deleteColumn: function() {
        this.element.remove();
      }
    };
  
    // KLASA KANBAN CARD
    function Card(description) {
      var self = this;
  
      this.id = randomString();
      this.description = description;
      this.element = createCard();
  
      function createCard() {
        var card = $('<li class="card"></li>');
        var cardDeleteBtn = $('<button class="btn-delete">x</button>');
        var cardDescription = $('<p class="card-description"></p>');
        cardDeleteBtn.click(function(){
          self.removeCard();
        });
        card.append(cardDeleteBtn);
        cardDescription.text(self.description);
        card.append(cardDescription)
        return card;
      }
    }
    Card.prototype = {
      removeCard: function() {
        this.element.remove();
      }
    }
  
    // TWORZENIE NOWYCH EGZEMPLARZY KOLUMN
    var todoColumn = new Column('Do zrobienia');
    var doingColumn = new Column('W trakcie');
    var doneColumn = new Column('Skończone');
  
    // DODAWANIE KOLUMN DO TABLICY
    board.createColumn(todoColumn);
    board.createColumn(doingColumn);
    board.createColumn(doneColumn);
  
    // TWORZENIE NOWYCH EGZEMPLARZY KART
    var card1 = new Card('Nowe zadanie');
    var card2 = new Card('stworzyc tablice kanban');
  
    // DODAWANIE KART DO KOLUMN
    todoColumn.createCard(card1);
    doingColumn.createCard(card2);
  })
  

