-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2023 at 05:29 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cotizador`
--

-- --------------------------------------------------------

--
-- Table structure for table `cotizacion`
--

CREATE TABLE `cotizacion` (
  `id` int(11) NOT NULL,
  `pan` varchar(25) NOT NULL,
  `queso` varchar(25) NOT NULL,
  `papas` varchar(25) NOT NULL,
  `aderezos` varchar(25) NOT NULL,
  `picante` varchar(25) NOT NULL,
  `carnes` varchar(100) NOT NULL,
  `vegetales` varchar(100) NOT NULL,
  `extras` varchar(100) NOT NULL,
  `hora` time NOT NULL,
  `fecha` date NOT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  `iva` decimal(10,2) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `resumen` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cotizacion`
--

INSERT INTO `cotizacion` (`id`, `pan`, `queso`, `papas`, `aderezos`, `picante`, `carnes`, `vegetales`, `extras`, `hora`, `fecha`, `subtotal`, `iva`, `total`, `resumen`) VALUES
(21, 'Pan de Ajo', 'Queso Manchego', ' Papas Grandes', 'Aderezo de Mostaza dulce', 'Chipotle', ', Carne de Lomo de Cerdo ', ', Aguacate ', ', Tocino ', '10:54:50', '2023-11-26', 54.00, 8.64, 62.64, 'Has pedido una torta con Pan de Ajo, Queso Manchego,  Papas Grandes,  Aderezo de Mostaza dulce, Chipotle , Carne de Lomo de Cerdo  , Aguacate  y , Tocino '),
(23, 'Pan Integral', 'Queso Manchego', 'Papas Medianas', 'Aderezo de Cebolla Dulce', 'Chipotle', ', Carne de Milanesa , Carne de Pierna , Carne de Salchicha , Carne de Jamón , Carne de Lomo de Cerdo', ', Cebolla , Tomate , Lechuga , Aguacate ', ', Frijoles , Piña , Tocino ', '10:59:41', '2023-11-26', 78.00, 12.48, 90.48, 'Has pedido una torta con Pan Integral, Queso Manchego, Papas Medianas,  Aderezo de Cebolla Dulce, Chipotle , Carne de Milanesa , Carne de Pierna , Carne de Salchicha , Carne de Jamón , Carne de Lomo de Cerdo  , Cebolla , Tomate , Lechuga , Aguacate  y , Frijoles , Piña , Tocino '),
(24, 'Pan de Ajo', 'Queso Chihuahua', 'Papas Medianas', 'Aderezo de Mostaza dulce', 'Rajas', ', Carne de Jamón ', ', Aguacate ', ', Frijoles ', '11:00:23', '2023-11-26', 37.00, 5.92, 42.92, 'Has pedido una torta con Pan de Ajo, Queso Chihuahua, Papas Medianas,  Aderezo de Mostaza dulce, Rajas , Carne de Jamón  , Aguacate  y , Frijoles '),
(25, 'Pan de Ajo', 'Queso Manchego', ' Papas Grandes', 'Aderezo de Cebolla Dulce', 'Chiles en vinagre', ', Carne de Lomo de Cerdo ', ', Tomate ', ', Frijoles , Piña , Tocino ', '11:08:12', '2023-11-26', 56.00, 8.96, 64.96, 'Has pedido una torta con Pan de Ajo, Queso Manchego,  Papas Grandes,  Aderezo de Cebolla Dulce, Chiles en vinagre , Carne de Lomo de Cerdo  , Tomate  y , Frijoles , Piña , Tocino '),
(27, 'Pan Integral', 'Queso Oaxaca', 'Papas Medianas', 'Aderezo de Mostaza dulce', 'Chiles en vinagre', ', Carne de Lomo de Cerdo ', ', Cebolla ', ', Frijoles ', '20:49:07', '2023-12-02', 38.00, 6.08, 44.08, 'Has pedido una torta con Pan Integral, Queso Oaxaca, Papas Medianas,  Aderezo de Mostaza dulce, Chiles en vinagre , Carne de Lomo de Cerdo  , Cebolla  y , Frijoles '),
(37, 'Pan Integral', 'Queso Chihuahua', 'Papas Chicas', 'Aderezo de Cebolla Dulce', 'Rajas', ', Carne de Pierna ', ', Cebolla ', ', Frijoles ', '22:51:42', '2023-12-02', 30.00, 4.80, 34.80, 'Has pedido una torta con Pan Integral, Queso Chihuahua, Papas Chicas,  Aderezo de Cebolla Dulce, Rajas , Carne de Pierna  , Cebolla  y , Frijoles ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cotizacion`
--
ALTER TABLE `cotizacion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cotizacion`
--
ALTER TABLE `cotizacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
