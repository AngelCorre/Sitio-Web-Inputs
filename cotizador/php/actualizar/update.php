<?php 

error_reporting(0);

    try {
        
        include("../conexion.php");

        $id = $_POST['id'];

        $consulta_s = "SELECT * FROM cotizacion WHERE id = '$id'";

        $res = mysqli_query($conn,$consulta_s);

        if (mysqli_num_rows($res) > 0) {

            $panes = $_POST['grupo_1'];
$quesos = $_POST['grupo_2'];
$papas = $_POST['grupo_3'];
$aderezos = $_POST['grupo_4'];
$picante = $_POST['grupo_5'];
$carnes = $_POST['grupo_6'];
$vegetales = $_POST['grupo_7'];
$extras = $_POST['grupo_8'];
$resumen = $_POST['cotizacion'];

$TPan = $_POST['panSelec'];
$TQueso = $_POST['quesoSelec'];
$TPapa = $_POST['papaSelec'];
$TAderezo = $_POST['aderezoSelec'];
$TPicante = $_POST['picanteSelec'];
$TCarne = $_POST['carneSelec'];
$TVegetal = $_POST['vegetalSelec'];
$TExtra = $_POST['extraSelec'];


// echo "Pan: " . $TPan . "<br/>";
// echo "Queso: " . $TQueso . "<br/>";
// echo "Papa: " . $TPapa . "<br/>";
// echo "Aderezo: " . $TAderezo . "<br/>";
// echo "Picante: " . $TPicante . "<br/>";
// echo "Carne: " . $TCarne . "<br/>";
// echo "Vegetales: " . $TVegetal . "<br/>";
// echo "Extra: " . $TExtra . "<br/>";

// echo "Pan: " . $panes . "<br/>";
// echo "Queso: " . $quesos . "<br/>";
// echo "Papa: " . $papas . "<br/>";
// echo "Aderezo: " . $aderezos . "<br/>";
// echo "Picante: " . $picante . "<br/>";



$totalCarne = 0;
$lCarnes = count($carnes);
for ($i = 0; $i < $lCarnes; $i++) {

    $totalCarne = ($totalCarne + $carnes[$i]);

    // echo ("Carne: " . $carnes[$i] . "<br/>");
}

$totalVegetal = 0;
$lVegetales = count($vegetales);
for ($i = 0; $i < $lVegetales; $i++) {

    $totalVegetal = $totalVegetal + $vegetales[$i];

    // echo ("Vegetales: " . $vegetales[$i] . "<br/>");
}

$totalExtra = 0;
$lExtras = count($extras);
for ($i = 0; $i < $lExtras; $i++) {

    $totalExtra = $totalExtra + $extras[$i];

    // echo ("Extras: " . $extras[$i] . "<br/>");
}

$subtotal = $panes + $quesos + $papas + $aderezos + $picante + $totalCarne + $totalVegetal + $totalExtra;
$iva = $subtotal * 0.16;
$total = $subtotal + $iva;

// echo "Subtotal: " . $subtotal . "<br/>";
// echo "IVA: " .  $iva . "<br/>";
// echo "Total: " . $total . "<br/>";
// echo "Resumen: " . $resumen;

date_default_timezone_set('America/Mexico_City');
$fecha = date('Y-m-d');

$hora = date('H:i:s');

// echo $fecha;
// echo $hora;

            $consulta = "UPDATE cotizacion SET pan='$TPan', queso='$TQueso',papas='$TPapa',aderezos='$TAderezo',picante='$TPicante',carnes='$TCarne',vegetales='$TVegetal',extras='$TExtra',hora='$hora',fecha='$fecha',subtotal='$subtotal',iva='$iva',total='$total',resumen='$resumen' WHERE id = '$id'";

            $res = mysqli_query($conn,$consulta);

            echo '<script language="javascript">alert("¡ACTUALIZADO!"); window.location = "../../cotizador.html"</script>';



        } else {

            echo '<script language="javascript">alert("¡DIGITA UN ID VALIDO!");window.location = "update.html"</script>';


        }

    } catch (Exception $e) {

        // echo '<script language="javascript">alert("¡DIGITA UN ID VALIDO!");</script>';

    }


?>