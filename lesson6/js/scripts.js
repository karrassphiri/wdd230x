// select the elements to manipulate (output to)
//const datefield = document.querySelector(".date");

// derive the current date using a date object
//const now = new Date();
//const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
//	now
//);

// long, medium, short options ... try them

//datefield.innerHTML = `<em>${fulldate}</em>`;
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
