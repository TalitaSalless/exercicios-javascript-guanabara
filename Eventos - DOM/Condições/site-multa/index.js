const botao = document.getElementById('verificar');
const txtv = document.querySelector('input#txtvel');

botao.addEventListener('click', function calcular() {
   var res = document.querySelector('div#res'); //armazena resultado
   var vel = Number(txtv.value);                // muda para number

   res.innerHTML = `<p>Sua velocidade atual é ${vel}Km/h</p>`
   
   if (vel > 60) { //se for maior:
      res.innerHTML += `<p>Multado por excesso de velocidade!</p>`
   } else { // senão: 
      res.innerHTML += `<p>Dirija sempre com o cinto de segurança</p>`
   }
});