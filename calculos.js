function calculaCilindros (event){  
  event.preventDefault()
  // criando as váriaveis
  let unidadesBalao = 0
  let balaoType = ""
  let nome = ""
  let cilindrosGH = 0
  let precoCilindro = 130

  unidadesBalao = document.getElementById("unidadesBalao").value;
  nome = document.getElementById("nome").value;

  //Tratando situações de Erro na quantidade de balões
  if(!unidadesBalao ){
    alert("Digite a quantidade de balões!!")
  }
  if(unidadesBalao < 0){
    alert("Digite um número positivo maior que Zero")
  }
  // Checkando qual tamanho de balão foi selecionado
  const radioInputs = document.querySelectorAll('input[name="balao"]');
  for (const radioInput of radioInputs) {
  if (radioInput.checked) {
    balaoType = radioInput.value;
    break; // Sai do loop assim que encontrar o input selecionado.
  }
}

  if (balaoType == "balaoTam8"){
    cilindrosGH = unidadesBalao/100
  }
  if (balaoType == "balaoTam9"){
    cilindrosGH = unidadesBalao/80
  }
  if (balaoType == "balaoTam10"){
    cilindrosGH = unidadesBalao/70
  }

 
  // Cálculo com cada tamanho de balão

  const precoFinal = precoCilindro * cilindrosGH

  document.getElementById("cilindrosGH").innerHTML = (`${nome}, Serão utilizados: ${cilindrosGH.toFixed(2)} Cilindros`)
  document.getElementById("precoFinal").innerHTML = (`Valor total em Cilindros: R$${precoFinal.toFixed(2)}`)
}