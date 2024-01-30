function resultado(){
    var nome = document.getElementById('nome').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    let imc =  peso / (altura*altura) ;
    var imcFormatado = imc.toFixed(2);
    
    var classificacao;
    
      if (imc < 18.5) {
        classificacao = "Abaixo do Peso";
      } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso Normal";
      } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
      } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade Grau I";
      } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade Grau II";
      } else {
        classificacao = "Obesidade Grau III";
      }

    var paragrafoResultado = `>> Olá, ${nome}! <br> Seu IMC é: "${imcFormatado}".<br>Isto é ${classificacao}.`

    document.getElementById('result').innerHTML = paragrafoResultado; 
}