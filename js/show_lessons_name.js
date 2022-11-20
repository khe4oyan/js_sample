const pages = [
  "Introduction to JavaScript",
  "Type Conversions and Introduction to Objects",
  "Use strict, Introduction To Arrays",
  "Functions",
  "This, constructor functions",
  "String methods",
  "Array methods",
  "Number methods",
  "Boolean methods",
  "Object methods",
  "Math methods",
  "Symbol methods",
  "BigInt methods",
  "Date methods",
  "Var keyword, Hoisting, Globals, Decorators",
  "NFE",
  "Map methods",
  "Set methods",
];

show_pages(pages);

function show_pages(pages){
  const container = document.createElement('div');
  container.classList.add('container');

  for(let i = 0; i < pages.length; ++i){
    const link = document.createElement('a');
    create_link(link, pages[i], i);
    container.appendChild(link);
  }

  document.body.appendChild(container);
}

function create_link(link, name, i) {
  link.innerHTML = name || 'no name (add later)';
  link.href = `less/less.html?less=${i}&name=${name.replace(/ /ig, '_')}`;
}