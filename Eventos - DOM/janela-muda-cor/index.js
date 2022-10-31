const area = document.getElementById('area');

area.addEventListener('click', () => {
   area.innerText = ('Clicou!');
   area.style.background = 'red'
});

area.addEventListener('mouseenter', () => {
   area.innerText = ('Entrou!');
   area.style.background = 'yellow'
});

area.addEventListener('mouseout', () => {
   area.innerText = ('Saiu!');
   area.style.background = 'green'
});





