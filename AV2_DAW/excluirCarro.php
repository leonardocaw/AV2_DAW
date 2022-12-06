<?php
    $servidor = "localhost";
    $user = "root";
    $pass = "";
    $banco = "locadora";
    if($_SERVER["REQUEST_METHOD"]=="GET")
    {    
        $placa= $_GET["placa"];
        $conn = new mysqli ($servidor, $user, $pass, $banco);

        $sql="DELETE FROM `carros` WHERE `placa` = '$placa' ";
        $result=$conn->query($sql);
    }
?>