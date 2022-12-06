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
        $sql="UPDATE `locadora` SET `nome`= '$nome', `modelo`= '$modelo', `ano`=$ano, `cor`='$cor', `localidade`='$localidade' ,
        `valor`= $valor, `placa`= '$placa' WHERE `placa` = '$placa'";
        echo $sql;
        
        $result=$conn->query($sql);
    }
?>