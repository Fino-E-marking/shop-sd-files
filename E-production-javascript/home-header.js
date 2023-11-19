const menubutton = document.getElementById("menu-button");
const dropdown = document.getElementById('hide');
const home = document.getElementById('home-li');

menubutton.addEventListener('click', add)
home.addEventListener('click', add1)

function add() {
  if (dropdown.id === 'hide') {
    dropdown.id = '';
  }else{
    dropdown.id = 'hide';
  }
}

function add1() {
  if (home.id === 'home-li') {
    dropdown.id = 'hide';
  }
}

