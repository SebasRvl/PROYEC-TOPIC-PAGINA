-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:5555
-- Tiempo de generación: 04-12-2024 a las 03:52:24
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fresh`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `IdCategoria` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`IdCategoria`, `nombre`) VALUES
(1, 'Hombres'),
(2, 'Mujeres'),
(3, 'Niños'),
(4, 'Accesorios'),
(5, 'Ofertas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descuentos`
--

CREATE TABLE `descuentos` (
  `IdDescuento` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `tipo` enum('porcentaje','valor_fijo') NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `IdProducto` int(11) DEFAULT NULL,
  `IdCategoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalles_pedido`
--

CREATE TABLE `detalles_pedido` (
  `IdDetalle` int(11) NOT NULL,
  `IdPedido` int(11) DEFAULT NULL,
  `IdProducto` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio_unitario` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `IdPedido` int(11) NOT NULL,
  `IdUsuario` int(11) DEFAULT NULL,
  `fecha_pedido` date DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `IdProducto` int(11) NOT NULL,
  `IdSubcategoria` int(11) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `talla` varchar(10) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`IdProducto`, `IdSubcategoria`, `nombre`, `descripcion`, `precio`, `talla`, `color`, `imagen`, `stock`) VALUES
(1, 1, 'NIKE DUNK LOW', 'NIKE DUNK LOW', 2000.00, '26', 'GRIS', NULL, 3),
(2, 1, 'VANS CNEGRO', 'VANS NEGRO', 1500.00, '25', 'NEGRO', NULL, 2),
(3, 3, 'ADIDAS CLASICO', 'ADIDADS CON DETALLES AZULES', 1600.00, '24', 'BLANCO', NULL, 4),
(4, 2, 'JERSEY GOLDEN WARRIORS', 'JERSEY GOLDEN WARRIOS STEPHEN KURRY', 2200.00, 'G', 'NEGRO', NULL, 1),
(5, 5, 'TENIS ADIDAS NIÑA', 'ADIDAS PARA NIÑA CON OSITOS', 1200.00, '17', 'BLANCO', NULL, 1),
(6, 4, 'JERSEY CLUB BARCELONA 24-25', 'JERSEY 2024-2025 BARCELONA MUJER', 1800.00, 'S', 'AZUL', NULL, 3),
(7, 7, 'CACHUCHA LA AMARILLA', 'GORRA PARA HOMBRE CON DETALLES CAFES', 1000.00, 'G', 'AMARILLA', NULL, 3),
(8, 8, 'ADIDAS FORUM NEGROS', 'ADIDAS FORUM NEGROS', 900.00, '25', 'NEGRO', NULL, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategorias`
--

CREATE TABLE `subcategorias` (
  `IdSubcategoria` int(11) NOT NULL,
  `IdCategoria` int(11) DEFAULT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `subcategorias`
--

INSERT INTO `subcategorias` (`IdSubcategoria`, `IdCategoria`, `nombre`) VALUES
(1, 1, 'TENIS'),
(2, 1, 'JERSEYS'),
(3, 2, 'TENIS'),
(4, 2, 'JERSEY'),
(5, 3, 'TENIS'),
(6, 3, 'JERSEYS'),
(7, 4, 'CAPS'),
(8, 5, 'TODAS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `IdUsuario` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Correo` varchar(100) NOT NULL,
  `Contra` varchar(256) NOT NULL,
  `Numero` varchar(15) DEFAULT NULL,
  `Direccion` varchar(255) DEFAULT NULL,
  `Fecha_Creacion` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`IdUsuario`, `Nombre`, `Correo`, `Contra`, `Numero`, `Direccion`, `Fecha_Creacion`) VALUES
(1, 'Juan Pérez', 'juanperez@example.com', 'admin', '5555555555', 'Calle 123, Ciudad de México', '2024-12-01 15:34:25'),
(2, 'María Rodríguez', 'mariarodriguez@example.com', 'admin', '5555555556', 'Av. Reforma, Guadalajara', '2024-12-01 15:34:25'),
(3, 'Carlos González', 'carlosgonzalez@example.com', 'admin', '5555555557', 'Blvd. Paseo de la Reforma, Monterrey', '2024-12-01 15:34:25'),
(4, 'Ana Martínez', 'anamartinez@example.com', 'admin', '5555555558', 'Calle 5 de Mayo, Puebla', '2024-12-01 15:34:25'),
(5, 'Luis Hernández', 'luishernandez@example.com', 'admin', '5555555559', 'Calle Hidalgo, Mérida', '2024-12-01 15:34:25');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`IdCategoria`);

--
-- Indices de la tabla `descuentos`
--
ALTER TABLE `descuentos`
  ADD PRIMARY KEY (`IdDescuento`),
  ADD KEY `IdProducto` (`IdProducto`),
  ADD KEY `IdCategoria` (`IdCategoria`);

--
-- Indices de la tabla `detalles_pedido`
--
ALTER TABLE `detalles_pedido`
  ADD PRIMARY KEY (`IdDetalle`),
  ADD KEY `IdPedido` (`IdPedido`),
  ADD KEY `IdProducto` (`IdProducto`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`IdPedido`),
  ADD KEY `IdUsuario` (`IdUsuario`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`IdProducto`),
  ADD KEY `IdSubcategoria` (`IdSubcategoria`);

--
-- Indices de la tabla `subcategorias`
--
ALTER TABLE `subcategorias`
  ADD PRIMARY KEY (`IdSubcategoria`),
  ADD KEY `IdCategoria` (`IdCategoria`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`IdUsuario`),
  ADD UNIQUE KEY `Correo` (`Correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `IdCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `descuentos`
--
ALTER TABLE `descuentos`
  MODIFY `IdDescuento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalles_pedido`
--
ALTER TABLE `detalles_pedido`
  MODIFY `IdDetalle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `IdPedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `IdProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `subcategorias`
--
ALTER TABLE `subcategorias`
  MODIFY `IdSubcategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `IdUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `descuentos`
--
ALTER TABLE `descuentos`
  ADD CONSTRAINT `descuentos_ibfk_1` FOREIGN KEY (`IdProducto`) REFERENCES `productos` (`IdProducto`),
  ADD CONSTRAINT `descuentos_ibfk_2` FOREIGN KEY (`IdCategoria`) REFERENCES `categorias` (`IdCategoria`);

--
-- Filtros para la tabla `detalles_pedido`
--
ALTER TABLE `detalles_pedido`
  ADD CONSTRAINT `detalles_pedido_ibfk_1` FOREIGN KEY (`IdPedido`) REFERENCES `pedidos` (`IdPedido`),
  ADD CONSTRAINT `detalles_pedido_ibfk_2` FOREIGN KEY (`IdProducto`) REFERENCES `productos` (`IdProducto`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`IdSubcategoria`) REFERENCES `subcategorias` (`IdSubcategoria`);

--
-- Filtros para la tabla `subcategorias`
--
ALTER TABLE `subcategorias`
  ADD CONSTRAINT `subcategorias_ibfk_1` FOREIGN KEY (`IdCategoria`) REFERENCES `categorias` (`IdCategoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
