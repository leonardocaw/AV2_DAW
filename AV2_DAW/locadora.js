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
