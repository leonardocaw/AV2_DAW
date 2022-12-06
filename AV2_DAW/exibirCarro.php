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
        $sql="SELECT * FROM `nome`";

        $result=$conn->query($sql);
        $exibir[] = array();

        $i = 0;

        While ($linha = $result->fetch_assoc())
        {
            $exibir[$i] = $linha;
            $i++;
        }

        if ($result=true)
        {
            $retorno=json_encode($exibir);

        }
         else 
        {
            $retorno=json_encode("DEU RUIM!😭😭");
        }
    }
echo $retorno;

?>