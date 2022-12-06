function enviarCarro() { //(Nome, Modelo, Ano, Cor, Localidade, Valor, Placa) {
    let nome = document.getElementById("nome").value;
    let modelo = document.getElementById("modelo").value;
    let ano = document.getElementById("ano").value;
    let cor = document.getElementById("cor").value;
    let localidade = document.getElementById("localidade").value;
    let valor = document.getElementById("valor").value;
    let placa = document.getElementById("placa").value;
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
   
    }
    xmlHttp.open("GET", "http://localhost/AV2_DAW/cadastroCarro.php?nome=" + nome +
    "&modelo" + modelo + "&ano=" + ano +  "&cor=" + cor + "&localidade=" + localidade + "&valor=" + valor + "&placa=" + placa);
    xmlHttp.send();
  
}
function criarLinhaTabela(linha) {
    let tabela = document.getElementById("tabela");
    let tr = document.createElement("tr");
    
    //Coluna nome
    let nome = document.createElement("td"); 
    textnode = document.createTextNode(linha.nome);
    tdcarro.appendChild(textnode); 
    tr.appendChild(nome);
  
    //Coluna modelo
    let modelo = document.createElement("td"); 
    textnode = document.createTextNode(linha.modelo);
    tdtipo.appendChild(textnode); 
    tr.appendChild(modelo); 
  
    //Coluna ano
    let ano = document.createElement("td");
    textnode = document.createTextNode(linha.ano);
    tdano.appendChild(textnode); 
    tr.appendChild(ano);
  
    let cor = document.createElement("td");
    textnode = document.createTextNode(linha.cor);
    tdano.appendChild(textnode); 
    tr.appendChild(cor);

    let localidade = document.createElement("td");
    textnode = document.createTextNode(linha.localidade);
    tdano.appendChild(textnode); 
    tr.appendChild(localidade);

    let valor = document.createElement("td");
    textnode = document.createTextNode(linha.valor);
    tdano.appendChild(textnode); 
    tr.appendChild(valor);   

    let placa = document.createElement("td");
    textnode = document.createTextNode(linha.placa);
    tdano.appendChild(textnode); 
    tr.appendChild(placa);

  }

function carregaCarros() {
    let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let obj = JSON.parse(this.responseText);
                let x = 0;
                
                let valor = (obj[x].local).localeCompare("undefined");
                if(valor!=0){
                        for (x=0;x<obj.length;x++) {
                        let linha = obj[x];
                        criarLinhaTabela(linha);
                    }
                }
            }
        }
        xmlHttp.open("GET", "http://localhost/AV2_DAW/exibirCarro.php");
        xmlHttp.send();
  }

  function enviarForm()
   {

      let nome = document.getElementById("nome").value;
      let email = document.getElementById("email").value;
      let senha = document.getElementById("senha").value;

      if (nome != null && nome != "" && senha != null && senha != "" && email != null && email != "") 
      {
      let xmlHttp = new XMLHttpRequest();
      
      xmlHttp.open("GET", "http://localhost/AV2_DAW/cadastrarCliente.php?nome=" + nome+ "&email=" + email + "&senha=" + senha);
      xmlHttp.send();

      location.reload();
      }
      
  }

  function excluirForm() {
    let placa = document.getElementById("placa").value;
    
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://localhost/AV2_DAW/excluirCarro.php?placa=" + placa);
    xmlHttp.send(); 
    location.reload();
}

function buscarCarroAlt() {
    let placa = document.getElementById("placa").value;
    let xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            
            document.getElementById("nomeAltV").value = obj.nome;
            document.getElementById("modeloAltV").value = obj.modelo;
            document.getElementById("anoAltV").value = obj.ano;
            document.getElementById("corAltV").value = obj.cor;
            document.getElementById("localidadeAltV").value = obj.localidade;
            document.getElementById("valorAltV").value = obj.valor;
            document.getElementById("placaAltV").value = obj.placa;

            let formAlt = document.getElementById("formAlt");
            formAlt.style.display = "block";
        }
    }
    xmlHttp.open("GET", "http://localhost/AV2_DAW/alterarCarro.php?placa=" + placa);
    xmlHttp.send();
}

function enviarFormAlt() { 
    let nome = document.getElementById("nomeAltV").value;
    let modelo = document.getElementById("modeloAltV").value;
    let ano = document.getElementById("anoAltV").value;
    let cor = document.getElementById("corAltV").value;
    let localidade = document.getElementById("localidadeAltV").value;
    let valor = document.getElementById("valorAltV").value;
    let placa = document.getElementById("placaAltV").value;
    
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", "?nome=" + nome + "&modelo" + modelo + "&ano=" + ano +  "&cor=" + cor + "&localidade=" + localidade + "&valor=" + valor + "&placa=" + placa);
    xmlHttp.send();
    location.reload();
}

