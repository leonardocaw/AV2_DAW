<?php
/**/
    $servidor = "localhost";
    $user = "root";
    $pass = "";
    $banco = "locadora";
    $retorno = "";
    if($_SERVER["REQUEST_METHOD"]=="GET")
    {    
        $conn = new mysqli ($servidor, $user, $pass, $banco);
        $sql="SELECT * FROM `locadora`";

        $result=$conn->query($sql);
        $veiculo[] = array();

        $i = 0;

        While ($linha = $result->fetch_assoc())
        {
            $veiculo[$i] = $linha;
            $i++;
        }

        if ($result=true)
        {
            $retorno=json_encode($veiculo);

        }
         else 
        {
            $retorno=json_encode("DEU RUIM!😭😭");
        }
    }
echo $retorno;

?>