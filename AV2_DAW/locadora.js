function enviarCarro() { //(Nome, Marca, Cor, Valor) {
    let nome = document.getElementById("nome").value;
    let modelo = document.getElementById("modelo").value;
    let ano = document.getElementById("ano").value;
    let cor = document.getElementById("cor").value;
    let valor = document.getElementById("valor").value;
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        console.log("mudou status: " + this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            console.log("Chegou resposta: " + this.responseText)
            document.getElementById("msg").innerHTML = this.responseText;
        }
    }
    xmlHttp.open("GET", "?nome=" + nome +
    "&modelo" + modelo + "&ano=" + ano +  "&cor=" + cor + "&valor=" + valor);
    xmlHttp.send();
    console.log("Enviei requisição");
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

    let valor = document.createElement("td");
    textnode = document.createTextNode(linha.valor);
    tdano.appendChild(textnode); 
    tr.appendChild(valor);   
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
  