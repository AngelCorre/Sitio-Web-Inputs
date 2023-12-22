<?php      
    $host = "localhost";  
    $user = "root";  
    $password = "";  
    $db_name = "cotizador";  
      
    $con = mysqli_connect($host, $user, $password, $db_name);  
    if(mysqli_connect_errno()) 
    {  
        die("Error de conexión con la base de datos". mysqli_connect_error());  
    }  
?>  