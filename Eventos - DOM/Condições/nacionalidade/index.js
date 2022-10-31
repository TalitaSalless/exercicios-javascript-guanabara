const pais = document.querySelector('input#paisDeOrigem');
const botao = document.getElementById('botaoConfirmar');


botao.addEventListener('click', () => {
   var res = document.querySelector('div#res');  //seleciona a div de resultado
   const paisDigitado = pais.value      //pega o valor do texto
   res.innerHTML = `<p>Seu pais é ${paisDigitado}</p>` // mostra o país 

   if (paisDigitado == 'brasil') { 
      res.innerHTML += `Voce é brasileiro!`
   } else {
      res.innerHTML += `Voce é estrangeiro!`
   }
});
