<?php
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
    }
?>