<?php
    $servidor = "localhost";
    $user = "root";
    $pass = "";
    $banco = "locadora";
    if($_SERVER["REQUEST_METHOD"]=="GET")
    {    
        $nome=$_GET["nome"];
        $modelo=$_GET["modelo"];
        $ano=$_GET["ano"];
        $cor=$_GET["cor"];
        $localidade=$_GET["localidade"];
        $valor=$_GET["valor"];
        $placa=$_GET["placa"];
        
        $conn = new mysqli ($servidor, $user, $pass, $banco);
        $sql="INSERT INTO `locadora`(`nome`, `modelo`, `ano`, `cor`, `localidade`,`valor`,`placa`) VALUES ('$nome', '$modelo', $ano,'$cor', '$localidade', $valor,'$placa')";
        $result=$conn->query($sql);
    }
?>