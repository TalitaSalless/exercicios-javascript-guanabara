const botao = document.getElementById('botao')

botao.addEventListener('click', function verificar() {
   let data = new Date()
   let anoAtual = data.getFullYear()

   /* === DEFININDO O ANO DE NASCIMENTO ===  */
   let res = document.getElementById('resultado')
   let ano = document.getElementById('ano-nascimento')
   let anoDeNascimento = Number(ano.value)
   if (anoDeNascimento == 0 || anoDeNascimento > anoAtual) {
      console.log('ERRO, verifique as informações e tente novamente!');
   } else {
      let fsex = document.getElementsByName('radsex')
      let idade = anoAtual - anoDeNascimento

      /* === DEFININDO O SEXO - masculino ===  */
      let genero = ''
      let img = document.getElementById('foto')
      if (fsex[0].checked) {
         genero = 'homem'
         if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', './imagens/bebe-homem.jpg')
         } else if (idade < 21) {
            //jovem
            img.setAttribute('src', './imagens/jovem-homem.jpg')
         } else if (idade > 21 && idade < 50) {
            //adulto
            img.setAttribute('src', './imagens/adulto-homem.jpg')
         } else {
            //idoso
            img.setAttribute('src', './imagens/idoso-homem.jpg')
         }

         /* === DEFININDO O SEXO - masculino ===  */

      } else if (fsex[1].checked) {
         genero = 'mulher'
         if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', './imagens/bebe-mulher.jpg')
         } else if (idade < 21) {
            //jovem
            img.setAttribute('src', './imagens/jovem-mulher.jpg')
         } else if (idade > 21 && idade < 50) {
            //adulto
            img.setAttribute('src', './imagens/adulto-mulher.jpg')
         } else {
            //idoso
            img.setAttribute('src', './imagens/idoso-mulher.jpg')
         }
      }
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
   }
});  
