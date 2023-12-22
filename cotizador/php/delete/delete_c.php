
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
</body>
</html>

<?php 

error_reporting(0);


    try {
        
        include("../conexion.php");

        $id = $_GET['id'];

        $consulta_s = "SELECT * FROM cotizacion WHERE id = '$id'";

        $res = mysqli_query($conn,$consulta_s);

        if (mysqli_num_rows($res) > 0) {

            $consulta = "DELETE FROM cotizacion WHERE id = '$id'";

            $res = mysqli_query($conn,$consulta);

            echo '<script language="javascript">alert("¡ELIMINADO!"); window.location = "../../cotizador.html"</script>';



        } else {

            echo '<script language="javascript">alert("¡DIGITA UN ID VALIDO!"); window.location = "delete.html"</script>';


        }

    } catch (Exception $e) {

        // echo '<script language="javascript">alert("¡DIGITA UN ID VALIDO!");</script>';

    }


?>