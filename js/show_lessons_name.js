const pages = [
  "Introduction to JavaScript",
  "Type Conversions and Introduction to Objects",
  "Use strict, Introduction To Arrays",
  "Functions",
  "This, constructor functions",
];

show_pages(pages);

function show_pages(pages){
  const container = document.createElement("div");
  container.classList.add('container');

  for(let i = 0; i < pages.length; ++i){
    const link = document.createElement('a');
    
    link.innerHTML = pages[i] || 'no name (add later)';
    link.href = `less/less.html?less=${i}`;

    container.appendChild(link);
  }

  document.body.appendChild(container);
}
