const texton1 = document.getElementById('txtn1');
const texton2 = document.getElementById('txtn2');
const resultado = document.getElementById('resultado');

const somar = document.getElementById('somar');
somar.addEventListener('click', function somarResultado(){
   var n1 = Number(texton1.value)
   var n2 = Number(texton2.value)
   var soma = n1 + n2
   resultado.innerHTML = `Resultado: A soma de ${n1} e ${n2} é igual a:  <strong>${soma}</strong>`
})