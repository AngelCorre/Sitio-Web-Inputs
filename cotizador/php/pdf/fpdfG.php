<?php 

include 'plantilla.php';
require '../conexion.php';
$sql = "select id, subtotal, iva, total, resumen from cotizacion order by total DESC";  
$result = mysqli_query($conn, $sql);  
$pdf = new PDF();

$pdf->AddPage();
$pdf->SetFillColor(232,232,232);
$pdf->SetFont('Courier','B','10');
$pdf->Cell(30,5,'ID',1,0,'C');
$pdf->Cell(30,5,'Subtotal',1,0,'C');
$pdf->Cell(30,5,'IVA',1,0,'C');
$pdf->Cell(30,5,'Total',1,0,'C');
$pdf->Cell(75,5,'Resumen',1,1,'C');

while($row = $result->fetch_assoc())
{
$pdf->Cell(30,20,$row['id'],1,0,'C');
$pdf->Cell(30,20,$row['subtotal'],1,0,'C');
$pdf->Cell(30,20,$row['iva'],1,0,'C');
$pdf->Cell(30,20,$row['total'],1,0,'C');
$pdf->MultiCell(75,4,$row['resumen'],1,'L');


}
$pdf->Output();

?>