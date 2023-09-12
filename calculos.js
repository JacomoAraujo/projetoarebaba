function calculaCilindros (balaoType, unidadesBalao){
  event.preventDefault()
  let unidadesBalao = 0
  let balaoType = ""
  let nome = ""
  let telefone = ""
  let dataFesta = ""
  let cilindrosGH = 0
  let precoCilindro = 10

  unidadesBalao = document.getElementById("unidadesBalao").value
  balaoType = document.getElementById("balaoType").value
  nome = document.getElementById("nome").value
  telefone = document.getElementById("telefone").value
  dataFesta = document.getElementById("dataFesta").value

  if (balaoType == "balaoTam8"){
    cilindrosGH = unidadesBalao/100
  }
  if (balaoType == "balaoTam9"){
    cilindrosGH == unidadesBalao/80
  }
  if (balaoType == "balaoTam10"){
    cilindrosGH = unidadesBalao/70
  }

  precoFinal = precoCilindro * cilindrosGH

  document.getElementById("cilindrosGH").innerHTML = (`${nome}, Serão utilizados :${cilindrosGH.toFixed(2)}`)
  document.getElementById("precoFinal").innerHTML = (`Valor gasto em Cilindros: ${precoFinal.toFixed(2)}`)
}