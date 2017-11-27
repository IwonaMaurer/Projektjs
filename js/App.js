// OGÓLNA FUNKCJA
function randomString() {
	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
	var str = '', i;
	for (i = 0; i < 10; i++) {
	  str += chars[Math.floor(Math.random() * chars.length)];
	}
	return str;
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


/*

X-Client-Id: '2564'
X-Auth-Token: '6cb2b07d753d8d12d12340e6b3eaa456'

PUT /card/{id}
------------------------------
Request:
{id}: int - id card we want to edit
name: string - new name card
bootcamp_kanban_column_id: int - the column id to which we want to move the post
------------------------------
Response:
{
   id: int
}


PUT /column/{id}
------------------------------
Request:
{id}: int - the column id we want to edit
name: string - new column name
------------------------------
Response:
{
   id: int
}

*/