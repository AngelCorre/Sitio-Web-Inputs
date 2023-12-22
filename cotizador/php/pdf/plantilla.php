<?php
require 'fpdf/fpdf.php';
class PDF extends FPDF
{
	
	function Header()
	{

	$this->Image("images/torta.png",5 ,5, 0);
	$this->SetFont('Arial','B',15);
	$this->Cell(30);
	$this->Cell(120,10, 'Reporte',0,0,'C');
	$this->Ln(55);
	}
	function Footer()
	{
	$this->SetY(-15);
	$this->SetFont('Arial','I',15);
	}

}


?>