var library = {
	book_test: { 	author: "Some author Name",
					title: "book_test",
					inv_number: 1,
					gerne: "Any_gerne",
					year: 2012,
					publishing_house: "Private house"	

				},

	"Мастер и Маргарита": { author: "Булгаков",
					title: "Мастер и Маргарита",
					inv_number: 2,
					gerne: "Классика",
					year: 1976,
					publishing_house: "Молодой октябрь"
					
				}
};




function searchAuthor (author){
	console.log(" search to author:  ");
	var count=0;
	for (var search in library){
		
		if (library[search].author == author){
			count++;
			console.log(library[search]);
			
		}
	}
	console.log("Найдено " + count + "  книги  " + author + "  в нашей библиотеке");
};






function searchYear (yearmin, yearmax){
	console.log(" search to year:  ");
	var count=0;
	for (var search in library){
		
		if ((library[search].year > yearmin) && (library[search].year < yearmax)) {
			count++;
			console.log(library[search]);
			
		}
	}
	console.log("Найдено " + count + "  книг c " + yearmin + " по " + yearmax + "  в нашей библиотеке");
};








function delBookTitle (title) {
	for (var search in library){
		
		if (library[search].title == title){
		delete library[search];
		console.log ("Книга: \""  + title  +  "\"  -  удалена безвозвратно!");
		}

	}
}





function addBook (author1, title1, gerne1, year1, publishing_house1){
	var count=1;											//console.log(library.length);        				-	Как определить размер объекта  ????
	for (var key in library){
		if (library[key].inv_number>count)
			count = library[key].inv_number;				//count = library[key][inv_number] - как вызвать значение второй вложенности через переменную ???
	};

	library[title1] = { author: author1, 					// почему сдесь не присваиванием задаем значения ??
			title: title1, 
			inv_number: count+1,
			gerne: gerne1, 
			year: year1, 
			publishing_house: publishing_house1
			

	};

	return console.log ("Книга: \"" + title1 + "\"    успешно добавлена" )

};



addBook ("Лукьяненко","Лабиринт отражений","Фантастика",1995,"Звезда револющии");
addBook ("Лукьяненко","Линия грез","Фантастика",1993,"Молодой октябрь");
addBook ("Стругацкие","Пикник на обочине","Фантастика",1974,"Красный полиграфист");
addBook ("Стругацкие","Трудно быть богом","Фантастика",1981,"Красный полиграфист");
addBook ("Лукьяненко","Атомный сон","Фантастика",1989,"Private house");
addBook ("Воннегут","Сирены Титана","Фантастика",1971,"Красный полиграфист");




//console.log(library["Трудно быть богом"].author );


delBookTitle ("book_test");

addBook ("Воннегут","Виток эволюции","Фантастика",1973,"Красный полиграфист");
//delBookTitle ("Атомный сон");

addBook ("Сабковский","Ведьмак","Фантастика",1997,"Private house");


console.log(" ");


console.log(library);


console.log(" ");


searchAuthor ("Лукьяненко");
console.log(" ");

searchYear (1973,1995);

console.log(" ");











