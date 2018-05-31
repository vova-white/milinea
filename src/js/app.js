(function() {
  const menuButton = document.getElementsByClassName('js-menuToggle');

  function toggleMenu() {
    let menu = document.getElementsByClassName('js-menu');
    menu[0].classList.toggle('menu--is_open');
  }

  menuButton[0].addEventListener('click', toggleMenu);
}());
