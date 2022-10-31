var idade = 90;
if (idade < 16) {
  console.log("Não vota");
} else if (idade < 18) {
  console.log("Voto Opcional");
} else if (idade <= 67){
   console.log("Voto Obrigatório");
} else {
   console.log("Não precisa votar");
}


var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`);
if (hora < 12) {
   console.log('Bom dia!');
} else if (hora <= 18) {
   console.log('Boa tarde!');
} else {
   console.log('Boa noite!');
}

