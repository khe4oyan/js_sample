const books = [
  new Book('JS Полное руководство(Фланаган)', 'https://drive.google.com/file/d/1MYq0kJzCVZ_uKGa5D7IcRDgeisKpl6Nf/view?usp=share_link'),
];
const all_lessons = [];

add_lesson(
  [
    ['JS ориентированный на..', '..значение'],
    ['От куда у цифр метод toString() ?', 'String, Boolean, Number неявно берутся в обёртку своих конструкторов. Они то и дают эти методы: new Number(), new String() new Boolean(). Это нужно для внутреннего использования.'],
    ['Hoisting', 'Поднятие или hoisting — это механизм в JavaScript, в котором переменные и объявления функций, передвигаются вверх своей области видимости перед тем, как код будет выполнен'],
  ],
  [books[0]],
  [
    ['Читать 1-5 главы', 0],
  ],
);

add_lesson( 
  [
    ['console в JS это..', '..объект. Так же можно вызвать .error(error_text)'],
    ['Все способы создать объект', 'Object.create()<br>new Object();<br>{}'],
    ['JSON', 'JS Object Notation<br> это облегченный формат обмена данными. Людям легко читать и писать. Машины легко анализируют и генерируют. Он основан на подмножестве стандарта языка программирования JavaScript. JSON — это текстовый формат, который полностью не зависит от языка, но использует соглашения, знакомые программистам языков семейства C, включая C, C++, C#, Java, JavaScript, Perl, Python и многие другие. Эти свойства делают JSON идеальным языком обмена данными.'],
  ], 
  [books[0]],
  [
    ['читать 6, 7 главы', 0],
    ['Создать объект всеми возможностями'],
    ['Скопировать объект 1:1'],
  ],
);

add_lesson( 
  [
    ['<s>eval()</s>', 'eval() - опасная функция, которая выполняет код, проходящий со всеми привилегиями вызывателя.<br>"eval is evil"'],
    ['Скопировать массив', 'Array.from(arr_name)'],
  ],
  null,
  null,
);

add_lesson( 
  [
    ['function expression', 'let say_hi = function() {console.log("hi!")}'],
    ['function declaration', 'function join() {console.log("join..")}<br>Существуют в block scope'],
    ['arrow function', 'let paint = () => {console.log("painting..")}<br>Не имеет this, super, new, arguments'],
  ], 
  [books[0]], 
  [
    ['Глава 8', 0],
    ['function moo(a, cb) {<br>return a * cb;<br>}<br>moo(4, (b) => {return b;})<br> -- <br>Переделать так, чтобы при вызове moo(4)(5) выдал 20'],
    ['Написать программу, которая возвращает цифры<br>(1-100 % 5 == 0 + 1-100 % 3 == 0) / 2'],
    ['Функциональное программирование(Google)'],
  ],
);

add_lesson( 
  [
    ['This in function', 'Если вывести this в консоль из функции то в строгом режиме выдаст пустую строку. А в обычном либо window(browser), либо global(Node js)'],
    ['This work in..', '..runtime'],
    ['Функция конструктор', 'new foo();<br>стрелочная функция не может быть конструктором, потму что не имеет new/this'],
    ['new.target()', 'function User() {console.log(new.target())}<br>new User(); // покажет функцию в строковом формате<br>User() // undefined'],
  ], 
  null, 
  [
    ['Реферат по всем методам всех стандартных типов'],
  ],
);