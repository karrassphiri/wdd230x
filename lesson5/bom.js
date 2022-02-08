const listsize = document.querySelector('#listsize');
const buildButton = document.querySelector('button');
const list = document.querySelector('#list')

buildButton.addEventListener('click', () => {
  let list = input.value;
  input.value = '';
  let li =document.createElement('li')
  li.innerHTML = `Item: $`
  listItem.appendChild(list)
});