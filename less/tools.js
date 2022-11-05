class Book {
  name;
  link;

  constructor(name, link) {
    this.name = name;
    this.link = link;
  }

  get_name() { return this.name; }
  get_link() { return this.link; }
};

class Short {
  summary;
  details;

  constructor(summary, details) {
    this.summary = summary;
    this.details = details;
  }

  get_summary() { return this.summary; }
  get_details() { return this.details; }
}

class Lesson {
  books;
  tasks;
  shorts;

  constructor(books, tasks, shorts) {
    this.books = books || [];
    this.tasks = tasks || [];
    this.shorts = shorts || [];
  }

  add_short(summary, details) { this.shorts.push(new Short(summary, details)); }
  add_book(book) { this.books.push(book); }
  add_task(task, book_id = null) {
    if (book_id == undefined) {
      this.tasks.push(task);
      return;
    }
    
    this.tasks.push(`${this.books[book_id]?.get_name()} | ${task}`);
  }

  show() {
		const short_box = document.createElement("div");
		short_box.classList.add("container");

		this.show_books(short_box);
    this.show_tasks(short_box);
    this.show_shorts(short_box);

		document.body.appendChild(short_box);
  }

  show_books(short_box) {
		if (this.books.length == 0) { return; }

		const books = this.books;

		const box = document.createElement('div');
		const header_text = document.createElement('h2');
		header_text.innerHTML = `Книг${books.length == 1 ? 'а': 'и'} (clickable)`;
		box.appendChild(header_text);
	
		box.classList.add('books__link');
		for(let i = 0; i < books.length; ++i){
			const a = document.createElement('a');
			
			a.innerText = books[i].get_name();
			a.href = books[i].get_link();
			a.target = "_blank";
			box.appendChild(a);
		}
	
		short_box.appendChild(box);
	}

  show_tasks(short_box) {
		const tasks = this.tasks;

		if(tasks.length == 0){
			const empty_message = document.createElement("h2");
			empty_message.classList.add("empty__message");
			empty_message.innerText = "Задач нет";
			short_box.appendChild(empty_message);
			return;
		}
	
		const box = document.createElement('div');
		box.classList.add('task__list');
	
		const header_text = document.createElement('h2');
		header_text.innerHTML = `Задач${tasks.length == 1 ? 'а': 'и'}`;
		box.appendChild(header_text);
	
		for(let i = 0; i < tasks.length; ++i){
			const p = document.createElement('p');
			p.innerHTML = tasks[i];
			box.appendChild(p);
		}
	
		short_box.appendChild(box);
	}

  show_shorts(short_box) {
		const shorts = this.shorts;

		if(shorts.length == 0 || shorts == null || shorts == undefined){
			const empty_message = document.createElement("h2");
			empty_message.classList.add("empty__message");
			empty_message.innerHTML = "Не верится, но тут пусто";
			short_box.appendChild(empty_message);
			return;
		}
	
		for(let i = 0; i < shorts.length; ++i){
			const det = document.createElement("details");
			const summ = document.createElement("summary");
			
			summ.innerHTML = shorts[i].get_summary();
			det.appendChild(summ);
			
			const p = document.createElement("p");
			p.innerHTML = shorts[i].get_details();
			det.appendChild(p);
	
			short_box.appendChild(det);
		}
	}
}

function add_lesson(shorts, books = null, tasks = null) {
  add_lesson_carri(all_lessons, shorts, books, tasks);
}

function add_lesson_carri(all_lessons, shorts, books = null, tasks = null) {
  let lesson = new Lesson();
  
  if (books) { add_cycle(lesson, books, 1); }
  if (tasks) { add_cycle(lesson, tasks, 2); }

  add_cycle(lesson, shorts, 3);

	all_lessons.push(lesson);

  function add_cycle(lesson, arr, mode) {
    for (let i = 0; i < arr.length; ++i) {
      switch(mode){
        case 1: {
          lesson.add_book(arr[i]);
          break;
        }
        case 2: {
          lesson.add_task(arr[i][0], arr[i][1]);
          break;
        }
        case 3: {
          lesson.add_short(arr[i][0], arr[i][1]);
          break;
        }
      }
    }
  }
}