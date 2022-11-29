<?php
    $servidor = "localhost";
    $user = "root";
    $pass = "";
    $banco = "locadora";
    if($_SERVER["REQUEST_METHOD"]=="GET")
    {    
        $nome = $_GET["nome"];
        $modelo= $_GET["modelo"];
        $ano= $_GET["ano"];
        $cor = $_GET["cor"];
        $valor= $_GET["valor"];
        
        $conn = new mysqli ($servidor, $user, $pass, $banco);
        $sql="INSERT INTO `carro`(`nome`, `modelo`, `ano`,`cor`,`valor`) VALUES ('$nome', '$modelo', '$ano','$cor','$valor')";
        $result=$conn->query($sql);
    }
?>