let panels = document.querySelectorAll('.panelHead');

for (let i = 0; i < panels.length; i++) {
  panels[i].addEventListener('click', e => {
    if (panels[i].nextElementSibling.classList.contains('show')) {
      panels[i].nextElementSibling.classList.remove('show');
      panels[i].classList.remove('panelHeadLight');
    } else {
      panels[i].nextElementSibling.classList.add('show');
      panels[i].classList.add('panelHeadLight');
    }
  });
}
