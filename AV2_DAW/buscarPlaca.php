<?php
    $servidor = "localhost";
    $user = "root";
    $pass = "";
    $banco = "locadora";
    $retorno = "";

    if($_SERVER["REQUEST_METHOD"]=="GET")
    {   
        $placa = $_GET["placa"]; 
        $conn = new mysqli ($servidor, $user, $pass, $banco);
        $sql="SELECT * FROM `locadora` WHERE `placa` = '$placa'";
        $result=$conn->query($sql);
        
        if ($result==true){
            $veiculo = $result->fetch_assoc();
            $retorno=json_encode($veiculo);

        } else {
            $retorno=json_encode("DEU RUIM!😭😭");
        }
    }
echo $retorno;
?>